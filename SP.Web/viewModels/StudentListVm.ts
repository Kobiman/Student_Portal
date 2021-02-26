import { Student } from "../models/student";
import { BindingList } from "../BindingList";
import { BindingList2 } from "../BindingList2";
import { App } from "../app";

export class StudentListVm {

    constructor(){
        this.getStudents();
    }

  students: Student[] = [];

  getStudents = async () => {
    try {
        const res = await fetch(`${App.baseUri}/api/Student/GetStudents`);
        if (!res.ok) {
        }
        const data = await res.json();
        this.students = data.value;
        new BindingList2().bindCollection(this);   
    } catch (error) {

    }
  }

}
