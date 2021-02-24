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
import { ProgramModal } from "./ProgramModal";
export class ProgramView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var temp = (createElement("div", { class: "sp-box" },
            createElement("div", { class: "mc-row" },
                createElement("h1", null, "Program"),
                createElement("div", { class: "mountcourses-form" },
                    createElement("div", { class: "sp-btn-row" },
                        createElement("button", { class: "sp-btn sp-btn-default btn-small", id: "addProgram" }, "Add")),
                    createElement("div", null,
                        createElement("div", { class: "horizontal" },
                            createElement("table", { class: "table striped" },
                                createElement("thead", null,
                                    createElement("th", null, "Name"),
                                    createElement("th", null, "Duration"),
                                    createElement("th", null, "Specializations")),
                                createElement("tbody", { id: "programs", "data-repeat": "programs" },
                                    createElement("tr", null,
                                        createElement("td", { binding: "name" }),
                                        createElement("td", { binding: "duration" }),
                                        createElement("td", { binding: "specializations" }))))))))));
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(temp);
        let showModal = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            new ProgramModal(this._vm).render("route-outlet");
        });
        document.getElementById("addProgram").onclick = showModal;
    }
}
//# sourceMappingURL=programView.js.map