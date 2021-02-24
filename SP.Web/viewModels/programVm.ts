import { Validator, Rules, Required } from "../validator";
import { ViewModelHelper } from "../viewModelHelper";
import { Program } from "../models/program";
import { Department } from "../models/department";
import { BindingList2 } from "../BindingList2";
import { Toast } from "../toast/toast";
import { BallLoader } from "../loader/ballLoader";

export class ProgramViewModel {
  validator: Validator;
  viewModelHelper: ViewModelHelper;
  program: Program = new Program();
  departments: Department[] = [];
  programs: any[] = [];

  constructor() {
    this.viewModelHelper = new ViewModelHelper();
    this.validator = new Validator();
    this.getDepartments();
    this.getPrograms();
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

  getPrograms = async () => {
    try {
      const res = await fetch("https://localhost:44359/api/Program/GetPrograms");
      if (!res.ok) {
      }
      const data = await res.json();
      this.programs = data.value;
      this.bindList("programs");
    } catch (error) {}
  };

  bindList(id: string) {
    new BindingList2().bind(this, id);
  }

  bind() {
    this.program = this.viewModelHelper.addPropertyChangeNotification(this.program);
  }

  setupRules() {
    return [
      new Rules("department", [new Required(this.program.department)]),
      new Rules("name", [new Required(this.program.name)]),
      new Rules("duration", [new Required(this.program.duration)]),
    ];
  }

  addSpecialization(data) {
    this.program.specializations.push(data);
  }

  removeSpecialization(index) {
    this.program.specializations.splice(index, 1);
  }

  save() {
    let rules = this.setupRules();
    var errors = this.validator.addRules(rules).validate();
    this.viewModelHelper.showErrors(errors);
    if (!this.validator.hasErrors) {
      let department = this.departments.find((x) => x.name === this.program.department);
      this.program.departmentId = department.departmentId;
      const options = {
        method: "POST",
        body: JSON.stringify(this.program),
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      };

      BallLoader.show();

      fetch("https://localhost:44359/api/Program/AddProgram", options)
        .then((res) => res.json())
        .then((res) => {
          this.program = new Program();
          this.bind();
          this.getPrograms();

          Toast.success(res.message);
          BallLoader.hide();
        });
    }
  }
}
