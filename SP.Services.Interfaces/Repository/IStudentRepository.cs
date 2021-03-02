using SP.Models;
using SP.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.Services.Interfaces.Repository
{
    public interface IStudentRepository //: IRepository<Student>
    {
        bool AddStudent(AddStudentRequest student);
        bool AddStudents(IEnumerable<Student> students);
        bool IndexNumberExist(string indexNumber);
        bool ReferenceNumberExist(string referenceNumber);
        Student GetStudent(string indexNumber);
        IEnumerable<Student> GetStudents();
        IEnumerable<Student> GetStudentsByLevel(string level);
        bool UpdateStudent(UpdateStudentRequest student);
        bool UpdateStudents(IEnumerable<UpdateStudentRequest> students);
        IEnumerable<Student> GetStudentsByProgram(string program);
    }
}
