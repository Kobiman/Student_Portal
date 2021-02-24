import { createElement } from "tsx-create-element";
import { IView } from "../IView";
import { InstitutionVm } from "../viewModels/InstitutionVm";
import { InstitutionModal } from "./institutionModal";
import { App } from "../app";

export class InstitutionView implements IView {
  constructor(private _vm: InstitutionVm) {}

  render = (elementId: string): void => {
    var temp = (
      <div class="sp-box">
        <div class="mc-row">
          <h1>Institution</h1>
          <div class="mountcourses-form">
            <div class="sp-btn-row">
              <button class="sp-btn sp-btn-default btn-small" id="addInstitution">
                Add
              </button>
            </div>
            <div>
              <div class="horizontal">
                <table class="table strech">
                  <thead>
                    <th>Name</th>
                    <th>Code</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Email</th>
                    <th>Telephone</th>
                    <th>Postal Address</th>
                  </thead>
                  <tbody id="institutions" data-repeat="institutions">
                    <tr>
                      <td binding="name"></td>
                      <td binding="code"></td>
                      <td binding="country"></td>
                      <td binding="city"></td>
                      <td binding="email"></td>
                      <td binding="telephone"></td>
                      <td binding="postalAddress"></td>
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
      new InstitutionModal(this._vm).render("route-outlet");
    };

    document.getElementById("addInstitution").onclick = showModal;
  };
}
