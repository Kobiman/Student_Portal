var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BindingList2 } from "../BindingList2";
import { ViewModelHelper } from "../viewModelHelper";
import { Validator, Rules, Required, MinLength } from "../validator";
import { Course } from "../models/Course";
import { BallLoader } from "../loader/ballLoader";
import { Toast } from "../toast/toast";
import { App } from "../app";
export class CourseVm {
    constructor() {
        this.course = new Course();
        this.departments = [];
        this.courses = [];
        this.getDepartments = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${App.baseUri}/api/Department/GetDepartments`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.departments = data.value;
                this.departments.unshift({
                    departmentId: "",
                    name: "Please Select Department",
                    code: "",
                    schoolId: "",
                    schoolName: "",
                });
                this.bindList("departments");
            }
            catch (error) { }
        });
        this.getCourses = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${App.baseUri}/api/Course/GetCourses`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.courses = data.value;
                new BindingList2().bind(this, "courses");
            }
            catch (error) { }
        });
        this.viewModelHelper = new ViewModelHelper();
        this.validator = new Validator();
        this.getDepartments();
        this.getCourses();
    }
    setupRules() {
        return [
            new Rules("name", [new Required(this.course.courseName), new MinLength(this.course.courseName, 2)]),
            //new Rules("category", [new Required(this.course.category)]),
            new Rules("code", [new Required(this.course.code)]),
            new Rules("credit", [new Required(this.course.credit)]),
        ];
    }
    save() {
        let rules = this.setupRules();
        var errors = this.validator.addRules(rules).validate();
        this.viewModelHelper.showErrors(errors);
        if (!this.validator.hasErrors) {
            let department = this.departments.find((x) => x.name === this.course.department);
            this.course.departmentId = department.departmentId;
            const options = {
                method: "POST",
                body: JSON.stringify(this.course),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                },
            };
            BallLoader.show();
            fetch(`${App.baseUri}/api/Course/AddCourse`, options)
                .then((res) => res.json())
                .then((res) => {
                this.course = new Course();
                this.bind();
                this.getCourses();
                Toast.success(res.message);
                BallLoader.hide();
            });
        }
    }
    bindList(id) {
        new BindingList2().bind(this, id);
    }
    bind() {
        this.course = this.viewModelHelper.addPropertyChangeNotification(this.course);
    }
}
//# sourceMappingURL=courseVm.js.map