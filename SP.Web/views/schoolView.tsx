import { IView } from "../IView";
import { createElement } from "tsx-create-element";
import { SchoolVm } from "../viewModels/schoolVm";
import { SchoolModal } from "./schoolModal";
import { App } from "../app";

export class SchoolView implements IView {
  constructor(private _vm: SchoolVm) {}
  render(elementId: string): void {
    var temp = (
      <div class="sp-box">
        <div class="mc-row">
          <h1>School</h1>
          <div class="mountcourses-form">
            <div class="sp-btn-row">
              <button class="sp-btn sp-btn-default btn-small" id="addSchool">
                Add
              </button>
            </div>
            <div>
              <div class="horizontal">
                <table class="table striped">
                  <thead>
                    <th>Name</th>
                    <th>Academic Year</th>
                    <th>Semester</th>
                  </thead>
                  <tbody id="schools" data-repeat="schools">
                    <tr>
                      <td binding="name"></td>
                      <td binding="academicYear"></td>
                      <td binding="semester"></td>
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
      new SchoolModal(this._vm).render("route-outlet");
    };

    document.getElementById("addSchool").onclick = showModal;
  }
}
