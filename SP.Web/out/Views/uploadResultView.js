import { createElement } from "tsx-create-element";
import styles from './style';
export class UploadResultView {
    constructor() {
        this.render = (elementId) => {
            const classes = styles();
            const headers = ["indexNumbers", "Name", "Level", "courseCode", "classScore", "examScore", "Total"];
            let temp = (createElement("div", { class: "sp-box" },
                createElement("div", { class: "mc-row" },
                    createElement("h1", null, "Upload Results"),
                    createElement("div", { class: "mountcourses-form" },
                        createElement("div", { class: "sp-row-col-4" },
                            createElement("p", null,
                                createElement("select", { id: "department", name: "department" },
                                    createElement("option", null, "Department")),
                                createElement("div", { errors: "IndexNumber" })),
                            createElement("p", null,
                                createElement("select", { id: "coursecode", name: "coursecode" },
                                    createElement("option", null, "Course Code")),
                                createElement("div", { errors: "IndexNumber" })),
                            createElement("p", null,
                                createElement("input", { readOnly: true, value: "2020/2021", id: "academicyear", name: "academicyear" }),
                                createElement("div", { errors: "IndexNumber" })),
                            createElement("p", null,
                                createElement("div", { class: "sp-btn-row" },
                                    createElement("button", { class: "sp-btn sp-btn-default btn-small", id: "showFilters" }, "Upload"),
                                    createElement("button", { class: "sp-btn sp-btn-primary btn-small", id: "submit" }, "Submit")))),
                        createElement("div", null,
                            createElement("div", { class: "horizontal" },
                                createElement("table", { class: "table striped stretch" },
                                    createElement("thead", null,
                                        createElement("tr", null, headers.map(headerItem => (createElement("th", null, headerItem))))),
                                    createElement("tbody", { class: classes.tbody }))))))));
            var doc = document.getElementById(elementId);
            doc.textContent = "";
            doc.appendChild(temp);
        };
    }
}
//# sourceMappingURL=uploadResultView.js.map