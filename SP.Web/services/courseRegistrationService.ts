import { BallLoader } from "../loader/ballLoader";
import { App } from "../app";

export class CourseRegistrationService {
  registeredCourses: any[];
  hasRegisterd: boolean = false;
  student: any;
  school: any;
  mountedCourses: any[] = [];
  elementId: string;

  constructor() {
    this.getStudent("UE20000119");
  }

  setElementId(elementId: string) {
    this.elementId = elementId;
  }

  getStudent = async (indexNumber: string) => {
    try {
      const res = await fetch(`${App.baseUri}/api/Student/GetStudent/${indexNumber}`);
      if (!res.ok) {
      }
      const data = await res.json();
      this.student = data.value;
      this.getSchoolByProgram(this.student.programOfStudy);
    } catch (error) {}
  };

  getSchoolByProgram = async (program: string) => {
    try {
      const res = await fetch(`${App.baseUri}/api/School/GetSchoolByProgram/${program}`);
      if (!res.ok) {
      }
      const data = await res.json();
      this.school = data.value;
      this.getRegisteredCourses(this.school.academicYear, this.school.semester, this.student.indexNumber);
      this.getMountedCourses(this.school.academicYear, this.school.semester, this.student.programOfStudy, this.student.level);
    } catch (error) {}
  };

  getRegisteredCourses = async (academicYear: string, semester: string, indexNumber: string) => {
    let request = { academicYear: academicYear, semester: semester, indexNumber: indexNumber };
    const options = {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    };
    await fetch(`${App.baseUri}/api/Department/GetRegisteredCourses`, options)
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
  };

  getMountedCourses = async (academicYear: string, semester: string, program: string, level: string) => {
    let request = { academicYear: academicYear, semester: semester, program: program, level: level };
    const options = {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    };
    await fetch(`${App.baseUri}/api/Department/GetMountedCoursesForRegistration`, options)
      .then((res) => res.json())
      .then((res) => {
        this.mountedCourses = res.value;
      });
  };
}
