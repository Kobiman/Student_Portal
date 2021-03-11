import { createElement } from "tsx-create-element";
import { App } from "../../app";
export class Stage3 {
    constructor(addStudentVm) {
        this.render = (elementId) => {
            var temp = (createElement("div", { class: "sp-box" },
                createElement("div", { class: "sp-row" },
                    createElement("h1", null, "Academic Details"),
                    createElement("form", { class: "sp-form" },
                        createElement("div", { class: "left" },
                            createElement("p", null,
                                createElement("label", null, "Program Of Study"),
                                createElement("input", { type: "text", binding: "Student.ProgramId", value: this._vm.student.ProgramId }),
                                createElement("div", { errors: "ProgramId" })),
                            createElement("p", null,
                                createElement("label", null, "Specialization"),
                                createElement("input", { type: "text", binding: "Student.Specialization", value: this._vm.student.Specialization }),
                                createElement("div", { errors: "Specialization" })),
                            createElement("p", null,
                                createElement("label", null, "ProgramStatus"),
                                createElement("input", { type: "text", binding: "Student.ProgramStatus", value: this._vm.student.ProgramStatus }),
                                createElement("div", { errors: "ProgramStatus" })),
                            createElement("p", null,
                                createElement("label", null, "Level"),
                                createElement("input", { type: "text", binding: "Student.Level", value: this._vm.student.Level }),
                                createElement("div", { errors: "Level" }))),
                        createElement("div", { class: "right" },
                            createElement("p", null,
                                createElement("label", null, "StudentType"),
                                createElement("input", { type: "text", binding: "Student.StudentType", value: this._vm.student.StudentType }),
                                createElement("div", { errors: "StudentType" })),
                            createElement("p", null,
                                createElement("label", null, "Enrolment Option"),
                                createElement("input", { type: "text", binding: "Student.EnrolmentOption", value: this._vm.student.EnrolmentOption }),
                                createElement("div", { errors: "EnrolmentOption" })),
                            createElement("p", null,
                                createElement("label", null, "DateOfEntry"),
                                createElement("input", { type: "date", binding: "Student.DateOfEntry", value: this._vm.student.DateOfEntry }),
                                createElement("div", { errors: "DateOfEntry" }))),
                        createElement("div", { class: "sp-btn-row" }),
                        createElement("div", { class: "sp-btn-row" },
                            createElement("button", { id: "Back", class: "sp-btn sp-btn-default", click: "/app/#addStudent/stage2" },
                                createElement("i", { class: "fa fa-chevron-circle-left" }),
                                " Back"),
                            createElement("button", { id: "Save", class: "sp-btn sp-btn-primary" },
                                "Submit ",
                                createElement("i", { class: "fa fa-save" })))))));
            const doc = document.getElementById(elementId);
            doc.textContent = "";
            doc.appendChild(temp);
            let onSaveButtonClicked = (evt) => {
                evt.preventDefault();
                this._vm.save(this._vm.stage3_rules());
            };
            const save = document.getElementById("Save");
            save.onclick = onSaveButtonClicked;
            let onBackButtonClicked = (evt) => {
                evt.preventDefault();
                var route = back.getAttribute("click");
                App.navigate(route);
            };
            const back = document.getElementById("Back");
            back.onclick = onBackButtonClicked;
            this._vm.bindData();
            //new ViewModelHelper().addEventListener(this,'click');
        };
        this._vm = addStudentVm;
    }
}
//# sourceMappingURL=stage3.js.map