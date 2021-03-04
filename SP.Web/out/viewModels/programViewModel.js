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
import { Program } from "../models/program";
import { BindingList2 } from "../BindingList2";
export class ProgramViewModel {
    constructor() {
        this.program = new Program();
        this.departments = [];
        this.programs = [];
        this.getDepartments = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${App.baseUri}/api/Department/GetDepartments");
                if (!res.ok) {
                }
                const data = yield res.json();
                this.departments = data.value;
                this.bindList("departments");
            }
            catch (error) { }
        });
        this.getPrograms = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${App.baseUri}/api/Program/GetPrograms");
                if (!res.ok) {
                }
                const data = yield res.json();
                this.programs = data.value;
                this.bindList("programs");
            }
            catch (error) { }
        });
        this.viewModelHelper = new ViewModelHelper();
        this.validator = new Validator();
        this.getDepartments();
        this.getPrograms();
    }
    bindList(id) {
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
        debugger;
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
            fetch(`${App.baseUri}/api/Program/AddProgram", options)
                .then((res) => res.json())
                .then((res) => {
                this.program = new Program();
                this.bind();
            });
        }
    }
}
//# sourceMappingURL=programViewModel.js.map