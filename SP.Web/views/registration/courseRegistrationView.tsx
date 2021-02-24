import { IView } from "../../IView";
import { CourseRegistrationVm } from "../../viewModels/courseRegistrationVm";
import { RegisterCourseView } from "./registerCourseView";
import { RegisterCourseVm } from "../../viewModels/registerCourseVm";
import { RegisteredCoursesView } from "./registeredCoursesView";
import { RegisteredCoursesVm } from "../../viewModels/registeredCoursesVm";
import { createElement } from "tsx-create-element";
import { App } from "../../app";

export class CourseRegistrationView implements IView {
  constructor(private _vm: CourseRegistrationVm) {}
  render(elementId: string): void {
    this._vm.setElementId(elementId);

    let element: Element = (
      <div class="sp-box">
        <div class="sp-row">
          <h1>Course Registration</h1>
          <div class="left">
            <button class="sp-btn sp-btn-primary" id="registerCourses">
              <span>Register Courses</span>
            </button>

            <button class="sp-btn sp-btn-primary" id="registeredCourses">
              <span>Registered Courses</span>
            </button>
          </div>
        </div>
      </div>
    );

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
