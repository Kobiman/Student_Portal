import { BindingList2 } from "../BindingList2";
import { ViewModelHelper } from "../viewModelHelper";
import { Validator, Rules, Required, MinLength } from "../validator";
import { Department } from "../models/department";
import { Course } from "../models/Course";
import { BallLoader } from "../loader/ballLoader";
import { Toast } from "../toast/toast";

export class CourseVm {
  validator: Validator;
  viewModelHelper: ViewModelHelper;
  course: Course = new Course();
  departments: Department[] = [];
  courses: Course[] = [];

  constructor() {
    this.viewModelHelper = new ViewModelHelper();
    this.validator = new Validator();
    this.getDepartments();
    this.getCourses();
  }

  setupRules() {
    return [
      new Rules("name", [new Required(this.course.name), new MinLength(this.course.name, 2)]),
      //new Rules("category", [new Required(this.course.category)]),
      new Rules("code", [new Required(this.course.code)]),
      new Rules("credit", [new Required(this.course.credit)]),
    ];
  }

  save() {
    let rules = this.setupRules();
    var errors = this.validator.addRules(rules).validate();
    this.viewModelHelper.showErrors(errors);
    if (!this.validator.hasErrors) {
      let department = this.departments.find((x) => x.name === this.course.department);
      this.course.departmentId = department.departmentId;
      const options = {
        method: "POST",
        body: JSON.stringify(this.course),
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      };

      BallLoader.show();
      fetch("https://localhost:44359/api/Course/AddCourse", options)
        .then((res) => res.json())
        .then((res) => {
          this.course = new Course();
          this.bind();
          this.getCourses();
          Toast.success(res.message);
          BallLoader.hide();
        });
    }
  }

  getDepartments = async () => {
    try {
      const res = await fetch("https://localhost:44359/api/Department/GetDepartments");
      if (!res.ok) {
      }
      const data = await res.json();
      this.departments = data.value;
      this.departments.unshift({
        departmentId: "",
        name: "Please Select Department",
        code: "",
        schoolId: "",
        schoolName: "",
      });
      this.bindList("departments");
    } catch (error) {}
  };

  getCourses = async () => {
    try {
      const res = await fetch("https://localhost:44359/api/Course/GetCourses");
      if (!res.ok) {
      }
      const data = await res.json();
      this.courses = data.value as Course[];

      new BindingList2().bind(this, "courses");
    } catch (error) {}
  };

  bindList(id: string) {
    new BindingList2().bind(this, id);
  }

  bind() {
    this.course = this.viewModelHelper.addPropertyChangeNotification(this.course);
  }
}
