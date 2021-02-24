import { createElement } from "tsx-create-element";
export class MountedCourseView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var temp = (createElement("div", { class: "sp-box" },
            createElement("div", { class: "mc-row" },
                createElement("h1", null, "Mounted Courses"),
                createElement("div", { class: "mountcourses-form" },
                    createElement("div", { class: "sp-btn-row" },
                        createElement("button", { class: "sp-btn sp-btn-default btn-small", id: "mountCourese" }, "Mount"),
                        createElement("button", { id: "Save", class: "sp-btn sp-btn-primary btn-small" }, "Save")),
                    createElement("div", null,
                        createElement("div", { class: "horizontal" },
                            createElement("table", { class: "table strech" },
                                createElement("thead", null,
                                    createElement("th", null, "EnrollmentOption"),
                                    createElement("th", null, "Course"),
                                    createElement("th", null, "Category"),
                                    createElement("th", null, "Level"),
                                    createElement("th", null, "Scoring"),
                                    createElement("th", null, "AssignedTo")),
                                createElement("tbody", { id: "mountedCourses", "data-repeat": "mountedCourses" },
                                    createElement("tr", null,
                                        createElement("td", { binding: "enrollmentOption" }),
                                        createElement("td", { binding: "course" }),
                                        createElement("td", { binding: "category" }),
                                        createElement("td", { binding: "level" }),
                                        createElement("td", { binding: "scoring" }),
                                        createElement("td", { binding: "assignedTo" }))))))))));
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(temp);
        this._vm.bindList("mountedCourses");
    }
}
//# sourceMappingURL=mountedCourseView.js.map