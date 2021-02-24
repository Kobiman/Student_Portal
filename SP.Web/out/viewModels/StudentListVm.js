var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BindingList2 } from "../BindingList2";
export class StudentListVm {
    constructor() {
        this.students = [];
        this.getStudents = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch('https://localhost:44359/api/Student/GetStudents');
                if (!res.ok) {
                }
                const data = yield res.json();
                this.students = data.value;
                new BindingList2().bindCollection(this);
            }
            catch (error) {
            }
        });
        this.getStudents();
    }
}
//# sourceMappingURL=StudentListVm.js.map