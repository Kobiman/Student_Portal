import { IView } from "../../IView";
import { createElement } from "tsx-create-element";
import { StudentListVm } from "../../viewModels/StudentListVm";
import { App } from "../../app";

export class StudentListView implements IView {
  constructor(private _vm: StudentListVm) {}

  render(elementId: string): void {
    var temp = (
      <div class="sp-box">
        <div class="sp-row">
          <h1>Student List</h1>
          <div class="sp-form-col1">
            <div class="horizontal">
              <table class="table striped strech">
                <thead>
                  <th>IndexNumber</th>
                  <th>Reference Number</th>
                  <th>Surname</th>
                  <th>Othernames</th>
                  <th>Gender</th>
                  <th>Date of Birth</th>
                </thead>
                <tbody data-repeat="students">
                  {/* {
                    this._vm.students.map(x=><tr>
                      <td>{x.IndexNumber}</td>
                      <td>{x.ReferenceNumber}</td>
                      <td>{x.Surname}</td>
                      <td>{x.Othernames}</td>
                      <td>{x.Gender}</td>
                      <td>{x.DateofBirth}</td>
                    </tr>)
                } */}
                  <tr>
                    <td binding="indexNumber"></td>
                    <td binding="referenceNumber"></td>
                    <td binding="surname"></td>
                    <td binding="othernames"></td>
                    <td binding="gender"></td>
                    <td binding="dateofBirth"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );

    const doc = document.getElementById(elementId);
    doc.textContent = "";
    doc.appendChild(temp);
  }
}
