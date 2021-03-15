import { createElement } from "tsx-create-element";
import { IView } from "../IView";
import { StudentResultsVm } from "../viewModels/StudentResultsVm";

export class StudentResultsView implements IView {
    constructor(private _vm: StudentResultsVm) {}
    render(elementId: string): void {
        var temp=(
            <div class="sp-box">
              <div class="mc-row">
                  <h1>Students Results </h1>
                  <div class="mountcourses-form">
                      {/* <div class="sp-row-col-4-5">
                          <label for="Current GPA">Current GPA:</label>
                          <label for ="CuGPA "> CuGPA:</label>
                          <label for ="Semester Credit"> Semester Credit:</label>
                          <label for ="Total Credit"> Total Credit:</label>
                          <label for ="Programme"> Programme:</label>                          
                      </div> */}
                      <div class="sp-row-col-3-5">
                          <select id="academicYears" binding="Object.academicYear">
                          <option>Please Select Academic Year</option>
                          {this._vm.academicYears.map((x) => (
                          <option value={x.name}>{x.name}</option>
                          ))}
                          </select>
                 
                        <select id="levels" binding="Object.level">
                        <option>Please Select Level</option>
                        {this._vm.levels.map((x) => (
                        <option value={x.name}>{x.name}</option>
                        ))} </select>
            
                        <select id="semester" binding="Object.semester">
                        <option>Please Select Semester</option>
                        {this._vm.semesters.map((x) => (
                        <option value={x.name}>{x.name}</option>
                        ))} </select>
         
                  <div class="sp-btn-row">
                  <button class="sp-btn sp-btn-primary btn-small" id="submit">
                  Submit
                </button>
                <button class="sp-btn sp-btn-default btn-small" id="showFilters">
                  Show All
                </button>
                  </div>
                  </div>
                  <div class="horizontal">
                  <table class="table striped strech">
                      <thead class="table">
                          <th>CourseCode</th>
                          <th>CourseTitle</th>
                          <th>Credit</th>
                          {/* <th>ClassMark</th>
                          <th>ExamsMark</th> */}
                          <th>Total</th>
                          <th>Grade</th>
                      </thead>
                      <tbody id="results" data-repeat="results">
                          <tr>
                            <td binding="CourseCode"></td>
                            <td binding="CourseTitle"></td>
                            <td binding="Credit"></td>
                            <td binding="Total"></td>
                            <td binding="Grade"></td>
                            {/* <td binding=""></td>
                            <td binding=""></td>
                            <td binding=""></td> */}
                          </tr>
                        </tbody>
                  </table>
                  </div>
              {/* <div class="sp-btn-row">
                  <button class="sp-btn sp-btn-primary" id="Exit">
                      Exit
                  </button>
                  <button class="sp-btn sp-btn-default" id="Home">
                      Home
                  </button>
              </div> */}
              </div>
          </div>
      </div>
        );

        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(temp);
    }
}
