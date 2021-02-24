import { IView } from "../IView";
import { createElement } from "tsx-create-element";
import { DepartmentVm } from "../viewModels/departmentVm";
import { DepartmentModal } from "./departmentModal";
import { App } from "../app";

export class DepartmentView implements IView {
  constructor(private _vm: DepartmentVm) {}
  render(elementId: string): void {
    var temp = (
      <div class="sp-box">
        <div class="mc-row">
          <h1>Department</h1>
          <div class="mountcourses-form">
            <div class="sp-btn-row">
              <button class="sp-btn sp-btn-default btn-small" id="addDepartment">
                Add
              </button>
            </div>
            <div>
              <div class="horizontal">
                <table class="table striped">
                  <thead>
                    <th>Name</th>
                    <th>Code</th>
                  </thead>
                  <tbody id="departments" data-repeat="departments">
                    <tr>
                      <td binding="name"></td>
                      <td binding="code"></td>
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

      new DepartmentModal(this._vm).render("route-outlet");
    };

    document.getElementById("addDepartment").onclick = showModal;
  }
}
