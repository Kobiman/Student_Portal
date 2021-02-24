import { IView } from "../../IView";
import { createElement } from "tsx-create-element";
import { RegisterCourseVm } from "../../viewModels/registerCourseVm";
import { RegisterCourseRow } from "./registerCourseRow";

export class RegisterCourseView implements IView {
  constructor(private _vm: RegisterCourseVm) {}
  render(elementId: string): void {
    var registerCourseView: HTMLElement = (
      <div class="sp-box">
        <div class="mc-row">
          <h1>Register Courses</h1>
          <div class="mountcourses-form">
            <div class="sp-btn-row">
              <button class="sp-btn sp-btn-primary btn-small" id="submit">
                Submit
              </button>
            </div>
            <div class="horizontal">
              <table class="table">
                <thead>
                  <th>Courses</th>
                  <th>Category</th>
                  <th>Select</th>
                </thead>
                <tbody id="courseList" data-repeat="courseList">
                  <tr>
                    <td binding="courseCode"></td>
                    <td binding="courseName"></td>
                    <td binding="credit"></td>
                    <td binding="category"></td>
                    <td>
                      <label class="check-content" style="margin-bottom: 0px;margin-top: 0px;padding-top: 0px;">
                        <input type="checkbox" binding="selected" />
                        <span class="checkmark"></span>
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );

    let submit = registerCourseView.getElementsByTagName("button")[0] as HTMLButtonElement;
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      this._vm.save();
    });

    const doc = document.getElementById(elementId);
    doc.textContent = "";
    doc.appendChild(registerCourseView);

    let registeredCourses = this._vm.getRegisteredCourses();
    
    let r = new RegisterCourseRow(this._vm);
    registeredCourses.map((x) => r.render(x));
  }
}
