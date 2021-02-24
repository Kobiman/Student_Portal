var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { App } from "../app";
export class CommonService {
    constructor() {
        this.lookups = [];
        this.lecturers = [];
        this.departments = [];
        this.programs = [];
        this.getLookups = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${App.baseUri}/api/Lookup/GetLookups`);
                if (!res.ok) {
                }
                else {
                    const data = yield res.json();
                    this.lookups = data.value;
                }
            }
            catch (error) { }
        });
        this.getLecturers = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${App.baseUri}/api/Lecturer/GetLecturers`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.lecturers = data.value;
            }
            catch (error) { }
        });
        this.getDepartmentsWithCourses = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${App.baseUri}/api/Department/GetDepartmentsWithCourses`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.departments = data.value;
            }
            catch (error) { }
        });
        this.getPrograms = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${App.baseUri}/api/Program/GetPrograms`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.programs = data.value;
            }
            catch (error) { }
        });
        this.getLookups();
        this.getLecturers();
        this.getPrograms();
        this.getDepartmentsWithCourses();
    }
}
//# sourceMappingURL=commonService.js.map