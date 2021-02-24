var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SelectedCourse } from "../models/departmentWithCourses";
import { ViewModelHelper } from "../viewModelHelper";
import { BindingList2 } from "../BindingList2";
import { Rules, Required, Validator } from "../validator";
export class MountCourseViewModel {
    constructor() {
        this.mountedCourse = new SelectedCourse();
        this.lecturers = [];
        this.courses = [];
        this.selectedCourses = [];
        this.lookups = [];
        this.getCourses = (department) => __awaiter(this, void 0, void 0, function* () {
            let d = this.departments.find((x) => x.name === department);
            this.courses = d.courses;
            this.mountedCourse.department = department;
            this.getProgramsInDepartment(d.departmentId);
        });
        this.getProgramsInDepartment = (departmentId) => __awaiter(this, void 0, void 0, function* () {
            this.programs = this.programList.filter((x) => x.departmentId === departmentId);
            this.programs.unshift({ name: "Please Select Program" });
            if (this.programs.length === 0) {
                this.programs = [{ programId: "", name: "", code: "", departmentId: "" }];
            }
            this.bindList("programs");
        });
        this.getLookups = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch("https://localhost:44359/api/Lookup/GetLookups");
                if (!res.ok) {
                }
                const data = yield res.json();
                this.lookups = data.value;
                this.enrollmentOptions = this.lookups.filter((x) => x.type === "ENROLLMENT OPTION");
                this.enrollmentOptions.unshift({ name: "Please Select Enrollment Option" });
                this.categories = this.lookups.filter((x) => x.type === "COURSE CATEGORY");
                this.categories.unshift({ name: "Please Select Category" });
                this.levels = this.lookups.filter((x) => x.type === "LEVEL");
                this.levels.unshift({ name: "Please Select Level" });
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
                this.lecturers.unshift({ name: "Please Select Lecturer" });
            }
            catch (error) { }
        });
        this.getPrograms = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch("https://localhost:44359/api/Program/GetPrograms");
                if (!res.ok) {
                }
                const data = yield res.json();
                this.programList = data.value;
            }
            catch (error) { }
        });
        this.getDepartmentsWithCourses = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch("https://localhost:44359/api/Department/GetDepartmentsWithCourses");
                if (!res.ok) {
                }
                const data = yield res.json();
                this.departments = data.value;
                this.departments.unshift({ name: "Please Select Department" });
            }
            catch (error) { }
        });
        this.addCourse = (course) => {
            let rules = this.setupRules();
            var errors = this.validator.addRules(rules).validate();
            this.viewModelHelper.showErrors(errors);
            if (!this.validator.hasErrors) {
                let selectedCourse = {
                    enrollmentOption: this.mountedCourse.enrollmentOption,
                    course: course,
                    courseCode: this.courses.find((x) => x.name === course).code,
                    credit: this.courses.find((x) => x.name === course).credit,
                    category: this.mountedCourse.category,
                    limit: this.mountedCourse.limit,
                    level: this.mountedCourse.level,
                    scoring: this.mountedCourse.scoring === "on" ? "true" : "false",
                    assignedTo: this.mountedCourse.assignedTo,
                    department: this.mountedCourse.department,
                    program: this.mountedCourse.program,
                };
                this.selectedCourses.push(selectedCourse);
            }
        };
        this.viewModelHelper = new ViewModelHelper();
        this.validator = new Validator();
        this.getLookups();
        this.getLecturers();
        this.getDepartmentsWithCourses();
        this.getPrograms();
    }
    setupRules() {
        return [
            new Rules("enrollmentOption", [new Required(this.mountedCourse.enrollmentOption)]),
            new Rules("ctegory", [new Required(this.mountedCourse.category)]),
            new Rules("level", [new Required(this.mountedCourse.level)]),
            new Rules("assignedTo", [new Required(this.mountedCourse.assignedTo)]),
            new Rules("department", [new Required(this.mountedCourse.department)]),
            new Rules("program", [new Required(this.mountedCourse.program)]),
        ];
    }
    bind() {
        this.mountedCourse = this.viewModelHelper.addPropertyChangeNotification(this.mountedCourse);
    }
    save() {
        if (this.selectedCourses.length === 0) {
        }
        else {
            let courses = this.selectedCourses.map((x) => this.mapCourses(x));
            // let groups = _.groupBy(selectedCourses, function (course) {
            //   return {
            //     EnrollmentOption: course.EnrollmentOption,
            //     Level: course.Level,
            //     Semester: course.Semester,
            //     AcademicYear: course.AcademicYear,
            //     ProgramId: course.ProgramId,
            //     AssignedBy: course.AssignedBy,
            //   };
            // });
            // let courses = Object.keys(groups).map(function (group) {
            //   let j = JSON.parse(group);
            //   let g = groups[group];
            //   return {
            //     EnrollmentOption: j.EnrollmentOption,
            //     Level: j.Level,
            //     Semester: j.Semester,
            //     AcademicYear: j.AcademicYear,
            //     ProgramId: j.ProgramId,
            //     AssignedBy: j.AssignedBy,
            //     MountedCourses: g.map(
            //       (x) =>
            //         new Object({
            //           Category: x.Category,
            //           Scoring: x.Scoring === "true" ? true : false,
            //           CourseName: x.CourseName,
            //           CourseCode: x.CourseCode,
            //           Credit: x.Credit,
            //           AssignedTo: x.AssignedTo,
            //         })
            //     ),
            //   };
            // });
            let j = JSON.stringify(courses);
            console.log(j);
            const options = {
                method: "POST",
                body: j,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                },
            };
            fetch("https://localhost:44359/api/Department/MountCourse", options)
                .then((res) => res.json())
                .then((res) => {
                console.log(res);
                this.selectedCourses = [];
                //App.navigate('/app/studentList');
            });
        }
    }
    mapCourses(x) {
        let department = this.departments.find((d) => d.name === x.department);
        return new Object({
            EnrollmentOption: x.enrollmentOption,
            Category: x.category,
            Level: x.level,
            Scoring: x.scoring === "true" ? true : false,
            CourseName: x.course,
            CourseCode: x.courseCode,
            Credit: x.credit,
            ProgramId: this.programList.find((p) => p.name === x.program).programId,
            Semester: department.semester,
            AssignedTo: x.assignedTo,
            AcademicYear: department.academicYear,
            AssignedBy: "hhj",
        });
    }
    bindList(id) {
        new BindingList2().bind(this, id);
    }
}
//# sourceMappingURL=mountCourseViewModel.js.map