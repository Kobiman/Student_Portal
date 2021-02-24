using KMapper;
using Microsoft.VisualBasic;
using SP.Models;
using SP.Models.Dtos;
using SP.Services.Interfaces.Repository;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.DAL.Repository
{
    public class StudentRepository : Repository<Student>, IStudentRepository
    {
        public StudentRepository(ConcurrentBag<Student> collection) : base(collection)
        {
        }

        public bool AddStudent(AddStudentRequest request)
        {
            var student = request.Map<Student, AddStudentRequest>();
            Collection.Add(student);
            DataWriter.WriterData(student, nameof(Student));
            return true;
        }

        public bool UpdateStudent(UpdateStudentRequest student)
        {
            var originalStudent = Collection.FirstOrDefault(x=>x.IndexNumber == student.IndexNumber);
            if (originalStudent == null) return false;
            student.Map(originalStudent);

            DataWriter.WriterData(originalStudent, nameof(Student));
            return true;
        }


        public bool UpdateStudents(IEnumerable<UpdateStudentRequest> students)
        {
            foreach (var student in students)
            {
                foreach (var originalStudent in Collection)
                {
                    if (student.IndexNumber == originalStudent.IndexNumber)
                    {
                        student.Map(originalStudent);
                    }
                }
            }

            //DataWriter.WriterData(originalStudent, nameof(Student));
            return true;
        }

        public bool AddStudents(IEnumerable<Student> students) 
        {
            foreach (var student in students) 
            {
                Collection.Add(student);
            }
            DataWriter.WriterData(students, nameof(Student));
            return true;
        }

        public Student GetStudent(string indexNumber)
        {
            return Collection.FirstOrDefault(x=>x.IndexNumber== indexNumber);   
        }

        public IEnumerable<Student> GetStudentsByLevel(string level)
        {
            return Collection.Where(x => x.Level == level);
        }

        public bool IndexNumberExist(string indexNumber)
        {
            var result = Collection.FirstOrDefault(x=>x.IndexNumber == indexNumber);
            if (result == null) return false;
            return true;
        }

        public bool ReferenceNumberExist(string referenceNumber)
        {
            var result = Collection.FirstOrDefault(x => x.ReferenceNumber == referenceNumber);
            if (result == null) return false;
            return true;
        }

        public IEnumerable<Student> GetStudentsByProgram(string program)
        {
            return Collection.Where(x => x.ProgramOfStudy == program).ToList();
        }
    }
}
