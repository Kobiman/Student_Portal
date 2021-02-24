var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Department } from "../models/department";
import { Validator, Rules, Required, MinLength } from "../validator";
import { ViewModelHelper } from "../viewModelHelper";
import { BindingList2 } from "../BindingList2";
import { Toast } from "../toast/toast";
import { BallLoader } from "../loader/ballLoader";
export class DepartmentVm {
    constructor() {
        this.department = new Department();
        this.departments = [];
        this.schools = [];
        this.getDepartments = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch("https://localhost:44359/api/Department/GetDepartments");
                if (!res.ok) {
                }
                const data = yield res.json();
                this.departments = data.value;
                this.bindList("departments");
            }
            catch (error) { }
        });
        this.getSchools = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch("https://localhost:44359/api/School/GetSchools");
                if (!res.ok) {
                }
                const data = yield res.json();
                this.schools = data.value;
                this.schools.unshift({
                    name: "Please Select School",
                    academicYear: "",
                    semester: "",
                    institutionId: "",
                    institutionName: "",
                    schoolId: "",
                });
                new BindingList2().bind(this, "schools");
            }
            catch (error) { }
        });
        this.viewModelHelper = new ViewModelHelper();
        this.validator = new Validator();
        this.getDepartments();
        this.getSchools();
    }
    setupRules() {
        return [
            new Rules("name", [new Required(this.department.name), new MinLength(this.department.name, 2)]),
            new Rules("code", [new Required(this.department.code)]),
        ];
    }
    save() {
        let rules = this.setupRules();
        var errors = this.validator.addRules(rules).validate();
        this.viewModelHelper.showErrors(errors);
        if (!this.validator.hasErrors) {
            let school = this.schools.find((x) => x.name === this.department.schoolName);
            this.department.schoolId = school.schoolId;
            const options = {
                method: "POST",
                body: JSON.stringify(this.department),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                },
            };
            BallLoader.show();
            fetch("https://localhost:44359/api/Department/AddDepartment", options)
                .then((res) => res.json())
                .then((res) => {
                this.department = new Department();
                this.bind();
                this.getDepartments();
                Toast.success(res.message);
                BallLoader.hide();
            });
        }
    }
    bindList(id) {
        new BindingList2().bind(this, id);
    }
    bind() {
        this.department = this.viewModelHelper.addPropertyChangeNotification(this.department);
    }
}
//# sourceMappingURL=departmentVm.js.map