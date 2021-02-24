import { IView } from "../../IView";
import { createElement } from "tsx-create-element";
import { MountedCourseVm } from "../../viewModels/mountedCourseVm";
import { _ } from "../../group";
import { Confirm } from "../../confirm/confirm";

export class MountedCoursesView implements IView {
  constructor(private _vm: MountedCourseVm) {}

  render(elementId: string): void {
    var temp = (
      <div class="sp-box">
        <div class="mc-row">
          <h1>Mounted Courses</h1>
          <div class="mountcourses-form">
            <div class="sp-row-col-2-5" id="lessFilters">
              <select id="academicYears" binding="Object.academicYear">
                <option>Please Select Academic Year</option>
                {this._vm.academicYears.map((x) => (
                  <option value={x.name}>{x.name}</option>
                ))}
              </select>
              <select id="programs" binding="Object.program">
                <option>Please Select Program</option>
                {this._vm.programs.map((x) => (
                  <option value={x.name}>{x.name}</option>
                ))}
              </select>
              <div class="sp-btn-row">
                <button class="sp-btn sp-btn-primary btn-small" id="submit">
                  Submit
                </button>
                <button class="sp-btn sp-btn-default btn-small" id="showFilters">
                  More
                </button>
              </div>
            </div>
            <div class="sp-row-col-3" id="moreFilters">
              <select id="enrollmentOption">
                {this._vm.enrollmentOptions.map((x) => (
                  <option value={x.name}>{x.name}</option>
                ))}
              </select>
              <select id="category">
                {this._vm.categories.map((x) => (
                  <option value={x.name}>{x.name}</option>
                ))}
              </select>
              <select id="semester">
                {this._vm.semesters.map((x) => (
                  <option value={x.name}>{x.name}</option>
                ))}
              </select>
              <select id="level">
                {this._vm.levels.map((x) => (
                  <option value={x.name}>{x.name}</option>
                ))}
              </select>
              <select id="isScoring">
                {this._vm.scoring.map((x) => (
                  <option value={x.name}>{x.name}</option>
                ))}
              </select>

              <div class="sp-btn-row">
                <button class="sp-btn sp-btn-default btn-small" id="hideFilters">
                  Less
                </button>
              </div>
            </div>
            <div>
              <div class="horizontal">
                <table class="table strech">
                  <thead>
                    <th>EnrollmentOption</th>
                    <th>Course</th>
                    <th>Level</th>
                    <th>Category</th>
                    {/* <th>Scoring</th>
                    <th>AssignedTo</th>
                    <th>Action</th> */}
                  </thead>
                  <tbody id="courses" data-repeat="courses">
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    let getCourses = async (evt: Event) => {
      evt.preventDefault();
      await this._vm.getMountedCourses();
    };

    let showFilters = async (evt: Event) => {
      evt.preventDefault();
      document.getElementById("moreFilters").style.removeProperty("display");
      document.getElementById("lessFilters").style.display = "none";
    };

    let hideFilters = async (evt: Event) => {
      evt.preventDefault();
      document.getElementById("moreFilters").style.display = "none";
      document.getElementById("lessFilters").style.removeProperty("display");
    };

    let buildQuery = async (evt: Event) => {
      evt.preventDefault();
      let tr = document.getElementById("courses");
      tr.textContent = "";
      let row = (
        <tr>
          <td binding="enrollmentOption"></td>
          <td binding="courseName"></td>
          <td binding="level"></td>
          <td binding="category"></td>
          {/* <td>
            <label class="check-content" style="margin-bottom: 0px;margin-top: 0px;padding-top: 0px;">
              <input type="checkbox" binding="scoring" disabled="true" />
              <span class="checkmark"></span>
            </label>
          </td>
          <td binding="assignedTo"></td>
          <td>
            <button class="sp-btn sp-btn-default btn-small">Del</button>
          </td> */}
        </tr>
      );
      tr.appendChild(row);
      let el = evt.target as HTMLSelectElement;
      this._vm.buidQuery(el.id, el.value);
    };

    const doc = document.getElementById(elementId);
    doc.textContent = "";
    doc.appendChild(temp);

    document.getElementById("moreFilters").style.display = "none";

    document.getElementById("submit").onclick = getCourses;
    document.getElementById("showFilters").onclick = showFilters;
    document.getElementById("hideFilters").onclick = hideFilters;

    document.getElementById("enrollmentOption").onchange = buildQuery;
    document.getElementById("category").onchange = buildQuery;
    document.getElementById("semester").onchange = buildQuery;
    document.getElementById("level").onchange = buildQuery;
    document.getElementById("isScoring").onchange = buildQuery;

    this._vm.bind();
  }
}

export class MountedRow {
  constructor(private courses: any[], private _vm: MountedCourseVm) {}

  render() {
    let tr = document.getElementById("courses");
    tr.textContent = "";
    for (let course of this.courses) {
      let checkbox = course.scoring ? (
        <input type="checkbox" binding="scoring" checked={course.scoring} value={course.scoring} disabled="true" />
      ) : (
        <input type="checkbox" binding="scoring" value={course.scoring} disabled="true" />
      );

      let row = (
        <tr>
          <td binding="enrollmentOption">{course.enrollmentOption}</td>
          <td binding="courseName">{course.courseName}</td>
          <td binding="level">{course.level}</td>
          <td binding="category">{course.category}</td>
          {/* <td>
            <label class="check-content" style="margin-bottom: 0px;margin-top: 0px;padding-top: 0px;">
              {checkbox}
              <span class="checkmark"></span>
            </label>
          </td>
          <td binding="assignedTo">{c.assignedTo}</td>
          <td>
            <button class="sp-btn sp-btn-default btn-small">Del</button>
          </td> */}
        </tr>
      );
      tr.appendChild(row);

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
              {c.courseCode} - {c.courseName} - {c.credit}
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
        tr.appendChild(innertable);
      }

      let deleteRow = innertable.getElementsByTagName("button")[0];
      deleteRow.addEventListener("click", (e) => {
        e.preventDefault();
        let options = {
          title: "Confirm",
          message: "Are you sure you want to delete ?",
          okText: "Yes",
          cancelText: "No",
          onok: () => {
            let row = (e.target as HTMLButtonElement).parentElement.parentElement as HTMLTableRowElement;
            (document.getElementById("courses") as HTMLTableElement).deleteRow(row.rowIndex);
          },
        };
        new Confirm(options).open();
      });

      let assignedTo = _.getElementByAttribute(innertable, "assignedTo") as HTMLTableDataCellElement;
      if (assignedTo) {
        assignedTo.addEventListener("click", (e) => {
          e.preventDefault();
          let originalValue = (e.target as HTMLTableDataCellElement).textContent;
          let elem = e.target as HTMLTableDataCellElement;
          let tdAssignedTo = (
            <p class="assignedTo">
              <select id="lecturers" binding="SelectedCourse.assignedTo">
                {this._vm.getLecturers().map((x) => (
                  <option value={x.name}>{x.name}</option>
                ))}
              </select>
              <button class="tr-btn-primary">
                <li class="fa fa-check"></li>
              </button>
              <button class="tr-btn-default">
                <li class="fa fa-times"></li>
              </button>
            </p>
          );
          if (elem.tagName === "TD") {
            elem.textContent = "";
            elem.appendChild(tdAssignedTo);

            let btns = tdAssignedTo.getElementsByTagName("button");
            //SaveButton
            btns[0].addEventListener("click", (e) => {
              e.preventDefault();
              let newValue = (((e.target as HTMLButtonElement).parentElement.parentElement as HTMLParagraphElement).getElementsByTagName(
                "select"
              )[0] as HTMLSelectElement).value;
              let row = (e.target as HTMLButtonElement).parentElement.parentElement as HTMLParagraphElement;
              assignedTo.removeChild(row);
              assignedTo.innerText = newValue;
            });

            //CancelButton
            btns[1].addEventListener("click", (e) => {
              e.preventDefault();
              let row = (e.target as HTMLButtonElement).parentElement.parentElement as HTMLParagraphElement;
              assignedTo.removeChild(row);
              assignedTo.innerText = originalValue;
            });
          }
        });
      }
    }
  }
}
