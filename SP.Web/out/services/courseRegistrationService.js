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
export class CourseRegistrationService {
    constructor() {
        this.hasRegisterd = false;
        this.mountedCourses = [];
        this.getStudent = (indexNumber) => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${App.baseUri}/api/Student/GetStudent/${indexNumber}`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.student = data.value;
                this.getSchoolByProgram(this.student.programOfStudy);
            }
            catch (error) { }
        });
        this.getSchoolByProgram = (program) => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${App.baseUri}/api/School/GetSchoolByProgram/${program}`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.school = data.value;
                this.getRegisteredCourses(this.school.academicYear, this.school.semester, this.student.indexNumber);
                this.getMountedCourses(this.school.academicYear, this.school.semester, this.student.programOfStudy, this.student.level);
            }
            catch (error) { }
        });
        this.getRegisteredCourses = (academicYear, semester, indexNumber) => __awaiter(this, void 0, void 0, function* () {
            let request = { academicYear: academicYear, semester: semester, indexNumber: indexNumber };
            const options = {
                method: "POST",
                body: JSON.stringify(request),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                },
            };
            yield fetch(`${App.baseUri}/api/Department/GetRegisteredCourses`, options)
                .then((res) => res.json())
                .then((res) => {
                this.registeredCourses = res.value;
                //this.registeredCourses.map((x) => new RegisteredCoursesRow().render(x));
                if (this.registeredCourses.length > 0) {
                    this.hasRegisterd = true;
                    //new RegisteredCoursesView(new RegisteredCoursesVm(this)).render(this.elementId);
                    //new RegisterCourseView(new RegisterCourseVm(this)).render(this.elementId);
                }
            });
        });
        this.getMountedCourses = (academicYear, semester, program, level) => __awaiter(this, void 0, void 0, function* () {
            let request = { academicYear: academicYear, semester: semester, program: program, level: level };
            const options = {
                method: "POST",
                body: JSON.stringify(request),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                },
            };
            yield fetch(`${App.baseUri}/api/Department/GetMountedCoursesForRegistration`, options)
                .then((res) => res.json())
                .then((res) => {
                this.mountedCourses = res.value;
            });
        });
        this.getStudent("UE20000119");
    }
    setElementId(elementId) {
        this.elementId = elementId;
    }
}
//# sourceMappingURL=courseRegistrationService.js.map