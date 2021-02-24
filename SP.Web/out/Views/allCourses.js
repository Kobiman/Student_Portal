import { createElement } from "tsx-create-element";
export class TableRow {
    constructor(_vm, x) {
        this._vm = _vm;
        this.x = x;
    }
    render(x) {
        return (createElement("tr", null,
            createElement("td", { binding: "EnrollmentOption" }, x.EnrollmentOption),
            createElement("td", { binding: "CourseId" }, x.CourseId),
            createElement("td", null,
                createElement("p", null,
                    createElement("select", { id: "programs", value: x.Category, binding: "Category" }, this._vm.categories.map((y) => (createElement("option", { value: y.Name }, y.Name)))))),
            createElement("td", { binding: "Level" }, x.Level),
            createElement("td", { binding: "Scoring" }, x.Scoring),
            createElement("td", { binding: "AssignedTo" }, x.AssignedTo)));
    }
}
//# sourceMappingURL=allCourses.js.map