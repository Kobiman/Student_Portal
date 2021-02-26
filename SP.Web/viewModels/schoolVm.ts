import { School } from "../models/school";
import { Validator, Rules, Required, MinLength } from "../validator";
import { ViewModelHelper } from "../viewModelHelper";
import { Institution } from "../models/institution";
import { BindingList2 } from "../BindingList2";
import { Lookup } from "../models/lookup";
import { CommonService } from "../services/commonService";
import { BallLoader } from "../loader/ballLoader";
import { Toast } from "../toast/toast";
import { App } from "../app";

export class SchoolVm {
  validator: Validator;
  viewModelHelper: ViewModelHelper;
  school: School = new School();
  institutionList: Institution[] = [];
  institutions = [];

  schools: School[] = [];
  lookups: Lookup[] = [];
  semesters: any[] = [];
  academicYears: Lookup[] = [];

  constructor(private commonService: CommonService) {
    this.viewModelHelper = new ViewModelHelper();
    this.validator = new Validator();
    this.getInstitutions();
    this.getSchools();
    this.getLookups();
  }

  setupRules() {
    return [
      new Rules("name", [new Required(this.school.name), new MinLength(this.school.name, 2)]),
      new Rules("academicYear", [new Required(this.school.academicYear)]),
      new Rules("semester", [new Required(this.school.semester)]),
      new Rules("institutionName", [new Required(this.school.institutionName)]),
    ];
  }

  save() {
    let rules = this.setupRules();
    var errors = this.validator.addRules(rules).validate();
    this.viewModelHelper.showErrors(errors);
    if (!this.validator.hasErrors) {
      let institution = this.institutionList.find((x) => x.name === this.school.institutionName);
      this.school.institutionId = institution.institutionId;
      const options = {
        method: "POST",
        body: JSON.stringify(this.school),
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      };
      BallLoader.show();
      fetch(`${App.baseUri}/api/School/AddSchool`, options)
        .then((res) => res.json())
        .then((res) => {
          this.school = new School();
          this.bind();
          this.getSchools();
          Toast.success(res.message);
          BallLoader.hide();
        });
    }
  }

  getSchools = async () => {
    try {
      const res = await fetch(`${App.baseUri}/api/School/GetSchools`);
      if (!res.ok) {
      }
      const data = await res.json();
      this.schools = data.value as School[];

      new BindingList2().bind(this, "schools");
    } catch (error) {}
  };

  getInstitutions = async () => {
    try {
      const res = await fetch(`${App.baseUri}/api/Institution/GetInstitutions`);
      if (!res.ok) {
      }
      const data = await res.json();
      this.institutionList = data.value as Institution[];
      this.institutions = this.institutionList.map((x) => ({ institutionNane: x.name, code: x.code }));
      this.institutions.unshift({ institutionNane: "Please select institution", code: "" });
      new BindingList2().bind(this, "institutions");
    } catch (error) {}
  };

  getLookups = async () => {
    this.semesters = this.commonService.lookups.filter((x) => x.type === "SEMESTER");
    this.academicYears = this.commonService.lookups.filter((x) => x.type === "ACADEMIC YEAR");

  };

  bindList(id: string) {
    new BindingList2().bind(this, id);
  }
  bind() {
    this.school = this.viewModelHelper.addPropertyChangeNotification(this.school);
  }
}
