import { Department } from "../models/department";
import { Validator, Rules, Required, MinLength } from "../validator";
import { ViewModelHelper } from "../viewModelHelper";
import { School } from "../models/school";
import { BindingList2 } from "../BindingList2";
import { Toast } from "../toast/toast";
import { BallLoader } from "../loader/ballLoader";
import { App } from "../app";

export class DepartmentVm {
  validator: Validator;
  viewModelHelper: ViewModelHelper;
  department: Department = new Department();
  departments: Department[] = [];
  schools: School[] = [];

  constructor() {
    this.viewModelHelper = new ViewModelHelper();
    this.validator = new Validator();
    this.getDepartments();
    this.getSchools();
  }

  setupRules() {
    return [
      new Rules("name", [new Required(this.department.name), new MinLength(this.department.name, 2)]),
      new Rules("code", [new Required(this.department.code)]),
    ];
  }

  save() {
    let rules = this.setupRules();
    var errors = this.validator.addRules(rules).validate();
    this.viewModelHelper.showErrors(errors);
    if (!this.validator.hasErrors) {
      let school = this.schools.find((x) => x.name === this.department.schoolName);
      this.department.schoolId = school.schoolId;
      const options = {
        method: "POST",
        body: JSON.stringify(this.department),
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      };
      BallLoader.show();
      fetch(`${App.baseUri}/api/Department/AddDepartment`, options)
        .then((res) => res.json())
        .then((res) => {
          this.department = new Department();
          this.bind();
          this.getDepartments();

          Toast.success(res.message);
          BallLoader.hide();
        });
    }
  }

  getDepartments = async () => {
    try {
      const res = await fetch(`${App.baseUri}/api/Department/GetDepartments`);
      if (!res.ok) {
      }
      const data = await res.json();

      this.departments = data.value;
      this.bindList("departments");
    } catch (error) {}
  };

  bindList(id: string) {
    new BindingList2().bind(this, id);
  }

  getSchools = async () => {
    try {
      const res = await fetch(`${App.baseUri}/api/School/GetSchools`);
      if (!res.ok) {
      }
      const data = await res.json();
      this.schools = data.value as School[];
      this.schools.unshift({
        name: "Please Select School",
        academicYear: "",
        semester: "",
        institutionId: "",
        institutionName: "",
        schoolId: "",
      });

      new BindingList2().bind(this, "schools");
    } catch (error) {}
  };

  bind() {
    this.department = this.viewModelHelper.addPropertyChangeNotification(this.department);
  }
}
