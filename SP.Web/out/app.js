import { FrontPageView } from "./views/frontpage";
import { AddStudentView } from "./views/student/addStudent";
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
import { RegisteredCoursesView } from "./views/registration/registeredCoursesView";
import { CourseRegistrationService } from "./services/courseRegistrationService";
import { RegisteredCoursesVm } from "./viewModels/registeredCoursesVm";
import { RegisterCourseView } from "./views/registration/registerCourseView";
import { RegisterCourseVm } from "./viewModels/registerCourseVm";
export class App {
    static render(view, domlocation) {
        view.render(domlocation);
    }
    static navigate(pathName) {
        if (this.currentPath !== pathName) {
            window.history.pushState({}, pathName, window.location.origin + pathName);
            var p = this.routes[pathName]();
            this.render(p, "route-outlet");
            this.currentPath = pathName;
        }
    }
    static register() {
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
                let btn = createElement("button", { id: "btnAdd" }, "Add");
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
    static navigateChild(pathName) {
        if (this.currentPath !== pathName) {
            window.history.pushState({}, pathName, window.location.origin + pathName);
            this.currentPath = pathName;
        }
    }
}
App.baseUri = "https://localhost:44319";
App.currentPath = "";
App.commonService = new CommonService();
App.courseRegistrationService = new CourseRegistrationService();
App.addStudentVm = new AddStudentVm();
//private static mountCourseViewModel = new MountCourseViewModel(App.commonService);
App.routes = {
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
//App.register();
App.navigate("/app/#frontPage");
new HeaderView().render("header");
window.onpopstate = () => {
    App.navigate(window.location.pathname);
};
//# sourceMappingURL=app.js.map