import { Student } from "../models/student";
import { App } from "../app";

export class CommonService {
  lookups: any[] = [];
  lecturers: any[] = [];
  departments: any[] = [];
  programs: any[] = [];
  student: Student;

  constructor() {
    this.getLookups();
    this.getLecturers();
    this.getPrograms();
    this.getDepartmentsWithCourses();
  }

  getLookups = async () => {
    try {
      const res = await fetch(`${App.baseUri}/api/Lookup/GetLookups`);
      if (!res.ok) {
      } else {
        const data = await res.json();
        this.lookups = data.value;
      }
    } catch (error) {}
  };

  getLecturers = async () => {
    try {
      const res = await fetch(`${App.baseUri}/api/Lecturer/GetLecturers`);
      if (!res.ok) {
      }
      const data = await res.json();
      this.lecturers = data.value;
    } catch (error) {}
  };

  getDepartmentsWithCourses = async () => {
    try {
      const res = await fetch(`${App.baseUri}/api/Department/GetDepartmentsWithCourses`);
      if (!res.ok) {
      }
      const data = await res.json();
      this.departments = data.value;
    } catch (error) {}
  };

  getPrograms = async () => {
    try {
      const res = await fetch(`${App.baseUri}/api/Program/GetPrograms`);
      if (!res.ok) {
      }
      const data = await res.json();
      this.programs = data.value;
    } catch (error) {}
  };
}
