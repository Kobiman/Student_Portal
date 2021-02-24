import { createElement } from "tsx-create-element";
export class SelectedCourseView {
    constructor() { }
    render(x) {
        return (createElement("tr", null,
            createElement("td", { binding: true }, x.name),
            createElement("td", null,
                createElement("button", { class: "sp-btn sp-btn-default btn-small", click: x.name, binding: x.name, value: x.name }, "Add"))));
    }
}
//# sourceMappingURL=selectedCourse.js.map