var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { School } from "../models/school";
import { Validator, Rules, Required, MinLength } from "../validator";
import { ViewModelHelper } from "../viewModelHelper";
import { BindingList2 } from "../BindingList2";
import { BallLoader } from "../loader/ballLoader";
import { Toast } from "../toast/toast";
export class SchoolVm {
    constructor(commonService) {
        this.commonService = commonService;
        this.school = new School();
        this.institutionList = [];
        this.institutions = [];
        this.schools = [];
        this.lookups = [];
        this.semesters = [];
        this.academicYears = [];
        this.getSchools = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch("https://localhost:44359/api/School/GetSchools");
                if (!res.ok) {
                }
                const data = yield res.json();
                this.schools = data.value;
                new BindingList2().bind(this, "schools");
            }
            catch (error) { }
        });
        this.getInstitutions = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch("https://localhost:44359/api/Institution/GetInstitutions");
                if (!res.ok) {
                }
                const data = yield res.json();
                this.institutionList = data.value;
                this.institutions = this.institutionList.map((x) => ({ institutionNane: x.name, code: x.code }));
                this.institutions.unshift({ institutionNane: "Please select institution", code: "" });
                new BindingList2().bind(this, "institutions");
            }
            catch (error) { }
        });
        this.getLookups = () => __awaiter(this, void 0, void 0, function* () {
            this.semesters = this.commonService.lookups.filter((x) => x.type === "SEMESTER");
            this.academicYears = this.commonService.lookups.filter((x) => x.type === "ACADEMIC YEAR");
        });
        this.viewModelHelper = new ViewModelHelper();
        this.validator = new Validator();
        this.getInstitutions();
        this.getSchools();
        this.getLookups();
    }
    setupRules() {
        return [
            new Rules("name", [new Required(this.school.name), new MinLength(this.school.name, 2)]),
            new Rules("academicYear", [new Required(this.school.academicYear)]),
            new Rules("semester", [new Required(this.school.semester)]),
            new Rules("institutionName", [new Required(this.school.institutionName)]),
        ];
    }
    save() {
        let rules = this.setupRules();
        var errors = this.validator.addRules(rules).validate();
        this.viewModelHelper.showErrors(errors);
        if (!this.validator.hasErrors) {
            let institution = this.institutionList.find((x) => x.name === this.school.institutionName);
            this.school.institutionId = institution.institutionId;
            const options = {
                method: "POST",
                body: JSON.stringify(this.school),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                },
            };
            BallLoader.show();
            fetch("https://localhost:44359/api/School/AddSchool", options)
                .then((res) => res.json())
                .then((res) => {
                this.school = new School();
                this.bind();
                this.getSchools();
                Toast.success(res.message);
                BallLoader.hide();
            });
        }
    }
    bindList(id) {
        new BindingList2().bind(this, id);
    }
    bind() {
        this.school = this.viewModelHelper.addPropertyChangeNotification(this.school);
    }
}
//# sourceMappingURL=schoolVm.js.map