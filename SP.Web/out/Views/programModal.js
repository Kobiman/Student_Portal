var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createElement } from "tsx-create-element";
export class ProgramModal {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        const temp = (createElement("div", { class: "mountcourse-model", id: "modal" },
            createElement("div", { class: "modal-content" },
                createElement("div", { class: "sp-box" },
                    createElement("div", { class: "sp-row" },
                        createElement("h1", null, "Program"),
                        createElement("div", { class: "mountcourses-form" },
                            createElement("p", null,
                                createElement("label", null, "Department"),
                                createElement("select", { id: "schools", binding: "Program.department", value: this._vm.program.department, "data-repeat": "departments" },
                                    createElement("option", { binding: "name" })),
                                createElement("div", { errors: "department" })),
                            createElement("p", null,
                                createElement("label", null, "Name"),
                                createElement("input", { binding: "Program.name", type: "text", value: this._vm.program.name }),
                                createElement("div", { errors: "name" })),
                            createElement("p", null,
                                createElement("label", null, "Duration"),
                                createElement("input", { binding: "Program.duration", type: "number", placeholder: "Duration" }),
                                createElement("div", { errors: "duration" })),
                            createElement("p", null,
                                createElement("button", { class: "sp-btn sp-btn-default btn-small", id: "Add" }, "Add")),
                            createElement("p", null,
                                createElement("label", null, "Specialization")),
                            createElement("p", { id: "specialization" },
                                createElement("div", { class: "mc-table" },
                                    createElement("table", { class: "table" },
                                        createElement("tbody", { id: "specializations", "data-repeat": "specializations" })))),
                            createElement("div", { class: "sp-btn-row" },
                                createElement("button", { id: "Save", class: "sp-btn sp-btn-primary" },
                                    "Save ",
                                    createElement("i", { class: "fa fa-save" })),
                                createElement("button", { class: "sp-btn sp-btn-default", id: "close" }, "Cancel"))))))));
        let addSpecialization = () => {
            new SpecializationView().render("specializations");
            var rows = document.getElementById("specializations").rows;
            let sp = {
                name: "",
                type: "",
                level: "",
            };
            let elements = rows[rows.length - 1].querySelectorAll("[binding]");
            sp = this._vm.viewModelHelper.notificationPropertyChange(sp, elements);
            this._vm.addSpecialization(sp);
            rows[rows.length - 1].querySelectorAll("[click]")[0].onclick = removeRow;
        };
        let removeRow = (evt) => {
            evt.preventDefault();
            let row = evt.target.parentElement;
            if (document.getElementById("specializations").rows.length > 1) {
                document.getElementById("specializations").deleteRow(row.rowIndex);
                this._vm.removeSpecialization(row.rowIndex);
            }
        };
        const doc = document.getElementById(elementId);
        doc.appendChild(temp);
        addSpecialization();
        let save = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            this._vm.save();
            if (!this._vm.validator.hasErrors) {
                let tr = document.getElementById("programs");
                tr.textContent = "";
                tr.appendChild(createElement("tr", null,
                    createElement("td", { binding: "name" }),
                    createElement("td", { binding: "duration" }),
                    createElement("td", { binding: "specializations" })));
                doc.removeChild(temp);
            }
        });
        let hideModal = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            doc.removeChild(temp);
        });
        let add = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            addSpecialization();
        });
        this._vm.bind();
        this._vm.bindList("schools");
        document.getElementById("close").onclick = hideModal;
        document.getElementById("Save").onclick = save;
        document.getElementById("Add").onclick = add;
    }
}
export class SpecializationView {
    constructor() { }
    render(elementId) {
        const temp = (createElement("tr", null,
            createElement("td", null,
                createElement("input", { binding: "name", type: "text", placeholder: "Name", style: "margin-bottom: 0px;" }),
                createElement("div", { errors: "name" })),
            createElement("td", null,
                createElement("input", { binding: "type", type: "text", placeholder: "Type", style: "margin-bottom: 0px;" }),
                createElement("div", { errors: "type" })),
            createElement("td", null,
                createElement("input", { binding: "level", type: "text", placeholder: "Level", style: "margin-bottom: 0px;" }),
                createElement("div", { errors: "level" })),
            createElement("td", null,
                createElement("button", { class: "sp-btn sp-btn-default btn-small", click: "" }, "DEL"))));
        const doc = document.getElementById(elementId);
        doc.appendChild(temp);
    }
}
//# sourceMappingURL=ProgramModal.js.map