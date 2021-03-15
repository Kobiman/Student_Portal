import { createElement } from "tsx-create-element";
import { IView } from "../IView";
import { ViewModelHelper } from "../viewModelHelper";

export class HeaderView implements IView {
  render = (elementId: string): void => {
    var temp = (
      <div>
        {/* <nav class="sp-navbar">
                     <span id="open-slide" class="open-slide">
                      <a href="#" class="svg">
                      <svg width="30" height="30">
                           <path d="M0,5 30,5" stroke="#fff"
                           stroke-width="5"/>
                           <path d="M0,14 30,14" stroke="#fff"
                           stroke-width="5"/>
                           <path d="M0,23 30,23" stroke="#fff"
                           stroke-width="5"/>
                       </svg>
                      </a>
                     </span>
                     
                     <ul class="sp-navbar-nav">
                         <li><a>USP <i> </i></a></li>
                         <li><a href="#"><i class="fa fa-home"></i> Home</a></li>
                         <li><a href="#"><i class="fa fa-home"></i> About</a></li>
                         <li><a href="#"><i class="fa fa-home"></i> Services</a></li>
                     </ul>
                   </nav> */}

        <input type="checkbox" id="check" />
        <label for="check">
          <i id="open-slide">
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="#2bab0d" stroke-width="5" />
              <path d="M0,14 30,14" stroke="#2bab0d" stroke-width="5" />
              <path d="M0,23 30,23" stroke="#2bab0d" stroke-width="5" />
            </svg>
          </i>
          <i class="fa fa-times" id="cancel"></i>
        </label>
        <div id="side-menu" class="sp-side-nav">
          <header id="btn-close">USP </header>
          <ul>
            <li>
              <a>
                <i class="fa fa-home"></i>
              </a>
              <div class="sp-side-nav-2">
                <header>Students </header>
                <ul>
                  <li>
                    <a route="/app/#addStudent/stage1">Add Student</a>
                  </li>
                  <li>
                    <a route="/app/#studentList">Student List</a>
                  </li>
                  <li>
                    <a route="/app/#mountCourse">Mount Course</a>
                  </li>
                  <li>
                    <a route="/app/#mountedCourses">Mounted Courses</a>
                  </li>
                  <li>
                    <a route="/app/#registerCourses">Register Courses</a>
                  </li>
                  <li>
                    <a route="/app/#registeredCourses">Registered Courses</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-home"></i>
              </a>
              <div id="side-menu2" class="sp-side-nav-2">
                <header>Setup </header>
                <ul>
                  <li>
                    <a route="/app/#institution">Institution</a>
                  </li>
                  <li>
                    <a route="/app/#school">School</a>
                  </li>
                  <li>
                    <a route="/app/#department">Department</a>
                  </li>
                  <li>
                    <a route="/app/#lecturer">Lecturer</a>
                  </li>
                  <li>
                    <a route="/app/#program">Program</a>
                  </li>
                  <li>
                    <a route="/app/#course">Course</a>
                  </li>
                  <li>
                    <a route="/app/#lookup">Lookup</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-home"></i>
              </a>
              <div id="side-menu2" class="sp-side-nav-2">
                <header>USP </header>
                <ul>
                  <li>
                    <a route="/app/#uploadResults">Item 1</a>
                  </li>
                  <li>
                    <a href="#">Item 2</a>
                  </li>
                  <li>
                    <a href="#">Item 3</a>
                  </li>
                  <li>
                    <a href="#">Item 3</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-home"></i>
              </a>
              <div id="side-menu2" class="sp-side-nav-2">
                <header>USP </header>
                <ul>
                  <li>
                    <a route="/app/#StudentResultsView">Check Results</a>
                  </li>
                  <li>
                    <a href="#">Item 2</a>
                  </li>
                  <li>
                    <a href="#">Item 3</a>
                  </li>
                  <li>
                    <a href="#">Item 3</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        {/* <div id="side-menu2" class="sp-side-nav-2">
                     <header>USP </header>
                     <ul>
                       <li><a href="#"><i class="fa fa-home"></i></a></li>
                       <li><a href="#"><i class="fa fa-home"></i></a></li>
                       <li><a href="#"><i class="fa fa-home"></i></a></li>
                       <li><a href="#"><i class="fa fa-home"></i></a></li>
                     </ul>
                   </div> */}
        {/* <div id="side-menu" class="side-nav">
                    <header id="btn-close" class="btn-close">UENR Portal &times;</header>
                    <a href="#"><i class="fa fa-home"></i> Home</a>
                    <a href="#"><i class="fa fa-home"></i> About</a>
                    <a href="#"><i class="fa fa-home"></i> Services</a>
                    <a href="#"><i class="fa fa-home"></i> Contacts</a>
                    </div> */}
      </div>
    );

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
    btn.addEventListener("click", (evt: Event) => {
      evt.preventDefault();
      document.getElementById("side-menu").style.left = "0px";
      document.getElementById("route-outlet").style.marginLeft = "100px";
    });

    var btnclose = document.getElementById("btn-close");
    btnclose.addEventListener("click", (evt: Event) => {
      evt.preventDefault();
      document.getElementById("side-menu").style.left = "-150px";
      document.getElementById("route-outlet").style.marginLeft = "0px";
    });
    new ViewModelHelper().addEventListener(this, "route");
  };
}
