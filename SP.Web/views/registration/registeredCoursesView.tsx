import { IView } from "../../IView";
import { createElement } from "tsx-create-element";
import { RegisteredCoursesVm } from "../../viewModels/registeredCoursesVm";

export class RegisteredCoursesView implements IView {
  constructor(private _vm: RegisteredCoursesVm) {}
  render(elementId: string): void {
    var registeredCoursesView: HTMLElement = (
      <div class="sp-box">
        <div class="mc-row">
          <h1>Registered Courses</h1>
          <div class="mountcourses-form">
            {/* <div class="sp-btn-row">
              <button class="sp-btn sp-btn-primary btn-small" id="submit">
                Submit
              </button>
            </div> */}
            <div class="horizontal">
              <table class="table">
                <thead>
                  <th>Date</th>
                  <th>Academic Year</th>
                  <th>Course Code</th>
                  <th>Course</th>
                  <th>Credit</th>
                </thead>
                <tbody id="courseList">
                  <tr>
                    <td binding="registrationDate"></td>
                    <td binding="approved"></td>
                    <td binding="courseCode"></td>
                    <td binding="courseName"></td>
                    <td binding="credit"></td>
                    <td binding="category"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );

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
