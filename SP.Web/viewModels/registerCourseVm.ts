import { App } from "../app";
import { Toast } from "../toast/toast";
import { CourseRegistrationService } from "../services/courseRegistrationService";

export class RegisterCourseVm {
  courseList: any[];
  selectedCourses: any[] = [];
  constructor(private _courseRegistrationService: CourseRegistrationService) {}

  getRegisteredCourses() {
    return this._courseRegistrationService.mountedCourses;
  }

  addCourse = (courseCode: any) => {
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

  removeCourse = (courseCode: any) => {
    let selectedCourse = this.selectedCourses.find((x) => x.courseCode === courseCode);
    if (selectedCourse) {
      let index = this.selectedCourses.indexOf(selectedCourse);
      this.selectedCourses.splice(index, 1);
    }
  };

  save = async () => {
    if (this.selectedCourses.length === 0) {
    } else {
      let courses = this.selectedCourses.map(
        (x) =>
          new Object({
            studentId: x.studentId,
            mountedCoureId: x.mountedCoureId,
            indexNumber: x.indexNumber,
            semester: x.semester,
            academicYear: x.academicYear,
            approved: x.approved,
          })
      );

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
  };
}
