import { createElement, StatelessProps } from "tsx-create-element";
import { IView } from "../IView";
import { App } from "../app";
export class FrontPageView implements IView {
  constructor() {}

  render = (elementId: string) => {
    let temp = (
      <div class="showcase">
        <div class="sp-container">
          <h1>Training the next generation of experts</h1>
          <p>Providing cutting-edge research to support Ghana and Africa’s development on energy and natural resources.</p>
          <button class="sp-btn sp-btn-primary-2" id="signin">
            <span>Sign in</span>
          </button>
        </div>
      </div>
    );

    var doc = document.getElementById(elementId);
    doc.textContent = "";
    doc.appendChild(temp);

    var btn = document.getElementById("signin");

    btn.addEventListener("click", (evt: Event) => {
      evt.preventDefault();
      App.navigate("/app/#addStudent/stage1");
    });
  };
}
