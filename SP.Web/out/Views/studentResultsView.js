import { createElement } from "tsx-create-element";
export class StudentResultsView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var temp = (createElement("div", { class: "sp-box" },
            createElement("div", { class: "mc-row" },
                createElement("h1", null, "Students Results "),
                createElement("div", { class: "mountcourses-form" },
                    createElement("div", { class: "sp-row-col-3-5" },
                        createElement("select", { id: "academicYears", binding: "Object.academicYear" },
                            createElement("option", null, "Please Select Academic Year"),
                            this._vm.academicYears.map((x) => (createElement("option", { value: x.name }, x.name)))),
                        createElement("select", { id: "levels", binding: "Object.level" },
                            createElement("option", null, "Please Select Level"),
                            this._vm.levels.map((x) => (createElement("option", { value: x.name }, x.name))),
                            " "),
                        createElement("select", { id: "semester", binding: "Object.semester" },
                            createElement("option", null, "Please Select Semester"),
                            this._vm.semesters.map((x) => (createElement("option", { value: x.name }, x.name))),
                            " "),
                        createElement("div", { class: "sp-btn-row" },
                            createElement("button", { class: "sp-btn sp-btn-primary btn-small", id: "submit" }, "Submit"),
                            createElement("button", { class: "sp-btn sp-btn-default btn-small", id: "showFilters" }, "Show All"))),
                    createElement("div", { class: "horizontal" },
                        createElement("table", { class: "table striped strech" },
                            createElement("thead", { class: "table" },
                                createElement("th", null, "CourseCode"),
                                createElement("th", null, "CourseTitle"),
                                createElement("th", null, "Credit"),
                                createElement("th", null, "Total"),
                                createElement("th", null, "Grade")),
                            createElement("tbody", { id: "results", "data-repeat": "results" },
                                createElement("tr", null,
                                    createElement("td", { binding: "CourseCode" }),
                                    createElement("td", { binding: "CourseTitle" }),
                                    createElement("td", { binding: "Credit" }),
                                    createElement("td", { binding: "Total" }),
                                    createElement("td", { binding: "Grade" })))))))));
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(temp);
    }
}
//# sourceMappingURL=studentResultsView.js.map