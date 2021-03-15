var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SelectedCourse } from "../models/SelectedCourse";
import { ViewModelHelper } from "../viewModelHelper";
import { BindingList2 } from "../BindingList2";
import { Rules, Required, Validator } from "../validator";
import { _ } from "../group";
import { Toast } from "../toast/toast";
import { App } from "../app";
export class MountCourseViewModel {
    constructor(commonService) {
        this.commonService = commonService;
        this.mountedCourse = new SelectedCourse();
        this.enrollmentOptions = [];
        this.levels = [];
        this.lecturers = [];
        this.courses = [];
        this.selectedCourses = [];
        this.categories = [];
        this.programs = [];
        this.lookups = [];
        this.specializations = [];
        this.departments = [];
        this.muntedCourseList = [];
        this.getCourses = (department) => __awaiter(this, void 0, void 0, function* () {
            let d = this.departments.find((x) => x.name === department);
            this.courses = d.courses;
            this.mountedCourse.department = department;
            this.setProgramsInDepartment(d.departmentId);
        });
        this.setProgramsInDepartment = (departmentId) => {
            this.programs = this.commonService.programs.filter((x) => x.departmentId === departmentId);
        };
        this.addCourse = (course) => {
            let rules = this.setupRules();
            var errors = this.validator.addRules(rules).validate();
            this.viewModelHelper.showErrors(errors);
            if (!this.validator.hasErrors) {
                let selectedCourse = {
                    enrollmentOption: this.mountedCourse.enrollmentOption,
                    course: course,
                    courseCode: this.courses.find((x) => x.courseName === course).code,
                    credit: this.courses.find((x) => x.courseName === course).credit,
                    specialization: this.mountedCourse.specialization,
                    category: this.getSpecialization(this.mountedCourse.level, this.mountedCourse.specialization).type,
                    level: this.mountedCourse.level,
                    scoring: this.mountedCourse.scoring,
                    assignedTo: this.mountedCourse.assignedTo,
                    department: this.mountedCourse.department,
                    program: this.mountedCourse.program,
                };
                let c = this.selectedCourses.find((x) => x.level === selectedCourse.level &&
                    x.enrollmentOption === selectedCourse.enrollmentOption &&
                    x.courseCode === selectedCourse.courseCode &&
                    x.course === selectedCourse.course);
                if (!c) {
                    this.selectedCourses.push(selectedCourse);
                    let groups = _.groupBy(this.selectedCourses, function (course) {
                        return {
                            enrollmentOption: course.enrollmentOption,
                            category: course.category,
                            program: course.program,
                            level: course.level,
                        };
                    });
                    let courses = Object.keys(groups).map(function (group) {
                        let j = JSON.parse(group);
                        let g = groups[group];
                        return {
                            enrollmentOption: j.enrollmentOption,
                            level: j.level,
                            program: j.program,
                            category: j.category,
                            mountedCourses: g,
                        };
                    });
                    return courses;
                }
                else {
                    Toast.warning("Course Already Exist");
                }
                return null;
            }
        };
        this.viewModelHelper = new ViewModelHelper();
        this.validator = new Validator();
        //this.getMountedCourses();
    }
    getEnrollmentOption() {
        this.enrollmentOptions = this.commonService.lookups.filter((x) => x.type === "ENROLLMENT OPTION");
        this.departments = this.commonService.departments;
        return this.enrollmentOptions;
    }
    getLecturers() {
        return this.commonService.lecturers;
    }
    getLevels() {
        return this.commonService.lookups.filter((x) => x.type === "LEVEL");
    }
    getDepartments() {
        this.departments = this.commonService.departments;
        return this.departments;
    }
    getSpecializations(level) {
        let program = this.commonService.programs.find((x) => x.name === this.mountedCourse.program);
        this.specializations = program.specializations.filter((x) => x.level === level);
    }
    getSpecialization(level, name) {
        let program = this.commonService.programs.find((x) => x.name === this.mountedCourse.program);
        return program.specializations.find((x) => x.level === level && x.name === name);
    }
    setupRules() {
        return [
            new Rules("enrollmentOption", [new Required(this.mountedCourse.enrollmentOption)]),
            new Rules("specialization", [new Required(this.mountedCourse.specialization)]),
            new Rules("level", [new Required(this.mountedCourse.level)]),
            new Rules("assignedTo", [new Required(this.mountedCourse.assignedTo)]),
            new Rules("department", [new Required(this.mountedCourse.department)]),
            new Rules("program", [new Required(this.mountedCourse.program)]),
        ];
    }
    removeCourse(rowIndex) {
        this.selectedCourses.splice(rowIndex, 1);
    }
    bind() {
        this.mountedCourse = this.viewModelHelper.addPropertyChangeNotification(this.mountedCourse);
    }
    save() {
        if (this.selectedCourses.length === 0) {
        }
        else {
            let courses = this.selectedCourses.map((x) => this.mapCourses(x));
            let j = JSON.stringify(courses);
            const options = {
                method: "POST",
                body: j,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                },
            };
            fetch(`${App.baseUri}/api/Department/MountCourse`, options)
                .then((res) => res.json())
                .then((res) => {
                this.selectedCourses = [];
                Toast.success(res.message);
            });
        }
    }
    mapCourses(x) {
        let department = this.departments.find((d) => d.name === x.department);
        return new Object({
            EnrollmentOption: x.enrollmentOption,
            Category: x.category,
            Specialization: x.specialization,
            Level: x.level,
            Scoring: x.scoring,
            CourseName: x.course,
            CourseCode: x.courseCode,
            Credit: x.credit,
            ProgramId: this.commonService.programs.find((p) => p.name === x.program).programId,
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
//# sourceMappingURL=mountCourseVm.js.map