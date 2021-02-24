import { createElement } from "tsx-create-element";
export class StudentListView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var temp = (createElement("div", { class: "sp-box" },
            createElement("div", { class: "sp-row" },
                createElement("h1", null, "Student List"),
                createElement("div", { class: "sp-form-col1" },
                    createElement("div", { class: "horizontal" },
                        createElement("table", { class: "table striped strech" },
                            createElement("thead", null,
                                createElement("th", null, "IndexNumber"),
                                createElement("th", null, "Reference Number"),
                                createElement("th", null, "Surname"),
                                createElement("th", null, "Othernames"),
                                createElement("th", null, "Gender"),
                                createElement("th", null, "Date of Birth")),
                            createElement("tbody", { "data-repeat": "students" },
                                createElement("tr", null,
                                    createElement("td", { binding: "indexNumber" }),
                                    createElement("td", { binding: "referenceNumber" }),
                                    createElement("td", { binding: "surname" }),
                                    createElement("td", { binding: "othernames" }),
                                    createElement("td", { binding: "gender" }),
                                    createElement("td", { binding: "dateofBirth" })))))))));
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(temp);
    }
}
//# sourceMappingURL=studentList.js.map