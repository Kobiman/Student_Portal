import { createElement } from "tsx-create-element";
export class OptionsView {
    constructor(options) {
        this.options = options;
    }
    render(elementId) {
        const temp = this.options.map((x) => (createElement("option", { value: x }, x)));
    }
}
//# sourceMappingURL=options.js.map