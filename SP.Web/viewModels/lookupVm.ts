import { Validator, Rules, Required, MinLength } from "../validator";
import { ViewModelHelper } from "../viewModelHelper";
import { Lookup } from "../models/lookup";
import { Institution } from "../models/institution";
import { BindingList2 } from "../BindingList2";
import { App } from "../app";
import { Toast } from "../toast/toast";
import { BallLoader } from "../loader/ballLoader";

export class LookupVm {
  validator: Validator;
  viewModelHelper: ViewModelHelper;
  lookup: Lookup = new Lookup();
  institutions: Institution[] = [];
  lookups: Lookup[] = [];
  lookupTypes: any[] = [
    { name: "" },
    { name: "ENROLLMENT OPTION" },
    { name: "COURSE CATEGORY" },
    { name: "LEVEL" },
    { name: "SEMESTER" },
    { name: "ACADEMIC YEAR" },
  ];

  constructor() {
    this.viewModelHelper = new ViewModelHelper();
    this.validator = new Validator();
    this.getInstitutions();
    this.getLookups();
  }

  setupRules() {
    return [
      new Rules("name", [new Required(this.lookup.name)]),
      new Rules("type", [new Required(this.lookup.type)]),
      new Rules("institution", [new Required(this.lookup.institution)]),
    ];
  }

  save() {
    let rules = this.setupRules();
    var errors = this.validator.addRules(rules).validate();
    this.viewModelHelper.showErrors(errors);
    if (!this.validator.hasErrors) {
      let institution = this.institutions.find((x) => x.name === this.lookup.institution);
      this.lookup.institution = institution.institutionId;
      const options = {
        method: "POST",
        body: JSON.stringify(this.lookup),
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      };

      BallLoader.show();
      fetch(`${App.baseUri}/api/Lookup/AddLookup`, options)
        .then((res) => res.json())
        .then((res) => {
          this.lookup = new Lookup();
          this.bind();
          this.getLookups();
          Toast.success(res.message);
          BallLoader.hide();
        });
    }
  }

  getInstitutions = async () => {
    try {
      const res = await fetch("https://localhost:44359/api/Institution/GetInstitutions");
      if (!res.ok) {
      }
      const data = await res.json();
      this.institutions = data.value;
      var institution = new Institution();
      institution.name = "Please Select Institution";
      this.institutions.unshift(institution);
      this.bindList("institutions");
    } catch (error) {}
  };

  getLookups = async () => {
    try {
      const res = await fetch("https://localhost:44359/api/Lookup/GetLookups");
      if (!res.ok) {
      }
      const data = await res.json();
      this.lookups = data.value as Lookup[];
      new BindingList2().bind(this, "lookups");
    } catch (error) {}
  };

  bindList(id: string) {
    new BindingList2().bind(this, id);
  }

  bind() {
    this.lookup = this.viewModelHelper.addPropertyChangeNotification(this.lookup);
  }
}
