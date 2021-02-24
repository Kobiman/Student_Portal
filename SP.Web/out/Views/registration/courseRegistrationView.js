import { RegisterCourseView } from "./registerCourseView";
import { RegisterCourseVm } from "../../viewModels/registerCourseVm";
import { RegisteredCoursesView } from "./registeredCoursesView";
import { RegisteredCoursesVm } from "../../viewModels/registeredCoursesVm";
import { createElement } from "tsx-create-element";
export class CourseRegistrationView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        this._vm.setElementId(elementId);
        let element = (createElement("div", { class: "sp-box" },
            createElement("div", { class: "sp-row" },
                createElement("h1", null, "Course Registration"),
                createElement("div", { class: "left" },
                    createElement("button", { class: "sp-btn sp-btn-primary", id: "registerCourses" },
                        createElement("span", null, "Register Courses")),
                    createElement("button", { class: "sp-btn sp-btn-primary", id: "registeredCourses" },
                        createElement("span", null, "Registered Courses"))))));
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(element);
        document.getElementById("registeredCourses").addEventListener("click", (e) => {
            e.preventDefault();
            debugger;
            //App.navigateChild("/app/"); 
            new RegisteredCoursesView(new RegisteredCoursesVm(this._vm)).render(elementId);
        });
        document.getElementById("registerCourses").addEventListener("click", (e) => {
            e.preventDefault();
            debugger;
            //App.navigateChild("/app/#registerCourses");
            new RegisterCourseView(new RegisterCourseVm(this._vm)).render(elementId);
        });
        // if (this._vm.hasRegisterd) {
        //   new RegisteredCoursesView(new RegisteredCoursesVm(this._vm)).render(elementId);
        // } else {
        //   new RegisterCourseView(new RegisterCourseVm(this._vm)).render(elementId);
        // }
    }
}
//# sourceMappingURL=courseRegistrationView.js.map