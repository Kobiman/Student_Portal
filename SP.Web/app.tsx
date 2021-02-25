import { FrontPageView } from "./views/frontpage";
import { AddStudentView } from "./views/student/addStudent";
import { IView } from "./IView";
import { AddStudentVm } from "./viewModels/AddStudentVm";
import { Stage1 } from "./views/student/stage1";
import { Stage2 } from "./views/student/stage2";
import { Stage3 } from "./views/student/stage3";
import { StudentListView } from "./views/student/studentList";
import { StudentListVm } from "./viewModels/StudentListVm";
import { HeaderView } from "./views/header";
import { MountCourseView } from "./views/mountCourse/mountCourse";
import { MountCourseViewModel } from "./viewModels/mountCourseVm";
import { InstitutionView } from "./views/institutionView";
import { InstitutionVm } from "./viewModels/InstitutionVm";
import { SchoolView } from "./views/schoolView";
import { SchoolVm } from "./viewModels/schoolVm";
import { DepartmentView } from "./views/departmentView";
import { DepartmentVm } from "./viewModels/departmentVm";
import { ProgramView } from "./views/programView";
import { ProgramViewModel } from "./viewModels/programVm";
import { CourseVm } from "./viewModels/courseVm";
import { CourseView } from "./views/courseView";
import { LookupView } from "./views/lookupView";
import { LookupVm } from "./viewModels/lookupVm";
import { LecturerView } from "./views/lecturerView";
import { LecturerVm } from "./viewModels/lecturerVm";
import { MountedCourseVm } from "./viewModels/mountedCourseVm";
import { MountedCoursesView } from "./views/mountCourse/mountedCoursesView";
import { CommonService } from "./services/commonService";
import "./css/style.css";
import { createElement } from "tsx-create-element";
import { CourseRegistrationView } from "./views/registration/courseRegistrationView";
import { CourseRegistrationVm } from "./viewModels/courseRegistrationVm";
import { RegisteredCoursesView } from "./views/registration/registeredCoursesView";
import { CourseRegistrationService } from "./services/courseRegistrationService";
import { RegisteredCoursesVm } from "./viewModels/registeredCoursesVm";
import { RegisterCourseView } from "./views/registration/registerCourseView";
import { RegisterCourseVm } from "./viewModels/registerCourseVm";

export class App {
  static baseUri = "https://localhost:44319";
  static currentPath = "";
  static commonService = new CommonService();
  static courseRegistrationService = new CourseRegistrationService();
  private static addStudentVm = new AddStudentVm();
  //private static mountCourseViewModel = new MountCourseViewModel(App.commonService);

  static routes = {
    "": () => new FrontPageView(),
    "/app/#addStudent": () => new AddStudentView(App.addStudentVm),
    "/app/#frontPage": () => new FrontPageView(),
    "/app/#studentList": () => new StudentListView(new StudentListVm()),
    "/app/#mountCourse": () => new MountCourseView(new MountCourseViewModel(App.commonService)),
    "/app/#addStudent/stage1": () => new Stage1(App.addStudentVm),
    "/app/#addStudent/stage2": () => new Stage2(App.addStudentVm),
    "/app/#addStudent/stage3": () => new Stage3(App.addStudentVm),
    "/app/#institution": () => new InstitutionView(new InstitutionVm()),
    "/app/#school": () => new SchoolView(new SchoolVm(App.commonService)),
    "/app/#department": () => new DepartmentView(new DepartmentVm()),
    "/app/#program": () => new ProgramView(new ProgramViewModel()),
    "/app/#course": () => new CourseView(new CourseVm()),
    "/app/#lookup": () => new LookupView(new LookupVm()),
    "/app/#lecturer": () => new LecturerView(new LecturerVm()),
    "/app/#mountedCourses": () => new MountedCoursesView(new MountedCourseVm(App.commonService)),
    //"/app/#courseRegistration": () => new CourseRegistrationView(new CourseRegistrationVm()),
    "/app/#registeredCourses": () => new RegisteredCoursesView(new RegisteredCoursesVm(App.courseRegistrationService)),
    "/app/#registerCourses": () => new RegisterCourseView(new RegisterCourseVm(App.courseRegistrationService)),
  };

  static render(view: IView, domlocation: string) {
    view.render(domlocation);
  }

  public static navigate(pathName: string) {
    if (this.currentPath !== pathName) {
      window.history.pushState({}, pathName, window.location.origin + pathName);

      var view = this.routes[pathName]();
      this.render(view, "route-outlet");
      this.currentPath = pathName;
    }
  }

  public static register() {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/app/sw.js")
          .then((reg) => {
            console.log("Registered", reg);
          })
          .catch((err) => {
            console.log("Registration failed", err);
          });
      });

      let deferredPrompt;
      window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        deferredPrompt = e;
        //btnAdd.style.display = 'block';
        let btn = <button id="btnAdd">Add</button>;
        btn.addEventListenner("click", (e) => {
          deferredPrompt.userChoice.then((choice) => {
            console.log("User accepted the A2HS prompt");
          });
          deferredPrompt = null;
        });
        document.appendChild(btn);
      });
    }
  }

  public static navigateChild(pathName: string) {
    if (this.currentPath !== pathName) {
      window.history.pushState({}, pathName, window.location.origin + pathName);
      this.currentPath = pathName;
    }
  }
}

App.register();
App.navigate("/app/#frontPage");
new HeaderView().render("header");

window.onpopstate = () => {
  App.navigate(window.location.pathname);
};
