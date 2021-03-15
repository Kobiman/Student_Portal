import { createElement } from "tsx-create-element";
import { Course } from "../../models/Course";

export class SelectedCourseView{
  constructor() {}
  render(x: Course) {
    return (
      <tr>
        <td binding>{x.courseName}</td>
        <td>
          <button class="sp-btn sp-btn-default btn-small" click={x.courseName} binding={x.courseName} value={x.courseName}>
            Add
          </button>
        </td>
      </tr>
    )
  }
}
