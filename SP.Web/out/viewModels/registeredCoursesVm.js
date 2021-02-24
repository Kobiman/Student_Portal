import { RegisteredCoursesRow } from "../views/registration/registeredCoursesRow";
export class RegisteredCoursesVm {
    constructor(_mainvm) {
        this._mainvm = _mainvm;
    }
    getRegisteredCourses() {
        let r = new RegisteredCoursesRow();
        this._mainvm.registeredCourses.map((x) => r.render(x));
    }
}
//# sourceMappingURL=registeredCoursesVm.js.map