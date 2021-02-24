import { IView } from "../IView";
import { ProgramViewModel } from "../viewModels/programVm";
import { createElement } from "tsx-create-element";
import { App } from "../app";

export class ProgramModal implements IView {
  constructor(private _vm: ProgramViewModel) {}
  render(elementId: string): void {
    const temp = (
      <div class="mountcourse-model" id="modal">
        <div class="modal-content">
          <div class="sp-box">
            <div class="sp-row">
              <h1>Program</h1>
              <div class="mountcourses-form">
                <p>
                  <label>Department</label>
                  <select id="schools" binding="Program.department" value={this._vm.program.department} data-repeat="departments">
                    <option binding="name"></option>
                  </select>
                  <div errors="department"></div>
                </p>
                <p>
                  <label>Name</label>
                  <input binding="Program.name" type="text" value={this._vm.program.name} />
                  <div errors="name"></div>
                </p>
                <p>
                  <label>Duration</label>
                  <input binding="Program.duration" type="number" placeholder="Duration" />
                  <div errors="duration"></div>
                </p>
                <p>
                  <button class="sp-btn sp-btn-default btn-small" id="Add">
                    Add
                  </button>
                </p>
                <p>
                  <label>Specialization</label>
                </p>
                <p id="specialization">
                  <div class="mc-table">
                    <table class="table">
                      <tbody id="specializations" data-repeat="specializations"></tbody>
                    </table>
                  </div>
                </p>
                <div class="sp-btn-row">
                  <button id="Save" class="sp-btn sp-btn-primary">
                    Save <i class="fa fa-save"></i>
                  </button>
                  <button class="sp-btn sp-btn-default" id="close">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    let addSpecialization = () => {
      new SpecializationView().render("specializations");
      var rows = (document.getElementById("specializations") as HTMLTableElement).rows;

      let sp = {
        name: "",
        type: "",
        level: "",
      };
      let elements = rows[rows.length - 1].querySelectorAll("[binding]");
      sp = this._vm.viewModelHelper.notificationPropertyChange(sp, elements);
      this._vm.addSpecialization(sp);

      (rows[rows.length - 1].querySelectorAll("[click]")[0] as HTMLButtonElement).onclick = removeRow;
    };

    let removeRow = (evt: Event) => {
      evt.preventDefault();

      let row = (evt.target as HTMLButtonElement).parentElement as HTMLTableRowElement;
      if ((document.getElementById("specializations") as HTMLTableElement).rows.length > 1) {
        (document.getElementById("specializations") as HTMLTableElement).deleteRow(row.rowIndex);
        this._vm.removeSpecialization(row.rowIndex);
      }
    };

    const doc = document.getElementById(elementId);
    doc.appendChild(temp);

    addSpecialization();

    let save = async (evt: Event) => {
      evt.preventDefault();
      this._vm.save();

      if (!this._vm.validator.hasErrors) {
        let tr = document.getElementById("programs");
        tr.textContent = "";
        tr.appendChild(
          <tr>
            <td binding="name"></td>
            <td binding="duration"></td>
            <td binding="specializations"></td>
          </tr>
        );

        doc.removeChild(temp);
      }
    };

    let hideModal = async (evt: Event) => {
      evt.preventDefault();
      doc.removeChild(temp);
    };

    let add = async (evt: Event) => {
      evt.preventDefault();
      addSpecialization();
    };

    this._vm.bind();
    this._vm.bindList("schools");
    document.getElementById("close").onclick = hideModal;
    document.getElementById("Save").onclick = save;
    document.getElementById("Add").onclick = add;
  }
}

export class SpecializationView implements IView {
  constructor() {}
  render(elementId: string): void {
    const temp = (
      <tr>
        <td>
          <input binding="name" type="text" placeholder="Name" style="margin-bottom: 0px;" />
          <div errors="name"></div>
        </td>
        <td>
          <input binding="type" type="text" placeholder="Type" style="margin-bottom: 0px;" />
          <div errors="type"></div>
        </td>
        <td>
          <input binding="level" type="text" placeholder="Level" style="margin-bottom: 0px;" />
          <div errors="level"></div>
        </td>
        <td>
          <button class="sp-btn sp-btn-default btn-small" click="">
            DEL
          </button>
        </td>
      </tr>
    );

    const doc = document.getElementById(elementId);
    doc.appendChild(temp);
  }
}
