import { createElement } from 'tsx-create-element';
import { App } from './app';
export class FrontPageComponent {
    constructor() {
        this.render = (elementId) => {
            let temp = createElement("div", { class: "showcase" },
                createElement("div", { class: "container" },
                    createElement("h1", null, "Training the next generation of experts"),
                    createElement("p", null, "Providing cutting-edge research to support Ghana and Africa\u2019s development on energy and natural resources."),
                    createElement("button", { class: "sp-btn sp-btn-primary-2", id: "signin" },
                        createElement("span", null, "Sign in"))));
            var doc = document.getElementById(elementId);
            doc.textContent = '';
            doc.appendChild(temp);
            var btn = document.getElementById('signin');
            btn.addEventListener('click', (evt) => {
                evt.preventDefault();
                App.navigate('/app/addStudent');
            });
        };
    }
}
//# sourceMappingURL=frontpage.js.map