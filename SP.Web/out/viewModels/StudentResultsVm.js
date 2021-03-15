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
import { BallLoader } from "../loader/ballLoader";
import { App } from "../app";
export class StudentResultsVm {
    constructor(commonService) {
        this.commonService = commonService;
        this.lookups = [];
        this.academicYears = [];
        this.semesters = [];
        this.programs = [];
        this.levels = [];
        this.filter = {};
        this.querys = [];
        this.getStudentResults = () => __awaiter(this, void 0, void 0, function* () {
            try {
                BallLoader.show();
                const res = yield fetch(`${App.baseUri}/api/Student/GetStudents`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.results = data.value;
                new BindingList2().bindCollection(this);
            }
            catch (error) {
            }
        });
        this.getPrograms = () => {
            this.programs = this.commonService.programs;
        };
        this.getLookups = () => {
            this.academicYears = this.commonService.lookups.filter((x) => x.type === "ACADEMIC YEAR");
            // this.semesters.unshift({ name: "Please Select Academic Year" });
            this.semesters = this.commonService.lookups.filter((x) => x.type === "SEMESTER");
            // this.semesters.unshift({ name: "Please Select Semester" });
            this.levels = this.commonService.lookups.filter((x) => x.type === "LEVEL");
            // this.levels.unshift({ name: "Please Select Level" });
        };
        this.viewModelHelper = new ViewModelHelper();
        this.getLookups();
        this.getPrograms();
        this.request = {};
        this.getStudentResults();
    }
}
//# sourceMappingURL=StudentResultsVm.js.map