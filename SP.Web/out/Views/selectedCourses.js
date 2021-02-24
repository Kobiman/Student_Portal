import { createElement } from "tsx-create-element";
export class SelectedCourseView {
    constructor() { }
    render(x) {
        return (createElement("tr", null,
            createElement("td", { binding: true }, x.Name),
            createElement("td", null,
                createElement("button", { class: "sp-btn sp-btn-small", click: x }, "Add"))));
    }
}
//# sourceMappingURL=selectedCourses.js.map