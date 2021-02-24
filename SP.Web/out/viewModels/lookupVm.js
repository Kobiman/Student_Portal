var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Validator, Rules, Required } from "../validator";
import { ViewModelHelper } from "../viewModelHelper";
import { Lookup } from "../models/lookup";
import { Institution } from "../models/institution";
import { BindingList2 } from "../BindingList2";
import { Toast } from "../toast/toast";
import { BallLoader } from "../loader/ballLoader";
export class LookupVm {
    constructor() {
        this.lookup = new Lookup();
        this.institutions = [];
        this.lookups = [];
        this.lookupTypes = [
            { name: "" },
            { name: "ENROLLMENT OPTION" },
            { name: "COURSE CATEGORY" },
            { name: "LEVEL" },
            { name: "SEMESTER" },
            { name: "ACADEMIC YEAR" },
        ];
        this.getInstitutions = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch("https://localhost:44359/api/Institution/GetInstitutions");
                if (!res.ok) {
                }
                const data = yield res.json();
                this.institutions = data.value;
                var institution = new Institution();
                institution.name = "Please Select Institution";
                this.institutions.unshift(institution);
                this.bindList("institutions");
            }
            catch (error) { }
        });
        this.getLookups = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch("https://localhost:44359/api/Lookup/GetLookups");
                if (!res.ok) {
                }
                const data = yield res.json();
                this.lookups = data.value;
                new BindingList2().bind(this, "lookups");
            }
            catch (error) { }
        });
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
            fetch("https://localhost:44359/api/Lookup/AddLookup", options)
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
    bindList(id) {
        new BindingList2().bind(this, id);
    }
    bind() {
        this.lookup = this.viewModelHelper.addPropertyChangeNotification(this.lookup);
    }
}
//# sourceMappingURL=lookupVm.js.map