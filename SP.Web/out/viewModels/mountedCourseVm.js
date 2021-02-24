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
import { MountedRow } from "../views/mountCourse/mountedCoursesView";
import { BallLoader } from "../loader/ballLoader";
import { _ } from "../group";
export class MountedCourseVm {
    constructor(commonService) {
        this.commonService = commonService;
        this.programs = [];
        this.courseList = [];
        this.enrollmentOptions = [];
        this.categories = [];
        this.levels = [];
        this.scoring = [{ name: "Please Select Scoring" }, { name: "" }, { name: "True" }, { name: "False" }];
        this.filter = {};
        this.querys = [];
        this.getMountedCourses = () => __awaiter(this, void 0, void 0, function* () {
            if (this.request.academicYear && this.request.program) {
                const options = {
                    method: "POST",
                    body: JSON.stringify(this.request),
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "*/*",
                    },
                };
                BallLoader.show();
                yield fetch("https://localhost:44359/api/Department/GetMountedCourses", options)
                    .then((res) => res.json())
                    .then((res) => {
                    this.courseList = res.value;
                    for (let c of this.courseList) {
                        if (c.scoring === true) {
                            c.isScoring = "True";
                        }
                        else if (c.scoring === false) {
                            c.isScoring = "False";
                        }
                    }
                    let groups = _.groupBy(this.courseList, function (course) {
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
                    new MountedRow(courses, this).render();
                    BallLoader.hide();
                    //this.bindList("courses");
                    //App.navigate('/app/studentList');
                });
            }
        });
        this.getPrograms = () => {
            this.programs = this.commonService.programs;
        };
        this.getLookups = () => {
            this.semesters = this.commonService.lookups.filter((x) => x.type === "SEMESTER");
            this.semesters.unshift({ name: "" });
            this.semesters.unshift({ name: "Please Select Semester" });
            this.academicYears = this.commonService.lookups.filter((x) => x.type === "ACADEMIC YEAR");
            this.enrollmentOptions = this.commonService.lookups.filter((x) => x.type === "ENROLLMENT OPTION");
            this.enrollmentOptions.unshift({ name: "" });
            this.enrollmentOptions.unshift({ name: "Please Select Enrollment Option" });
            this.categories = this.commonService.lookups.filter((x) => x.type === "COURSE CATEGORY");
            this.categories.unshift({ name: "" });
            this.categories.unshift({ name: "Please Select Category" });
            this.levels = this.commonService.lookups.filter((x) => x.type === "LEVEL");
            this.levels.unshift({ name: "" });
            this.levels.unshift({ name: "Please Select Level" });
        };
        this.viewModelHelper = new ViewModelHelper();
        this.getLookups();
        this.getPrograms();
        this.request = {};
    }
    getLecturers() {
        return this.commonService.lecturers;
    }
    bind() {
        this.request = this.viewModelHelper.addPropertyChangeNotification(this.request);
    }
    bindList(id) {
        new BindingList2().bind(this, id);
    }
    search() {
        this.courses = this.courseList.filter((a) => this.executeQuery(a, this.querys));
        this.bindList("courses");
    }
    IsEqualTo(source, propertyName, parameter) {
        return source[propertyName] === parameter;
    }
    buidQuery(propertyName, parameter) {
        var item = this.querys.find((x) => x.propertyName === propertyName);
        if (item != null) {
            var index = this.querys.indexOf(item);
            this.querys.splice(index, 1);
        }
        if (parameter != "") {
            this.querys.push({ propertyName: propertyName, parameter: parameter });
        }
        this.search();
    }
    executeQuery(source, querys) {
        var result = true;
        for (var query of querys) {
            result = result && this.IsEqualTo(source, query.propertyName, query.parameter);
        }
        return result;
    }
}
//# sourceMappingURL=mountedCourseVm.js.map