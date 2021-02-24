import { createElement } from "tsx-create-element";
import { RegisterCourseRow } from "./registerCourseRow";
export class RegisterCourseView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var registerCourseView = (createElement("div", { class: "sp-box" },
            createElement("div", { class: "mc-row" },
                createElement("h1", null, "Register Courses"),
                createElement("div", { class: "mountcourses-form" },
                    createElement("div", { class: "sp-btn-row" },
                        createElement("button", { class: "sp-btn sp-btn-primary btn-small", id: "submit" }, "Submit")),
                    createElement("div", { class: "horizontal" },
                        createElement("table", { class: "table" },
                            createElement("thead", null,
                                createElement("th", null, "Courses"),
                                createElement("th", null, "Category"),
                                createElement("th", null, "Select")),
                            createElement("tbody", { id: "courseList", "data-repeat": "courseList" },
                                createElement("tr", null,
                                    createElement("td", { binding: "courseCode" }),
                                    createElement("td", { binding: "courseName" }),
                                    createElement("td", { binding: "credit" }),
                                    createElement("td", { binding: "category" }),
                                    createElement("td", null,
                                        createElement("label", { class: "check-content", style: "margin-bottom: 0px;margin-top: 0px;padding-top: 0px;" },
                                            createElement("input", { type: "checkbox", binding: "selected" }),
                                            createElement("span", { class: "checkmark" })))))))))));
        let submit = registerCourseView.getElementsByTagName("button")[0];
        submit.addEventListener("click", (e) => {
            e.preventDefault();
            this._vm.save();
        });
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(registerCourseView);
        let registeredCourses = this._vm.getRegisteredCourses();
        let r = new RegisterCourseRow(this._vm);
        registeredCourses.map((x) => r.render(x));
    }
}
//# sourceMappingURL=registerCourseView.js.map