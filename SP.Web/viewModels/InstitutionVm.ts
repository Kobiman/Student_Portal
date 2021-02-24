import { Institution } from "../models/institution";
import { ViewModelHelper } from "../viewModelHelper";
import { Rules, Required, MinLength, Validator, Email } from "../validator";
import { BindingList2 } from "../BindingList2";
import { BallLoader } from "../loader/ballLoader";
import { AppChannel } from "../appChannel";
import { Constants } from "../constants";
import { Toast } from "../toast/toast";

export class InstitutionVm {
  viewModelHelper: ViewModelHelper;
  validator: Validator;
  institution: Institution = new Institution();
  institutions: Institution[] = [];

  constructor() {
    this.viewModelHelper = new ViewModelHelper();
    this.validator = new Validator();
    this.getInstitutions();
  }

  setupRules() {
    return [
      new Rules("name", [new Required(this.institution.name), new MinLength(this.institution.name, 2)]),
      new Rules("city", [new Required(this.institution.city)]),
      new Rules("code", [new Required(this.institution.code)]),
      new Rules("country", [new Required(this.institution.country)]),
      new Rules("email", [new Required(this.institution.email), new Email(this.institution.email)]),
      new Rules("telephone", [new Required(this.institution.telephone)]),
      new Rules("postalAddress", [new Required(this.institution.postalAddress)]),
    ];
  }

  bind() {
    this.institution = this.viewModelHelper.addPropertyChangeNotification(this.institution);
  }

  save() {
    let rules = this.setupRules();
    var errors = this.validator.addRules(rules).validate();
    this.viewModelHelper.showErrors(errors);
    if (!this.validator.hasErrors) {
      const options = {
        method: "POST",
        body: JSON.stringify(this.institution),
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      };
      BallLoader.show();
      fetch("https://localhost:44359/api/Institution/AddInstitution", options)
        .then((res) => res.json())
        .then((res) => {
          this.institution = new Institution();
          this.bind();
          this.getInstitutions();
          Toast.success(res.message);
          BallLoader.hide();
          let frm = document.getElementsByTagName("form")[0] as HTMLFormElement;
          frm.reset();
        });
    } else {
    }
  }

  getInstitutions = async () => {
    try {
      const res = await fetch("https://localhost:44359/api/Institution/GetInstitutions");
      if (!res.ok) {
      }
      const data = await res.json();
      this.institutions = data.value;
      this.bindList("institutions");
    } catch (error) {}
  };

  bindList(id: string) {
    new BindingList2().bind(this, id);
  }
}
