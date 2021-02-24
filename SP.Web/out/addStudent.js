import { createElement } from "tsx-create-element";
import { HeaderComponent } from "./header";
import { App } from "./app";
import { ComponentBase } from "./componentbase";
import { Student } from "./models/student";
export class AddStudentComponent {
    constructor() {
        this.data = new Student();
        this.render = (elementId) => {
            var temp = createElement("div", { class: "sp-frame" },
                createElement("h1", null, "Add Student"),
                createElement("form", { class: "sp-form" },
                    createElement("div", { class: "left" },
                        createElement("p", null,
                            createElement("label", null, "Index Number"),
                            createElement("input", { id: "surname", binding: "IndexNumber", type: "text" })),
                        createElement("p", null,
                            createElement("label", null, "Reference Number"),
                            createElement("input", { type: "text", binding: "ReferenceNumber" })),
                        createElement("p", null,
                            createElement("label", null, "Title"),
                            createElement("input", { type: "text", binding: "Title" })),
                        createElement("p", null,
                            createElement("label", null, "Surname"),
                            createElement("input", { type: "text", binding: "Surname" })),
                        createElement("p", null,
                            createElement("label", null, "Othernames"),
                            createElement("input", { type: "text", binding: "Othernames" })),
                        createElement("p", null,
                            createElement("label", null, "Gender"),
                            createElement("input", { type: "text", binding: "Gender" }))),
                    createElement("div", { class: "right" },
                        createElement("p", null,
                            createElement("label", null, "Marital Status"),
                            createElement("input", { type: "text", binding: "MaritalStatus" })),
                        createElement("p", null,
                            createElement("label", null, "Date Of Birth"),
                            createElement("input", { type: "text", binding: "DateofBirth" })),
                        createElement("p", null,
                            createElement("label", null, "Country"),
                            createElement("input", { type: "text", binding: "Country" })),
                        createElement("p", null,
                            createElement("label", null, "Region"),
                            createElement("input", { type: "text", binding: "Region" })),
                        createElement("p", null,
                            createElement("label", null, "HomeTown"),
                            createElement("input", { type: "text", binding: "HomeTown" })),
                        createElement("p", null,
                            createElement("label", null, "Disability"),
                            createElement("input", { type: "text", binding: "Disability" }))),
                    createElement("div", { class: "sp-btn-row" },
                        createElement("button", { class: "sp-btn sp-btn-primary", id: "save" }, "Save"),
                        createElement("button", { class: "sp-btn sp-btn-default", id: "cancel" }, "Cancel"))));
            var doc = document.getElementById(elementId);
            doc.textContent = '';
            doc.appendChild(temp);
            document.getElementById("save").addEventListener('click', (evt) => {
                evt.preventDefault();
                this.data;
            });
            document.getElementById("cancel").addEventListener('click', (evt) => {
                evt.preventDefault();
                App.navigate('/app/frontPage');
            });
            this.data = new ComponentBase().addPropertyChangeNotification(this.data);
            new HeaderComponent().render('header');
        };
    }
}
// var temp = <div class="container-form">
//     <div class="wrapper-form">
//             <div class="form-group-1">
//              <h3>Title</h3>
//              <form>
//                <h3>Email Us</h3>
//                <p>
//                  <label>First Name</label>
//                  <input type="text" name="firstName"/>
//                </p>
//                <p>
//                  <label>Last Name</label>
//                  <input type="text" name="lastName"/>
//                </p>
//                <p>
//                  <label>Email Address</label>
//                  <input type="email" name="email"/>
//                </p>
//                <p>
//                  <label>Phone Number</label>
//                  <input type="text" name="phone"/>
//                </p>
//                <p class="message">
//                  <label>Message</label>
//                  <textarea name="message" row="5"></textarea>
//                </p>
//                <p class="submit-btn">
//                  <button>Submit</button>
//                </p>
//              </form>
//            </div>
//            </div>
//         </div>
//  var temp = <div class="form-group">
//               <h1>Add Student</h1>
//               <div class="form-control">
//                  <label>Index Number</label>
//                  <input type="text" />
//               </div>
//               <div class="form-control">
//                  <label>Index Number</label>
//                  <input type="text" />
//               </div>
//               <div class="form-control">
//                  <label>Index Number</label>
//                  <input type="text" />
//               </div>
//               <a class="btn2">Save</a>
//             </div>
// var temp = <div class="container">
//              <div class="wrapper">
//                <div class="contact">
//                  <form>
//                    <p>
//                     <label>Index Number</label>
//                     <input type="text" />
//                    </p>
//                 </form>
//                </div>
//              </div>
//            </div>;
//# sourceMappingURL=addStudent.js.map