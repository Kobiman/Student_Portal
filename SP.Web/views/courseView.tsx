import { IView } from "../IView";
import { CourseVm } from "../viewModels/courseVm";
import { createElement } from "tsx-create-element";
import { App } from "../app";
import { CourseModal } from "./courseModal";

export class CourseView implements IView {
  constructor(private _vm: CourseVm) {}
  render(elementId: string): void {
    var temp = (
      <div class="sp-box">
        <div class="mc-row">
          <h1>Course</h1>
          <div class="mountcourses-form">
            <div class="sp-btn-row">
              <button class="sp-btn sp-btn-default btn-small" id="addCourse">
                Add
              </button>
            </div>
            <div>
              <div class="horizontal">
                <table class="table striped">
                  <thead>
                    <th>Name</th>
                    <th>Code</th>
                    <th>Credit</th>
                  </thead>
                  <tbody id="courses" data-repeat="courses">
                    <tr>
                      <td binding="courseName"></td>
                      <td binding="code"></td>
                      <td binding="credit"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    const doc = document.getElementById(elementId);
    doc.textContent = "";
    doc.appendChild(temp);

    let showModal = async (evt: Event) => {
      evt.preventDefault();

      new CourseModal(this._vm).render("route-outlet");
    };

    document.getElementById("addCourse").onclick = showModal;
  }
}
