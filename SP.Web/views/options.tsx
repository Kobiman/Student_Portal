import { IView } from "../IView";
import { createElement } from "tsx-create-element";

export class OptionsView implements IView{

    constructor(private options:any[]) {}

    render(elementId: string): void {
        const temp = this.options.map((x) => (
                  <option value={x}>{x}</option>
                ))
    }
}