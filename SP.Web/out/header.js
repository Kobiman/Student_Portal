import { createElement } from "./node_modules/tsx-create-element";
import { AddStudentComponent } from "./views/addStudent";
export class HeaderComponent {
    constructor() {
        this.render = (elementId) => {
            // var temp = <div class="sp-menu-bar">
            //            <ul>
            //            <li><a>UENR Portal</a></li>
            //              <li class="active"><a href="frontPage">Home</a></li>
            //              <li><a href="#">About Us</a></li>
            //              <li><a href="#">Services</a></li>
            //              <li><a href="#">Investers</a></li>
            //              <li><a href="#">Contact</a></li>
            //            </ul>
            //            </div>
            var temp = createElement("div", { class: "sp-header" },
                createElement("div", { class: "sp-container" },
                    createElement("div", { id: "branding" },
                        createElement("h1", null,
                            createElement("span", { class: "sp-highlight" }, "UENR"),
                            " Portal")),
                    createElement("nav", null,
                        createElement("ul", null,
                            createElement("li", null,
                                createElement("a", { id: "home" }, "Home")),
                            createElement("li", null,
                                createElement("a", null, "About")),
                            createElement("li", null,
                                createElement("a", null, "Services")),
                            createElement("li", null,
                                createElement("a", { href: "#" }, "Services")),
                            createElement("li", null,
                                createElement("a", { href: "#" }, "Investers")),
                            createElement("li", null,
                                createElement("a", { href: "#" }, "Contact"))))));
            var doc = document.getElementById(elementId);
            doc.innerHTML = '';
            doc.innerHTML = temp.outerHTML;
            doc.addEventListener('click', (evt) => {
                evt.preventDefault();
                var addStudentComponent = new AddStudentComponent();
                addStudentComponent.render('route-outlet');
            });
        };
    }
}
//# sourceMappingURL=header.js.map