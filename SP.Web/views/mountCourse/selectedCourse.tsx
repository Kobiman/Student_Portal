import { createElement } from "tsx-create-element";
import { Course } from "../../models/Course";

export class SelectedCourseView{
  constructor() {}
  render(x: Course) {
    return (
      <tr>
        <td binding>{x.name}</td>
        <td>
          <button class="sp-btn sp-btn-default btn-small" click={x.name} binding={x.name} value={x.name}>
            Add
          </button>
        </td>
      </tr>
    )
  }
}
