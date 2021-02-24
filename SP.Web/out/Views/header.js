import { createElement } from "tsx-create-element";
import { ViewModelHelper } from "../viewModelHelper";
export class HeaderView {
    constructor() {
        this.render = (elementId) => {
            var temp = (createElement("div", null,
                createElement("input", { type: "checkbox", id: "check" }),
                createElement("label", { for: "check" },
                    createElement("i", { id: "open-slide" },
                        createElement("svg", { width: "30", height: "30" },
                            createElement("path", { d: "M0,5 30,5", stroke: "#2bab0d", "stroke-width": "5" }),
                            createElement("path", { d: "M0,14 30,14", stroke: "#2bab0d", "stroke-width": "5" }),
                            createElement("path", { d: "M0,23 30,23", stroke: "#2bab0d", "stroke-width": "5" }))),
                    createElement("i", { class: "fa fa-times", id: "cancel" })),
                createElement("div", { id: "side-menu", class: "sp-side-nav" },
                    createElement("header", { id: "btn-close" }, "USP "),
                    createElement("ul", null,
                        createElement("li", null,
                            createElement("a", null,
                                createElement("i", { class: "fa fa-home" })),
                            createElement("div", { class: "sp-side-nav-2" },
                                createElement("header", null, "Students "),
                                createElement("ul", null,
                                    createElement("li", null,
                                        createElement("a", { route: "/app/#addStudent/stage1" }, "Add Student")),
                                    createElement("li", null,
                                        createElement("a", { route: "/app/#studentList" }, "Student List")),
                                    createElement("li", null,
                                        createElement("a", { route: "/app/#mountCourse" }, "Mount Course")),
                                    createElement("li", null,
                                        createElement("a", { route: "/app/#mountedCourses" }, "Mounted Courses")),
                                    createElement("li", null,
                                        createElement("a", { route: "/app/#registerCourses" }, "Register Courses")),
                                    createElement("li", null,
                                        createElement("a", { route: "/app/#registeredCourses" }, "Registered Courses"))))),
                        createElement("li", null,
                            createElement("a", { href: "#" },
                                createElement("i", { class: "fa fa-home" })),
                            createElement("div", { id: "side-menu2", class: "sp-side-nav-2" },
                                createElement("header", null, "Setup "),
                                createElement("ul", null,
                                    createElement("li", null,
                                        createElement("a", { route: "/app/#institution" }, "Institution")),
                                    createElement("li", null,
                                        createElement("a", { route: "/app/#school" }, "School")),
                                    createElement("li", null,
                                        createElement("a", { route: "/app/#department" }, "Department")),
                                    createElement("li", null,
                                        createElement("a", { route: "/app/#lecturer" }, "Lecturer")),
                                    createElement("li", null,
                                        createElement("a", { route: "/app/#program" }, "Program")),
                                    createElement("li", null,
                                        createElement("a", { route: "/app/#course" }, "Course")),
                                    createElement("li", null,
                                        createElement("a", { route: "/app/#lookup" }, "Lookup"))))),
                        createElement("li", null,
                            createElement("a", { href: "#" },
                                createElement("i", { class: "fa fa-home" })),
                            createElement("div", { id: "side-menu2", class: "sp-side-nav-2" },
                                createElement("header", null, "USP "),
                                createElement("ul", null,
                                    createElement("li", null,
                                        createElement("a", { href: "#" }, "Item 1")),
                                    createElement("li", null,
                                        createElement("a", { href: "#" }, "Item 2")),
                                    createElement("li", null,
                                        createElement("a", { href: "#" }, "Item 3")),
                                    createElement("li", null,
                                        createElement("a", { href: "#" }, "Item 3"))))),
                        createElement("li", null,
                            createElement("a", { href: "#" },
                                createElement("i", { class: "fa fa-home" })),
                            createElement("div", { id: "side-menu2", class: "sp-side-nav-2" },
                                createElement("header", null, "USP "),
                                createElement("ul", null,
                                    createElement("li", null,
                                        createElement("a", { href: "#" }, "Item 1")),
                                    createElement("li", null,
                                        createElement("a", { href: "#" }, "Item 2")),
                                    createElement("li", null,
                                        createElement("a", { href: "#" }, "Item 3")),
                                    createElement("li", null,
                                        createElement("a", { href: "#" }, "Item 3")))))))));
            //     var temp = <div class="sp-header"><div class="sp-container">
            //     <div id="branding">
            //        <h1>
            //            <span id="open-slide" class="open-slide">
            //              <a href="#">
            //                  <svg width="30" height="30">
            //                      <path d="M0,5 30,5" stroke="#fff"
            //                      stroke-width="5"/>
            //                      <path d="M0,14 30,14" stroke="#fff"
            //                      stroke-width="5"/>
            //                      <path d="M0,23 30,23" stroke="#fff"
            //                      stroke-width="5"/>
            //                  </svg>
            //              </a>
            //            </span>
            //            <span class="sp-highlight">UENR</span> Portal
            //         </h1>
            //     </div>
            //    <nav>
            //        <ul>
            //            <li><a id="home">Home</a></li>
            //            <li><a>About</a></li>
            //            <li><a>Services</a></li>
            //            <li><a href="#">Services</a></li>
            //            <li><a href="#">Investers</a></li>
            //            <li><a href="#">Contact</a></li>
            //        </ul>
            //    </nav>
            //    <div id="side-menu" class="side-nav">
            //        <a href="#" id="btn-close" class="btn-close">&times;</a>
            //        <a href="#">Home</a>
            //        <a href="#">About</a>
            //        <a href="#">Services</a>
            //        <a href="#">Contacts</a>
            //    </div>
            //   </div>
            //   </div>;
            var doc = document.getElementById(elementId);
            doc.innerHTML = "";
            doc.innerHTML = temp.outerHTML;
            var btn = document.getElementById("open-slide");
            btn.addEventListener("click", (evt) => {
                evt.preventDefault();
                document.getElementById("side-menu").style.left = "0px";
                document.getElementById("route-outlet").style.marginLeft = "100px";
            });
            var btnclose = document.getElementById("btn-close");
            btnclose.addEventListener("click", (evt) => {
                evt.preventDefault();
                document.getElementById("side-menu").style.left = "-150px";
                document.getElementById("route-outlet").style.marginLeft = "0px";
            });
            new ViewModelHelper().addEventListener(this, "route");
        };
    }
}
//# sourceMappingURL=header.js.map