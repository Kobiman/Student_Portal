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
import { LecturerModal } from "./lecturerModal";
export class LecturerView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var temp = (createElement("div", { class: "sp-box" },
            createElement("div", { class: "mc-row" },
                createElement("h1", null, "Lecturer"),
                createElement("div", { class: "mountcourses-form" },
                    createElement("div", { class: "sp-btn-row" },
                        createElement("button", { class: "sp-btn sp-btn-default btn-small", id: "addLecturer" }, "Add")),
                    createElement("div", null,
                        createElement("div", { class: "horizontal" },
                            createElement("table", { class: "table strech striped" },
                                createElement("thead", null,
                                    createElement("th", null, "Name"),
                                    createElement("th", null, "StaffId"),
                                    createElement("th", null, "Telephone"),
                                    createElement("th", null, "Email"),
                                    createElement("th", null, "Address")),
                                createElement("tbody", { id: "lecturers", "data-repeat": "lecturers" },
                                    createElement("tr", null,
                                        createElement("td", { binding: "name" }),
                                        createElement("td", { binding: "staffId" }),
                                        createElement("td", { binding: "telephone" }),
                                        createElement("td", { binding: "email" }),
                                        createElement("td", { binding: "address" }))))))))));
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(temp);
        let showModal = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            new LecturerModal(this._vm).render("route-outlet");
        });
        document.getElementById("addLecturer").onclick = showModal;
    }
}
//# sourceMappingURL=lecturerView.js.map