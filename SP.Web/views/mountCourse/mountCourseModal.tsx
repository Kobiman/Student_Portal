import { createElement } from "tsx-create-element";
import { MountCourseViewModel } from "../../viewModels/mountCourseVm";
import { IView } from "../../IView";
import { SelectedCourseView } from "./selectedCourse";
import { Confirm } from "../../confirm/confirm";

export class MountCourseModal implements IView {
  constructor(private _vm: MountCourseViewModel) {}
  render = (elementId: string) => {
    let temp = (
      <div class="mountcourse-model" id="modal">
        <div class="modal-content">
          <div class="sp-box">
            <div class="sp-row">
              <button class="modal-btn" id="close">
                <li class="fa fa-times"></li>
              </button>
              <h1>Mount Courses</h1>
              <div class="mountcourses-form">
                <p>
                  <select binding="SelectedCourse.enrollmentOption" value={this._vm.mountedCourse.enrollmentOption}>
                    <option>Please Select EnrollmentOption</option>
                    {this._vm.getEnrollmentOption().map((x) => (
                      <option value={x.name}>{x.name}</option>
                    ))}
                  </select>
                  <div errors="enrollmentOption"></div>
                </p>
                <p>
                  <select id="departments" binding="SelectedCourse.department" value={this._vm.mountedCourse.department}>
                    <option>Please Select Department</option>
                    {this._vm.getDepartments().map((x) => (
                      <option value={x.name}>{x.name}</option>
                    ))}
                  </select>
                  <div errors="department"></div>
                </p>
                <p>
                  <select id="programs" binding="SelectedCourse.program" value={this._vm.mountedCourse.program}>
                    <option>Please Select Program</option>
                  </select>
                  <div errors="program"></div>
                </p>
                <div class="sp-row-col-1-3-1">
                  <p>
                    <select id="levels" binding="SelectedCourse.level" value={this._vm.mountedCourse.level}>
                      <option>Please Select Level</option>
                      {this._vm.getLevels().map((x) => (
                        <option value={x.name}>{x.name}</option>
                      ))}
                    </select>
                    <div errors="level"></div>
                  </p>
                  <p>
                    <select id="specializations" binding="SelectedCourse.specialization" value={this._vm.mountedCourse.specialization}>
                      <option>Please Select Category</option>
                    </select>
                    <div errors="category"></div>
                  </p>
                  <p>
                    <label class="check-content margin-0">
                      Scoring
                      <input id="scoring" type="checkbox" binding="SelectedCourse.scoring" value={this._vm.mountedCourse.scoring} />
                      <span class="checkmark"></span>
                    </label>
                    <div errors="scoring"></div>
                  </p>
                </div>
                <p>
                  <select id="lecturers" binding="SelectedCourse.assignedTo" value={this._vm.mountedCourse.assignedTo}>
                    <option>Please Select Lecturer</option>
                    {this._vm.getLecturers().map((x) => (
                      <option value={x.name}>{x.name}</option>
                    ))}
                  </select>
                  <div errors="assignedTo"></div>
                </p>

                <div class="mc-table">
                  <table class="table">
                    <tbody id="allCourses"></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    const doc = document.getElementById(elementId);
    //doc.textContent = "";
    doc.appendChild(temp);

    let hideModal = async (evt: Event) => {
      evt.preventDefault();
      //App.navigate("/app/#mountCourse");
      let elem = document.getElementById("modal");
      let doc = document.getElementById("route-outlet");
      doc.removeChild(elem);
    };

    let addCourse = async (evt: Event) => {
      evt.preventDefault();
      //new MountedCourseView(this._vm).render();
      let courses = this._vm.addCourse((evt.target as HTMLButtonElement).value);
      if (courses.length > 0) {
        let doc = document.getElementById("selectedCourses");
        doc.textContent = "";

        for (let course of courses) {
          let tr: HTMLTableRowElement = (
            <tr>
              <td>{course.enrollmentOption}</td>
              <td>{course.program}</td>
              <td>{course.level}</td>
              <td>{course.category}</td>
            </tr>
          );
          doc.appendChild(tr);
          let innertable: HTMLTableElement = (
            <tr>
              <td colspan="4">
                <table class="table">
                  <thead>
                    <th>EnrollmentOption</th>
                    <th>Courses</th>
                    <th>Category</th>
                    <th>Level</th>
                    <th>Scoring</th>
                    <th>AssignedTo</th>
                    <th>Action</th>
                  </thead>
                  <tbody></tbody>
                </table>
              </td>
            </tr>
          );

          for (let c of course.mountedCourses) {
            let input = "";
            if (c.scoring) {
              input = <input type="checkbox" checked={c.scoring} value={c.scoring} disabled="true" />;
            } else {
              input = <input type="checkbox" value={c.scoring} disabled="true" />;
            }
            innertable.getElementsByTagName("tbody")[0].appendChild(
              <tr style="background:#f2f2f2">
                <td>{c.enrollmentOption}</td>
                <td>
                  {c.courseCode} - {c.course} - {c.credit}
                </td>
                <td>{c.category}</td>
                <td>{c.level}</td>
                <td>
                  <label class="check-content" style="margin-bottom: 0px;margin-top: 0px;padding-top: 0px;">
                    {input}
                    <span class="checkmark"></span>
                  </label>
                </td>
                <td>{c.assignedTo}</td>
                <td>
                  <button class="sp-btn sp-btn-default btn-small">Del</button>
                </td>
              </tr>
            );
            doc.appendChild(innertable);
          }

          let remove = innertable.getElementsByTagName("button")[0];
          remove.addEventListener("click", (e) => {
            e.preventDefault();
            let options = {
              title: "Confirm",
              message: "Are you sure you want to delete ?",
              okText: "Yes",
              cancelText: "No",
              onok: () => {
                let row = (e.target as HTMLButtonElement).parentElement.parentElement as HTMLTableRowElement;
                (document.getElementById("selectedCourses") as HTMLTableElement).deleteRow(row.rowIndex);
                this._vm.removeCourse(row.rowIndex);
              },
            };
            new Confirm(options).open();
          });
        }
      }
    };

    let getSpecializations = async (evt: Event) => {
      evt.preventDefault();
      let value = (evt.target as HTMLSelectElement).value;
      this._vm.getSpecializations(value);
      this._vm.mountedCourse["level"] = value;
      let specializations = document.getElementById("specializations");
      specializations.textContent = "";
      specializations.appendChild(<option></option>);
      this._vm.specializations.map((x) => specializations.appendChild(<option>{x.name}</option>));
    };

    let getCourses = async (evt: Event) => {
      evt.preventDefault();
      await this._vm.getCourses((evt.target as HTMLSelectElement).value);

      let allCourses = document.getElementById("allCourses");
      allCourses.textContent = "";
      this._vm.courses.map((x) => allCourses.appendChild(new SelectedCourseView().render(x)));

      const elements = document.querySelectorAll("[click]");
      elements.forEach(function (element) {
        (element as HTMLElement).onclick = addCourse;
      });

      let programs = document.getElementById("programs");
      programs.textContent = "";
      programs.appendChild(<option></option>);
      this._vm.programs.map((x) => programs.appendChild(<option value={x.name}>{x.name}</option>));
    };

    this._vm.bind();

    document.getElementById("close").onclick = hideModal;
    document.getElementById("departments").onchange = getCourses;
    document.getElementById("levels").onchange = getSpecializations;
    //document.getElementById("scoring").onchange = setScoring;
  };
}
