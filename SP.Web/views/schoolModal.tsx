import { IView } from "../IView";
import { createElement } from "tsx-create-element";
import { SchoolVm } from "../viewModels/schoolVm";
import { App } from "../app";

export class SchoolModal implements IView {
  constructor(private _vm: SchoolVm) {}
  render(elementId: string): void {
    const temp = (
      <div class="mountcourse-model" id="modal">
        <div class="modal-content">
          <div class="sp-box">
            <div class="sp-row">
              <h1>School</h1>
              <div class="mountcourses-form">
                <p>
                  <label>Institution</label>
                  <select
                    id="institutions"
                    binding="School.institutionName"
                    value={this._vm.school.institutionName}
                    data-repeat="institutions"
                  >
                    <option binding="institutionNane"></option>
                  </select>
                  <div errors="institutionName"></div>
                </p>
                <p>
                  <label>Name</label>
                  <input binding="School.name" type="text" value={this._vm.school.name} />
                  <div errors="name"></div>
                </p>
                <p>
                  <label>Academic Year</label>
                  <select id="academicYears" binding="School.academicYear" value={this._vm.school.academicYear} data-repeat="academicYears">
                    <option binding="name"></option>
                  </select>
                  <div errors="academicYear"></div>
                </p>
                <p>
                  <label>Semester</label>
                  <select id="semesters" binding="School.semester" value={this._vm.school.semester} data-repeat="semesters">
                    <option binding="name"></option>
                  </select>
                  <div errors="semester"></div>
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

    const doc = document.getElementById(elementId);
    doc.appendChild(temp);

    let hideModal = async (evt: Event) => {
      evt.preventDefault();
      doc.removeChild(temp);
    };

    let save = async (evt: Event) => {
      evt.preventDefault();
      this._vm.save();

      if (!this._vm.validator.hasErrors) {
        let tr = document.getElementById("schools");
        tr.textContent = "";
        tr.appendChild(
          <tr>
            <td binding="name"></td>
            <td binding="academicYear"></td>
            <td binding="semester"></td>
          </tr>
        );

        doc.removeChild(temp);
      }
    };

    this._vm.bindList("institutions");
    this._vm.bindList("semesters");
    this._vm.bindList("academicYears");
    this._vm.bind();
    document.getElementById("Save").onclick = save;
    document.getElementById("close").onclick = hideModal;
  }
}
