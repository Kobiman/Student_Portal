import { IView } from "../../IView";
import { createElement } from "tsx-create-element";
import { MountCourseViewModel } from "../../viewModels/mountCourseVm";
import { MountCourseModal } from "./mountCourseModal";

export class MountCourseView implements IView {
  constructor(private _vm: MountCourseViewModel) {}

  render(elementId: string): void {
    var temp = (
      <div class="sp-box">
        <div class="mc-row">
          <h1>Mount Courses</h1>
          <div class="mountcourses-form">
            <div class="sp-btn-row">
              <button class="sp-btn sp-btn-default btn-small" id="mountCourese">
                Mount
              </button>
              <button id="Save" class="sp-btn sp-btn-primary btn-small">
                Save
              </button>
            </div>
            <div>
              <div class="horizontal">
                <table class="table strech">
                  <thead>
                    <th>EnrollmentOption</th>
                    <th>Program</th>
                    <th>Level</th>
                    <th>Category</th>
                  </thead>
                  <tbody id="selectedCourses" data-repeat="selectedCourses">
                    <tr>
                      <td binding="enrollmentOption"></td>
                      <td binding="course"></td>
                      <td binding="category"></td>
                      <td binding="level"></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <div class="sp-btn-row">
                <button id="Save" class="sp-btn sp-btn-primary">
                  Save <i class="fa fa-save"></i>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );

    let showModal = async (evt: Event) => {
      evt.preventDefault();
      new MountCourseModal(this._vm).render("route-outlet");
    };

    let save = (evt: Event) => {
      evt.preventDefault();
      this._vm.save();

      let doc = document.getElementById("selectedCourses");
      doc.textContent = "";
      let tr = (
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
      doc.appendChild(tr);
    };

    const doc = document.getElementById(elementId);
    doc.textContent = "";
    doc.appendChild(temp);

    document.getElementById("mountCourese").onclick = showModal;
    document.getElementById("Save").onclick = save;
    this._vm.bindList("selectedCourses");
  }
}
