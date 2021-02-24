import { IView } from "../IView";
import { LecturerVm } from "../viewModels/lecturerVm";
import { createElement } from "tsx-create-element";
import { LecturerModal } from "./lecturerModal";
import { App } from "../app";

export class LecturerView implements IView{
    constructor(private _vm:LecturerVm){

    }
    render(elementId: string): void {
        var temp = (
            <div class="sp-box">
              <div class="mc-row">
                <h1>Lecturer</h1>
                <div class="mountcourses-form">
                  <div class="sp-btn-row">
                    <button class="sp-btn sp-btn-default btn-small" id="addLecturer">
                      Add
                    </button>
                  </div>
                  <div>
                    <div class="horizontal">
                      <table class="table strech striped">
                        <thead>
                          <th>Name</th>
                          <th>StaffId</th>
                          <th>Telephone</th>
                          <th>Email</th>
                          <th>Address</th>
                        </thead>
                        <tbody id="lecturers" data-repeat="lecturers">
                          <tr>
                            <td binding="name"></td>
                            <td binding="staffId"></td>
                            <td binding="telephone"></td>
                            <td binding="email"></td>
                            <td binding="address"></td>
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
            new LecturerModal(this._vm).render("route-outlet");
          };
      
          document.getElementById("addLecturer").onclick = showModal;
    }
    
}