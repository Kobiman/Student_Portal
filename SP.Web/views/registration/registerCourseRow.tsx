import { RegisterCourseVm } from "../../viewModels/registerCourseVm";
import { createElement } from "tsx-create-element";

export class RegisterCourseRow {
  constructor(private _vm: RegisterCourseVm) {
    this.tr = document.getElementById("courseList");
    this.tr.textContent = "";
  }

  tr: any;
  render(registeredCourse: any) {
    let checkBox = "";
    if (registeredCourse.category === "GENERAL" || registeredCourse.category === "OPTION(RESTRICTIVE)") {
      checkBox = <input type="checkbox" binding="selected" checked="true" disabled />;
    } else {
      checkBox = <input type="checkbox" binding="selected" />;
    }

    let element: HTMLTableRowElement = (
      <tr>
        <td>
          {registeredCourse.courseCode} - {registeredCourse.courseName} - {registeredCourse.credit}
        </td>
        <td>{registeredCourse.category}</td>
        <td>
          <label class="check-content" style="margin-bottom: 0px;margin-top: 0px;padding-top: 0px;">
            {checkBox}
            <span class="checkmark"></span>
          </label>
        </td>
      </tr>
    );

    let elements = element.querySelectorAll("[binding]");
    elements.forEach((e) => {
      if (e.tagName === "INPUT") {
        let el = e as HTMLInputElement;

        el.addEventListener("change", (e) => {
          e.preventDefault();
          let courseCode = element.cells[0].textContent;
          if (el.checked) {
            this._vm.addCourse(courseCode);
          } else if (!el.checked) {
            this._vm.removeCourse(courseCode);
          }
        });
      }
    });

    this.tr.append(element);
  }
}
