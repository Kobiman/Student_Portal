using KMapper;
using Microsoft.VisualBasic;
using SP.DAL.Models;
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
    public class StudentRepository : IStudentRepository
    {
        private Students Collection;
        public StudentRepository(Students collection)
        {
            Collection = collection;
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
            var result = Collection.Next.Find((x, y) => x.IndexNumber.Span[y] == student.IndexNumber);//.FirstOrDefault(x=>x.IndexNumber == student.IndexNumber);
            if (!result.success) return false;
            //student.Map(result.Value);
            var originalStudent = result.Value;

            originalStudent.Address1.Span[result.Index] = student.Address1;
            originalStudent.Address2.Span[result.Index] = student.Address2;
            originalStudent.Contact1.Span[result.Index] = student.Contact1;
            originalStudent.Contact2.Span[result.Index] = student.Contact2;
            originalStudent.Country.Span[result.Index] = student.Country;
            originalStudent.DateofBirth.Span[result.Index] = student.DateofBirth;
            //originalStudent.DateOfCompletion.Span[result.Index] = student.DateOfCompletion;
            originalStudent.DateOfEntry.Span[result.Index] = student.DateOfEntry;
            //originalStudent.DepartmentId.Span[result.Index] = student.DepartmentId;
            originalStudent.Disability.Span[result.Index] = student.Disability;
            //originalStudent.EmergencyContact.Span[result.Index] = student.EmergencyContact;
            //originalStudent.EnrollmentOption.Span[result.Index] = student.EnrollmentOption;
            originalStudent.Gender.Span[result.Index] = student.Gender;
            originalStudent.HomeTown.Span[result.Index] = student.HomeTown;
            originalStudent.IndexNumber.Span[result.Index] = student.IndexNumber;
            originalStudent.Level.Span[result.Index] = student.Level;
            originalStudent.MaritalStatus.Span[result.Index] = student.MaritalStatus;
            originalStudent.Othernames.Span[result.Index] = student.Othernames;
            originalStudent.PamentOption.Span[result.Index] = student.PamentOption;
            originalStudent.PersonalEmail.Span[result.Index] = student.PersonalEmail;
            originalStudent.ProgramOfStudy.Span[result.Index] = student.ProgramOfStudy;
            originalStudent.ProgramStatus.Span[result.Index] = student.ProgramStatus;
            originalStudent.ReferenceNumber.Span[result.Index] = student.ReferenceNumber;
            originalStudent.Region.Span[result.Index] = student.Region;
            //originalStudent.RegistrationStatus.Span[result.Index] = student.RegistrationStatus;
            originalStudent.ResidentialStatus.Span[result.Index] = student.ResidentialStatus;
            originalStudent.Specialization.Span[result.Index] = student.Specialization;
            originalStudent.State.Span[result.Index]++;
            originalStudent.StudentType.Span[result.Index] = student.StudentType;
            originalStudent.Surname.Span[result.Index] = student.Surname;
            originalStudent.Title.Span[result.Index] = student.Title;
            originalStudent.UniversityEmail.Span[result.Index] = student.UniversityEmail;
            DataWriter.WriterData(result.Value, nameof(Student));
            return true;
        }


        public bool UpdateStudents(IEnumerable<UpdateStudentRequest> students)
        {
            foreach (var student in students)
            {
                UpdateStudent(student);
            }
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
            var result = Collection.Next.Find((x, y) => x.IndexNumber.Span[y] == indexNumber);
            return CreateStudent(result);
        }

        public IEnumerable<Student> GetStudentsByLevel(string level)
        {
            return Collection.Next.Select((x, y) => x.Level.Span[y] == level, (x, y) =>
            {
                return CreateStudent(x, y);
            });
        }

        public IEnumerable<Student> GetStudents()
        {
            return Collection.Next.Select((x, y) => CreateStudent(x, y));
        }

        public bool IndexNumberExist(string indexNumber)
        {
            var result = Collection.Next.Find((x,y) => x.IndexNumber.Span[y] == indexNumber);
            if (!result.success) return false;
            return true;
        }

        public bool ReferenceNumberExist(string referenceNumber)
        {
            var result = Collection.Next.Find((x, y) => x.ReferenceNumber.Span[y] == referenceNumber);
            if (!result.success) return false;
            return true;
        }

        public IEnumerable<Student> GetStudentsByProgram(string program)
        {
            return Collection.Next.Select((x, y) => x.ProgramOfStudy.Span[y] == program, (x, y) =>
            {
                return CreateStudent(x, y);
            });
        }

        private static Student CreateStudent(StudentDM Value, int Index)
        {
            return new Student
            {
                Address1 = Value.Address1.Span[Index],
                Address2 = Value.Address2.Span[Index],
                Contact1 = Value.Contact1.Span[Index],
                Contact2 = Value.Contact2.Span[Index],
                Country = Value.Country.Span[Index],
                DateofBirth = Value.DateofBirth.Span[Index],
                DateOfCompletion = Value.DateOfCompletion.Span[Index],
                DateOfEntry = Value.DateOfEntry.Span[Index],
                DepartmentId = Value.DepartmentId.Span[Index],
                Disability = Value.Disability.Span[Index],
                //EmergencyContact.Span[result.Index] = student.EmergencyContact;
                EnrollmentOption = Value.EnrollmentOption.Span[Index],
                Gender = Value.Gender.Span[Index],
                HomeTown = Value.HomeTown.Span[Index],
                IndexNumber = Value.IndexNumber.Span[Index],
                Level = Value.Level.Span[Index],
                MaritalStatus = Value.MaritalStatus.Span[Index],
                Othernames = Value.Othernames.Span[Index],
                PamentOption = Value.PamentOption.Span[Index],
                PersonalEmail = Value.PersonalEmail.Span[Index],
                ProgramOfStudy = Value.ProgramOfStudy.Span[Index],
                ProgramStatus = Value.ProgramStatus.Span[Index],
                ReferenceNumber = Value.ReferenceNumber.Span[Index],
                Region = Value.Region.Span[Index],
                RegistrationStatus = Value.RegistrationStatus.Span[Index],
                ResidentialStatus = Value.ResidentialStatus.Span[Index],
                Specialization = Value.Specialization.Span[Index],
                State = Value.State.Span[Index],
                StudentType = Value.StudentType.Span[Index],
                Surname = Value.Surname.Span[Index],
                Title = Value.Title.Span[Index],
                UniversityEmail = Value.UniversityEmail.Span[Index]
            };
        }

        private static Student CreateStudent((StudentDM Value, int Index, bool Success) result)
        {
            if (!result.Success) return null;
            return CreateStudent(result.Value, result.Index);
        }
    }
}
