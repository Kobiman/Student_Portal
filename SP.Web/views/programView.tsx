import { IView } from "../IView";
import { createElement } from "tsx-create-element";
import { ProgramModal } from "./ProgramModal";
import { ProgramViewModel } from "../viewModels/programVm";
import { App } from "../app";

export class ProgramView implements IView {
  constructor(private _vm: ProgramViewModel) {}
  render(elementId: string): void {
    var temp = (
      <div class="sp-box">
        <div class="mc-row">
          <h1>Program</h1>
          <div class="mountcourses-form">
            <div class="sp-btn-row">
              <button class="sp-btn sp-btn-default btn-small" id="addProgram">
                Add
              </button>
            </div>
            <div>
              <div class="horizontal">
                <table class="table striped">
                  <thead>
                    <th>Name</th>
                    <th>Duration</th>
                    <th>Specializations</th>
                  </thead>
                  <tbody id="programs" data-repeat="programs">
                    <tr>
                      <td binding="name"></td>
                      <td binding="duration"></td>
                      <td binding="specializations"></td>
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

      new ProgramModal(this._vm).render("route-outlet");
    };

    document.getElementById("addProgram").onclick = showModal;
  }
}
