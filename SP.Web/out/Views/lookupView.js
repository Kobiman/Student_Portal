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
import { LookupModal } from "./lookupModal";
export class LookupView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var temp = (createElement("div", { class: "sp-box" },
            createElement("div", { class: "mc-row" },
                createElement("h1", null, "Lookup"),
                createElement("div", { class: "mountcourses-form" },
                    createElement("div", { class: "sp-btn-row" },
                        createElement("button", { class: "sp-btn sp-btn-default btn-small", id: "addLookup" }, "Add")),
                    createElement("div", null,
                        createElement("div", { class: "horizontal" },
                            createElement("table", { class: "table striped" },
                                createElement("thead", null,
                                    createElement("th", null, "Name"),
                                    createElement("th", null, "Type")),
                                createElement("tbody", { id: "lookups", "data-repeat": "lookups" },
                                    createElement("tr", null,
                                        createElement("td", { binding: "name" }),
                                        createElement("td", { binding: "type" }))))))))));
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(temp);
        let showModal = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            new LookupModal(this._vm).render("route-outlet");
        });
        document.getElementById("addLookup").onclick = showModal;
    }
}
//# sourceMappingURL=lookupView.js.map