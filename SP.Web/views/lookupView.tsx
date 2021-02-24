import { IView } from "../IView";
import { LookupVm } from "../viewModels/lookupVm";
import { createElement } from "tsx-create-element";
import { App } from "../app";
import { LookupModal } from "./lookupModal";

export class LookupView implements IView {
  constructor(private _vm: LookupVm) {}

  render(elementId: string): void {
    var temp = (
      <div class="sp-box">
        <div class="mc-row">
          <h1>Lookup</h1>
          <div class="mountcourses-form">
            <div class="sp-btn-row">
              <button class="sp-btn sp-btn-default btn-small" id="addLookup">
                Add
              </button>
            </div>
            <div>
              <div class="horizontal">
                <table class="table striped">
                  <thead>
                    <th>Name</th>
                    <th>Type</th>
                  </thead>
                  <tbody id="lookups" data-repeat="lookups">
                    <tr>
                      <td binding="name"></td>
                      <td binding="type"></td>
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

      new LookupModal(this._vm).render("route-outlet");
    };

    document.getElementById("addLookup").onclick = showModal;
  }
}
