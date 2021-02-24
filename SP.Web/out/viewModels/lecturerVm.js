var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Validator, Rules, Required, Email } from "../validator";
import { ViewModelHelper } from "../viewModelHelper";
import { Lecturer } from "../models/lecturer";
import { BindingList2 } from "../BindingList2";
import { BallLoader } from "../loader/ballLoader";
import { Toast } from "../toast/toast";
export class LecturerVm {
    constructor() {
        this.lecturer = new Lecturer();
        this.departments = [];
        this.lecturers = [];
        this.getDepartments = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch("https://localhost:44359/api/Department/GetDepartments");
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
        this.getLecturers = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch("https://localhost:44359/api/Lecturer/GetLecturers");
                if (!res.ok) {
                }
                const data = yield res.json();
                this.lecturers = data.value;
                this.bindList("lecturers");
            }
            catch (error) { }
        });
        this.viewModelHelper = new ViewModelHelper();
        this.validator = new Validator();
        this.getDepartments();
        this.getLecturers();
    }
    setupRules() {
        return [
            new Rules("name", [new Required(this.lecturer.name)]),
            new Rules("department", [new Required(this.lecturer.department)]),
            new Rules("staffId", [new Required(this.lecturer.staffId)]),
            new Rules("telephone", [new Required(this.lecturer.telephone)]),
            new Rules("email", [new Required(this.lecturer.email), new Email(this.lecturer.email)]),
            new Rules("address", [new Required(this.lecturer.address)]),
        ];
    }
    save() {
        let rules = this.setupRules();
        var errors = this.validator.addRules(rules).validate();
        this.viewModelHelper.showErrors(errors);
        if (!this.validator.hasErrors) {
            let department = this.departments.find((x) => x.name === this.lecturer.department);
            this.lecturer.departmentId = department.departmentId;
            const options = {
                method: "POST",
                body: JSON.stringify(this.lecturer),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                },
            };
            BallLoader.show();
            fetch("https://localhost:44359/api/Lecturer/AddLecturer", options)
                .then((res) => res.json())
                .then((res) => {
                this.lecturer = new Lecturer();
                this.bind();
                this.getLecturers();
                Toast.success(res.message);
                BallLoader.hide();
            });
        }
    }
    bindList(id) {
        new BindingList2().bind(this, id);
    }
    bind() {
        this.lecturer = this.viewModelHelper.addPropertyChangeNotification(this.lecturer);
    }
}
//# sourceMappingURL=lecturerVm.js.map