import { createElement } from "tsx-create-element";
import { IView } from "../IView";
import styles from './style'
export class UploadResultView implements IView {

    constructor() { }
    
    render = (elementId: string) => {
        const classes = styles();
        const headers=["indexNumbers","Name","Level","courseCode","classScore","examScore","Total"];
      let temp = (
        <div class="sp-box">
            <div class="mc-row">
            <h1>Upload Results</h1>
            <div class="mountcourses-form">
            <div class="sp-row-col-4">
            <p>
                <select id="department" name="department">
                <option>Department</option>
                </select>
                <div errors="IndexNumber"></div>
              </p>
              <p>
                <select id="coursecode" name="coursecode">
                <option>Course Code</option>
                </select>
                <div errors="IndexNumber"></div>
              </p>
              <p>
                <input readOnly={true} value="2020/2021" id="academicyear" name="academicyear"/>
                <div errors="IndexNumber"></div>
              </p>
              <p>
              <div class="sp-btn-row">
              <button class="sp-btn sp-btn-default btn-small" id="showFilters">
                  Upload
                </button>
                <button class="sp-btn sp-btn-primary btn-small" id="submit">
                  Submit
                </button>
              </div>
              </p>
            </div>
            <div>
            <div class="horizontal">
                  <table class="table striped stretch">
                      <thead>
                          <tr>
                            {headers.map(headerItem => (
                                  <th>{headerItem}</th>
                              ))}
                          </tr>
                      </thead>
                      <tbody class={classes.tbody}>

                      </tbody>
                  </table>
              </div>
            </div>
            </div>
            </div>
        </div>
    );

    var doc = document.getElementById(elementId);
    doc.textContent = "";
    doc.appendChild(temp);

  };
}
