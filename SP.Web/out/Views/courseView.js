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
import { CourseModal } from "./courseModal";
export class CourseView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var temp = (createElement("div", { class: "sp-box" },
            createElement("div", { class: "mc-row" },
                createElement("h1", null, "Course"),
                createElement("div", { class: "mountcourses-form" },
                    createElement("div", { class: "sp-btn-row" },
                        createElement("button", { class: "sp-btn sp-btn-default btn-small", id: "addCourse" }, "Add")),
                    createElement("div", null,
                        createElement("div", { class: "horizontal" },
                            createElement("table", { class: "table striped" },
                                createElement("thead", null,
                                    createElement("th", null, "Name"),
                                    createElement("th", null, "Code"),
                                    createElement("th", null, "Credit")),
                                createElement("tbody", { id: "courses", "data-repeat": "courses" },
                                    createElement("tr", null,
                                        createElement("td", { binding: "name" }),
                                        createElement("td", { binding: "code" }),
                                        createElement("td", { binding: "credit" }))))))))));
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(temp);
        let showModal = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            new CourseModal(this._vm).render("route-outlet");
        });
        document.getElementById("addCourse").onclick = showModal;
    }
}
//# sourceMappingURL=courseView.js.map