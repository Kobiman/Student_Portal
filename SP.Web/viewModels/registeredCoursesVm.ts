import { CourseRegistrationVm } from "./courseRegistrationVm";
import { RegisteredCoursesRow } from "../views/registration/registeredCoursesRow";

export class RegisteredCoursesVm {
  constructor(private _mainvm: CourseRegistrationVm) {}

  getRegisteredCourses() {
    let r = new RegisteredCoursesRow();
    this._mainvm.registeredCourses.map((x) => r.render(x));
  }
}
