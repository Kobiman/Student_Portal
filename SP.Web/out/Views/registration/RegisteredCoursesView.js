import { createElement } from "tsx-create-element";
export class RegisteredCoursesView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var registeredCoursesView = (createElement("div", { class: "sp-box" },
            createElement("div", { class: "mc-row" },
                createElement("h1", null, "Registered Courses"),
                createElement("div", { class: "mountcourses-form" },
                    createElement("div", { class: "horizontal" },
                        createElement("table", { class: "table" },
                            createElement("thead", null,
                                createElement("th", null, "Date"),
                                createElement("th", null, "Academic Year"),
                                createElement("th", null, "Course Code"),
                                createElement("th", null, "Course"),
                                createElement("th", null, "Credit")),
                            createElement("tbody", { id: "courseList" },
                                createElement("tr", null,
                                    createElement("td", { binding: "registrationDate" }),
                                    createElement("td", { binding: "approved" }),
                                    createElement("td", { binding: "courseCode" }),
                                    createElement("td", { binding: "courseName" }),
                                    createElement("td", { binding: "credit" }),
                                    createElement("td", { binding: "category" })))))))));
        // let submit = registerCourseView.getElementsByTagName("button")[0] as HTMLButtonElement;
        // submit.addEventListener("click", (e) => {
        //   e.preventDefault();
        // });
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(registeredCoursesView);
        this._vm.getRegisteredCourses();
    }
}
//# sourceMappingURL=registeredCoursesView.js.map