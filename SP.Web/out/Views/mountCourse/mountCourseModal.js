var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createElement } from "tsx-create-element";
import { SelectedCourseView } from "./selectedCourse";
import { Confirm } from "../../confirm/confirm";
export class MountCourseModal {
    constructor(_vm) {
        this._vm = _vm;
        this.render = (elementId) => {
            let temp = (createElement("div", { class: "mountcourse-model", id: "modal" },
                createElement("div", { class: "modal-content" },
                    createElement("div", { class: "sp-box" },
                        createElement("div", { class: "sp-row" },
                            createElement("button", { class: "modal-btn", id: "close" },
                                createElement("li", { class: "fa fa-times" })),
                            createElement("h1", null, "Mount Courses"),
                            createElement("div", { class: "mountcourses-form" },
                                createElement("p", null,
                                    createElement("select", { binding: "SelectedCourse.enrollmentOption", value: this._vm.mountedCourse.enrollmentOption },
                                        createElement("option", null, "Please Select EnrollmentOption"),
                                        this._vm.getEnrollmentOption().map((x) => (createElement("option", { value: x.name }, x.name)))),
                                    createElement("div", { errors: "enrollmentOption" })),
                                createElement("p", null,
                                    createElement("select", { id: "departments", binding: "SelectedCourse.department", value: this._vm.mountedCourse.department },
                                        createElement("option", null, "Please Select Department"),
                                        this._vm.getDepartments().map((x) => (createElement("option", { value: x.name }, x.name)))),
                                    createElement("div", { errors: "department" })),
                                createElement("p", null,
                                    createElement("select", { id: "programs", binding: "SelectedCourse.program", value: this._vm.mountedCourse.program },
                                        createElement("option", null, "Please Select Program")),
                                    createElement("div", { errors: "program" })),
                                createElement("div", { class: "sp-row-col-1-3-1" },
                                    createElement("p", null,
                                        createElement("select", { id: "levels", binding: "SelectedCourse.level", value: this._vm.mountedCourse.level },
                                            createElement("option", null, "Please Select Level"),
                                            this._vm.getLevels().map((x) => (createElement("option", { value: x.name }, x.name)))),
                                        createElement("div", { errors: "level" })),
                                    createElement("p", null,
                                        createElement("select", { id: "specializations", binding: "SelectedCourse.specialization", value: this._vm.mountedCourse.specialization },
                                            createElement("option", null, "Please Select Category")),
                                        createElement("div", { errors: "category" })),
                                    createElement("p", null,
                                        createElement("label", { class: "check-content margin-0" },
                                            "Scoring",
                                            createElement("input", { id: "scoring", type: "checkbox", binding: "SelectedCourse.scoring", value: this._vm.mountedCourse.scoring }),
                                            createElement("span", { class: "checkmark" })),
                                        createElement("div", { errors: "scoring" }))),
                                createElement("p", null,
                                    createElement("select", { id: "lecturers", binding: "SelectedCourse.assignedTo", value: this._vm.mountedCourse.assignedTo },
                                        createElement("option", null, "Please Select Lecturer"),
                                        this._vm.getLecturers().map((x) => (createElement("option", { value: x.name }, x.name)))),
                                    createElement("div", { errors: "assignedTo" })),
                                createElement("div", { class: "mc-table" },
                                    createElement("table", { class: "table" },
                                        createElement("tbody", { id: "allCourses" })))))))));
            const doc = document.getElementById(elementId);
            //doc.textContent = "";
            doc.appendChild(temp);
            let hideModal = (evt) => __awaiter(this, void 0, void 0, function* () {
                evt.preventDefault();
                //App.navigate("/app/#mountCourse");
                let elem = document.getElementById("modal");
                let doc = document.getElementById("route-outlet");
                doc.removeChild(elem);
            });
            let addCourse = (evt) => __awaiter(this, void 0, void 0, function* () {
                evt.preventDefault();
                //new MountedCourseView(this._vm).render();
                let courses = this._vm.addCourse(evt.target.value);
                if (courses.length > 0) {
                    let doc = document.getElementById("selectedCourses");
                    doc.textContent = "";
                    for (let course of courses) {
                        let tr = (createElement("tr", null,
                            createElement("td", null, course.enrollmentOption),
                            createElement("td", null, course.program),
                            createElement("td", null, course.level),
                            createElement("td", null, course.category)));
                        doc.appendChild(tr);
                        let innertable = (createElement("tr", null,
                            createElement("td", { colspan: "4" },
                                createElement("table", { class: "table" },
                                    createElement("thead", null,
                                        createElement("th", null, "EnrollmentOption"),
                                        createElement("th", null, "Courses"),
                                        createElement("th", null, "Category"),
                                        createElement("th", null, "Level"),
                                        createElement("th", null, "Scoring"),
                                        createElement("th", null, "AssignedTo"),
                                        createElement("th", null, "Action")),
                                    createElement("tbody", null)))));
                        for (let c of course.mountedCourses) {
                            let input = "";
                            if (c.scoring) {
                                input = createElement("input", { type: "checkbox", checked: c.scoring, value: c.scoring, disabled: "true" });
                            }
                            else {
                                input = createElement("input", { type: "checkbox", value: c.scoring, disabled: "true" });
                            }
                            innertable.getElementsByTagName("tbody")[0].appendChild(createElement("tr", { style: "background:#f2f2f2" },
                                createElement("td", null, c.enrollmentOption),
                                createElement("td", null,
                                    c.courseCode,
                                    " - ",
                                    c.course,
                                    " - ",
                                    c.credit),
                                createElement("td", null, c.category),
                                createElement("td", null, c.level),
                                createElement("td", null,
                                    createElement("label", { class: "check-content", style: "margin-bottom: 0px;margin-top: 0px;padding-top: 0px;" },
                                        input,
                                        createElement("span", { class: "checkmark" }))),
                                createElement("td", null, c.assignedTo),
                                createElement("td", null,
                                    createElement("button", { class: "sp-btn sp-btn-default btn-small" }, "Del"))));
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
                                    let row = e.target.parentElement.parentElement;
                                    document.getElementById("selectedCourses").deleteRow(row.rowIndex);
                                    this._vm.removeCourse(row.rowIndex);
                                },
                            };
                            new Confirm(options).open();
                        });
                    }
                }
            });
            let getSpecializations = (evt) => __awaiter(this, void 0, void 0, function* () {
                evt.preventDefault();
                let value = evt.target.value;
                this._vm.getSpecializations(value);
                this._vm.mountedCourse["level"] = value;
                let specializations = document.getElementById("specializations");
                specializations.textContent = "";
                specializations.appendChild(createElement("option", null));
                this._vm.specializations.map((x) => specializations.appendChild(createElement("option", null, x.name)));
            });
            let getCourses = (evt) => __awaiter(this, void 0, void 0, function* () {
                evt.preventDefault();
                yield this._vm.getCourses(evt.target.value);
                let allCourses = document.getElementById("allCourses");
                allCourses.textContent = "";
                this._vm.courses.map((x) => allCourses.appendChild(new SelectedCourseView().render(x)));
                const elements = document.querySelectorAll("[click]");
                elements.forEach(function (element) {
                    element.onclick = addCourse;
                });
                let programs = document.getElementById("programs");
                programs.textContent = "";
                programs.appendChild(createElement("option", null));
                this._vm.programs.map((x) => programs.appendChild(createElement("option", { value: x.name }, x.name)));
            });
            this._vm.bind();
            document.getElementById("close").onclick = hideModal;
            document.getElementById("departments").onchange = getCourses;
            document.getElementById("levels").onchange = getSpecializations;
            //document.getElementById("scoring").onchange = setScoring;
        };
    }
}
//# sourceMappingURL=mountCourseModal.js.map