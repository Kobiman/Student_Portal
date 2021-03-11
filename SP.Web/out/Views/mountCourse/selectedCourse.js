import { createElement } from "tsx-create-element";
export class SelectedCourseView {
    constructor() { }
    render(x) {
        return (createElement("tr", null,
            createElement("td", { binding: true }, x.courseName),
            createElement("td", null,
                createElement("button", { class: "sp-btn sp-btn-default btn-small", click: x.courseName, binding: x.courseName, value: x.courseName }, "Add"))));
    }
}
//# sourceMappingURL=selectedCourse.js.map