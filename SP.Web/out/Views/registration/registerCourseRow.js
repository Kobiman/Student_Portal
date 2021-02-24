import { createElement } from "tsx-create-element";
export class RegisterCourseRow {
    constructor(_vm) {
        this._vm = _vm;
        this.tr = document.getElementById("courseList");
        this.tr.textContent = "";
    }
    render(registeredCourse) {
        let checkBox = "";
        if (registeredCourse.category === "GENERAL" || registeredCourse.category === "OPTION(RESTRICTIVE)") {
            checkBox = createElement("input", { type: "checkbox", binding: "selected", checked: "true", disabled: true });
        }
        else {
            checkBox = createElement("input", { type: "checkbox", binding: "selected" });
        }
        let element = (createElement("tr", null,
            createElement("td", null,
                registeredCourse.courseCode,
                " - ",
                registeredCourse.courseName,
                " - ",
                registeredCourse.credit),
            createElement("td", null, registeredCourse.category),
            createElement("td", null,
                createElement("label", { class: "check-content", style: "margin-bottom: 0px;margin-top: 0px;padding-top: 0px;" },
                    checkBox,
                    createElement("span", { class: "checkmark" })))));
        let elements = element.querySelectorAll("[binding]");
        elements.forEach((e) => {
            if (e.tagName === "INPUT") {
                let el = e;
                el.addEventListener("change", (e) => {
                    e.preventDefault();
                    let courseCode = element.cells[0].textContent;
                    if (el.checked) {
                        this._vm.addCourse(courseCode);
                    }
                    else if (!el.checked) {
                        this._vm.removeCourse(courseCode);
                    }
                });
            }
        });
        this.tr.append(element);
    }
}
//# sourceMappingURL=registerCourseRow.js.map