import { LecturerVm } from "../viewModels/lecturerVm";
import { IView } from "../IView";
import { createElement } from "tsx-create-element";
import { App } from "../app";

export class LecturerModal implements IView {
  constructor(private _vm: LecturerVm) {}
  render(elementId: string): void {
    const temp = (
      <div class="mountcourse-model" id="modal">
        <div class="modal-content">
          <div class="sp-box">
            <div class="sp-row">
              <h1>Lecturer</h1>
              <div class="mountcourses-form">
                <p>
                  <label>Department</label>
                  <select id="departments" binding="Lecturer.department" value={this._vm.lecturer.department} data-repeat="departments">
                    <option binding="name"></option>
                  </select>
                  <div errors="department"></div>
                </p>
                <p>
                  <label>Name</label>
                  <input type="text" binding="Lecturer.name" value={this._vm.lecturer.name} />
                  <div errors="name"></div>
                </p>
                <p>
                  <label>StaffId</label>
                  <input type="text" binding="Lecturer.staffId" value={this._vm.lecturer.staffId} />
                  <div errors="staffId"></div>
                </p>
                <p>
                  <label>Telephone</label>
                  <input type="text" binding="Lecturer.telephone" value={this._vm.lecturer.telephone} />
                  <div errors="telephone"></div>
                </p>
                <p>
                  <label>Email</label>
                  <input type="text" binding="Lecturer.email" value={this._vm.lecturer.email} />
                  <div errors="email"></div>
                </p>
                <p>
                  <label>Address</label>
                  <input type="text" binding="Lecturer.address" value={this._vm.lecturer.address} />
                  <div errors="address"></div>
                </p>
                <div class="sp-btn-row">
                  <button class="sp-btn sp-btn-default" id="close">
                    Cancel
                  </button>
                  <button id="Save" class="sp-btn sp-btn-primary">
                    Save <i class="fa fa-save"></i>
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
        let tr = document.getElementById("lecturers");
        tr.textContent = "";
        tr.appendChild(
          <tr>
            <td binding="name"></td>
            <td binding="staffId"></td>
            <td binding="telephone"></td>
            <td binding="email"></td>
            <td binding="address"></td>
          </tr>
        );

        doc.removeChild(temp);
      }
    };

    this._vm.bind();
    this._vm.bindList("departments");
    document.getElementById("close").onclick = hideModal;
    document.getElementById("Save").onclick = save;
  }
}
