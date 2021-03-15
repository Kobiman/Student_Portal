import { BindingList2 } from "../BindingList2";
import { ViewModelHelper } from "../viewModelHelper";
import { CommonService } from "../services/commonService";
import { BallLoader } from "../loader/ballLoader";
import { _ } from "../group";
import { App } from "../app";

export class StudentResultsVm {
  viewModelHelper: ViewModelHelper;

  constructor(private commonService: CommonService) {
    this.viewModelHelper = new ViewModelHelper();
    this.getLookups();
    this.getPrograms();
    this.request = {};
    this.getStudentResults();
  }
  results: any[];
  request: any;
  lookups: any[] = [];
  academicYears: any[] = [];
  semesters: any[] = [];
  programs: any[] = [];
  levels: any[] = [];
  filter: any = {};
  querys: any = [];
  courseCode: any[];
  courseTittle: any[];
  credit: any[];
  total: any[];
  grade: any[];


  getStudentResults = async () => {
    try {
        BallLoader.show();
        const res = await fetch(`${App.baseUri}/api/Student/GetStudents`);
        if (!res.ok) {
        }
        const data = await res.json();
        this.results = data.value;
        new BindingList2().bindCollection(this);   
    } catch (error) {

    }
  }
      
      
  getPrograms = () => {
    this.programs = this.commonService.programs;
  };

  getLookups = () => {
    this.academicYears = this.commonService.lookups.filter((x) => x.type === "ACADEMIC YEAR");
    // this.semesters.unshift({ name: "Please Select Academic Year" });

    this.semesters = this.commonService.lookups.filter((x) => x.type === "SEMESTER");
    // this.semesters.unshift({ name: "Please Select Semester" });

    this.levels = this.commonService.lookups.filter((x) => x.type === "LEVEL");
    // this.levels.unshift({ name: "Please Select Level" });
  };

 
  // bind() {
  //   this.request = this.viewModelHelper.addPropertyChangeNotification(this.request);
  // }

  // bindList(id: string) {
  //   new BindingList2().bind(this, id);
  // }

  

  // IsEqualTo(source, propertyName, parameter) {
  //   return source[propertyName] === parameter;
  // }

  // buidQuery(propertyName, parameter) {
  //   var item = this.querys.find((x) => x.propertyName === propertyName);
  //   if (item != null) {
  //     var index = this.querys.indexOf(item);
  //     this.querys.splice(index, 1);
  //   }
  //   if (parameter != "") {
  //     this.querys.push({ propertyName: propertyName, parameter: parameter });
  //   }
  // }

  // executeQuery(source, querys) {
  //   var result = true;
  //   for (var query of querys) {
  //     result = result && this.IsEqualTo(source, query.propertyName, query.parameter);
  //   }
  //   return result;
  // }
}
