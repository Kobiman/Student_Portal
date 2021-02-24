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
import { Toast } from "../toast/toast";
export class RegisterCourseVm {
    constructor(_courseRegistrationService) {
        this._courseRegistrationService = _courseRegistrationService;
        this.selectedCourses = [];
        this.addCourse = (courseCode) => {
            let mountedCourse = this.courseList.find((x) => x.courseCode === courseCode);
            let selectedCourse = {
                courseCode: courseCode,
                studentId: this._courseRegistrationService.student.studentId,
                mountedCoureId: mountedCourse.mountedCoureId,
                indexNumber: this._courseRegistrationService.student.indexNumber,
                semester: mountedCourse.semester,
                academicYear: mountedCourse.academicYear,
                approved: false,
            };
            this.selectedCourses.push(selectedCourse);
        };
        this.removeCourse = (courseCode) => {
            let selectedCourse = this.selectedCourses.find((x) => x.courseCode === courseCode);
            if (selectedCourse) {
                let index = this.selectedCourses.indexOf(selectedCourse);
                this.selectedCourses.splice(index, 1);
            }
        };
        this.save = () => __awaiter(this, void 0, void 0, function* () {
            if (this.selectedCourses.length === 0) {
            }
            else {
                let courses = this.selectedCourses.map((x) => new Object({
                    studentId: x.studentId,
                    mountedCoureId: x.mountedCoureId,
                    indexNumber: x.indexNumber,
                    semester: x.semester,
                    academicYear: x.academicYear,
                    approved: x.approved,
                }));
                let j = JSON.stringify(courses);
                const options = {
                    method: "POST",
                    body: j,
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "*/*",
                    },
                };
                fetch(`${App.baseUri}/api/Department/RegisterCourse`, options)
                    .then((res) => res.json())
                    .then((res) => {
                    this.selectedCourses = [];
                    Toast.success(res.message);
                });
            }
        });
    }
    getRegisteredCourses() {
        return this._courseRegistrationService.mountedCourses;
    }
}
//# sourceMappingURL=registerCourseVm.js.map