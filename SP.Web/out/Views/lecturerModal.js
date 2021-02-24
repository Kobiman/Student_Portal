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
export class LecturerModal {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        const temp = (createElement("div", { class: "mountcourse-model", id: "modal" },
            createElement("div", { class: "modal-content" },
                createElement("div", { class: "sp-box" },
                    createElement("div", { class: "sp-row" },
                        createElement("h1", null, "Lecturer"),
                        createElement("div", { class: "mountcourses-form" },
                            createElement("p", null,
                                createElement("label", null, "Department"),
                                createElement("select", { id: "departments", binding: "Lecturer.department", value: this._vm.lecturer.department, "data-repeat": "departments" },
                                    createElement("option", { binding: "name" })),
                                createElement("div", { errors: "department" })),
                            createElement("p", null,
                                createElement("label", null, "Name"),
                                createElement("input", { type: "text", binding: "Lecturer.name", value: this._vm.lecturer.name }),
                                createElement("div", { errors: "name" })),
                            createElement("p", null,
                                createElement("label", null, "StaffId"),
                                createElement("input", { type: "text", binding: "Lecturer.staffId", value: this._vm.lecturer.staffId }),
                                createElement("div", { errors: "staffId" })),
                            createElement("p", null,
                                createElement("label", null, "Telephone"),
                                createElement("input", { type: "text", binding: "Lecturer.telephone", value: this._vm.lecturer.telephone }),
                                createElement("div", { errors: "telephone" })),
                            createElement("p", null,
                                createElement("label", null, "Email"),
                                createElement("input", { type: "text", binding: "Lecturer.email", value: this._vm.lecturer.email }),
                                createElement("div", { errors: "email" })),
                            createElement("p", null,
                                createElement("label", null, "Address"),
                                createElement("input", { type: "text", binding: "Lecturer.address", value: this._vm.lecturer.address }),
                                createElement("div", { errors: "address" })),
                            createElement("div", { class: "sp-btn-row" },
                                createElement("button", { class: "sp-btn sp-btn-default", id: "close" }, "Cancel"),
                                createElement("button", { id: "Save", class: "sp-btn sp-btn-primary" },
                                    "Save ",
                                    createElement("i", { class: "fa fa-save" })))))))));
        const doc = document.getElementById(elementId);
        doc.appendChild(temp);
        let hideModal = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            doc.removeChild(temp);
        });
        let save = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            this._vm.save();
            if (!this._vm.validator.hasErrors) {
                let tr = document.getElementById("lecturers");
                tr.textContent = "";
                tr.appendChild(createElement("tr", null,
                    createElement("td", { binding: "name" }),
                    createElement("td", { binding: "staffId" }),
                    createElement("td", { binding: "telephone" }),
                    createElement("td", { binding: "email" }),
                    createElement("td", { binding: "address" })));
                doc.removeChild(temp);
            }
        });
        this._vm.bind();
        this._vm.bindList("departments");
        document.getElementById("close").onclick = hideModal;
        document.getElementById("Save").onclick = save;
    }
}
//# sourceMappingURL=lecturerModal.js.map