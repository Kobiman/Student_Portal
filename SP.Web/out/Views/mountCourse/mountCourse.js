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
import { MountCourseModal } from "./mountCourseModal";
export class MountCourseView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var temp = (createElement("div", { class: "sp-box" },
            createElement("div", { class: "mc-row" },
                createElement("h1", null, "Mount Courses"),
                createElement("div", { class: "mountcourses-form" },
                    createElement("div", { class: "sp-btn-row" },
                        createElement("button", { class: "sp-btn sp-btn-default btn-small", id: "mountCourese" }, "Mount"),
                        createElement("button", { id: "Save", class: "sp-btn sp-btn-primary btn-small" }, "Save")),
                    createElement("div", null,
                        createElement("div", { class: "horizontal" },
                            createElement("table", { class: "table strech" },
                                createElement("thead", null,
                                    createElement("th", null, "EnrollmentOption"),
                                    createElement("th", null, "Program"),
                                    createElement("th", null, "Level"),
                                    createElement("th", null, "Category")),
                                createElement("tbody", { id: "selectedCourses", "data-repeat": "selectedCourses" },
                                    createElement("tr", null,
                                        createElement("td", { binding: "enrollmentOption" }),
                                        createElement("td", { binding: "course" }),
                                        createElement("td", { binding: "category" }),
                                        createElement("td", { binding: "level" }),
                                        createElement("td", null))))))))));
        let showModal = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            new MountCourseModal(this._vm).render("route-outlet");
        });
        let save = (evt) => {
            evt.preventDefault();
            this._vm.save();
            let doc = document.getElementById("selectedCourses");
            doc.textContent = "";
            let tr = (createElement("tr", null,
                createElement("td", null),
                createElement("td", null),
                createElement("td", null),
                createElement("td", null),
                createElement("td", null),
                createElement("td", null),
                createElement("td", null)));
            doc.appendChild(tr);
        };
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(temp);
        document.getElementById("mountCourese").onclick = showModal;
        document.getElementById("Save").onclick = save;
        this._vm.bindList("selectedCourses");
    }
}
//# sourceMappingURL=mountCourse.js.map