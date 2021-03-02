import { createElement } from "tsx-create-element";
export class UploadResultView {
    constructor() {
        this.render = (elementId) => {
            let temp = (createElement("h1", null, "hello world"));
            var doc = document.getElementById(elementId);
            doc.textContent = "";
            doc.appendChild(temp);
        };
    }
}
//# sourceMappingURL=uploadResultView.js.map