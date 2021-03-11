using SP.Models.Dtos;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;

namespace SP.Models
{
    public class Student
    {
        public Student()
        {
            StudentId = StudentId ?? Guid.NewGuid().ToString();
            RegisteredCourses = new List<RegisteredCourse>();
        }

        //Personal Details
        public string StudentId { get; set; }
        public string IndexNumber { get; set; }
        public string ReferenceNumber { get; set; }
        public string Surname { get; set; }
        public string Othernames { get; set; }
        public string Title { get; set; }
        public string Gender { get; set; }
        public string MaritalStatus { get; set; }
        public string DateofBirth { get; set; }
        public bool Disability { get; set; }

        //Contact Details
        public string Country { get; set; }
        public string Region { get; set; }
        public string HomeTown { get; set; }
        public string Address1 { get; set; }

        public string Address2 { get; set; }
        public string Contact1 { get; set; }
        public string Contact2 { get; set; }
        public string PersonalEmail { get; set; }
        public string UniversityEmail { get; set; }
        public string ResidentialStatus { get; set; }

        //Academics
        public string ProgramId { get; set; }
        public string Specialization { get; set; }
        public string ProgramStatus { get; set; }
        public string Level { get; set; }
        public string StudentType { get; set; }
        public string EnrollmentOption { get; set; }
        public string RegistrationStatus { get; set; }
        public DateTime DateOfEntry { get; set; }
        public DateTime DateOfCompletion { get; set; }
        public IList<StudentResult> Results { get; set; }
        public IList<RegisteredCourse> RegisteredCourses { get; set; }




        //EmergencyContact
        public IList<EmergencyContact> EmergencyContact { get; set; }

        


        //Finance
        //public bool Owning { get; set; }
        //public string FeesBalance { get; set; }
        public string PamentOption { get; set; }


        public string DepartmentId { get; set; }
        public int State { get; set; }


        public void RegisterCourse(RegisteredCourse registeredcourse)
        {
            RegisteredCourses.Add(registeredcourse);
        }

        public void RegisterCourses(IEnumerable<RegisteredCourse> registeredcourses)
        {
            foreach (var registeredcourse in registeredcourses)
            {
                RegisteredCourses.Add(registeredcourse);
            }
        }

        public void AddEmergencyContact(IEnumerable<EmergencyContact> emergencyContacts)
        {
            foreach (var contact in emergencyContacts)
            {
                EmergencyContact.Add(contact);
            }
        }

        public void AddResults(IEnumerable<StudentResult> results)
        {
            foreach (var result in results)
            {
                Results.Add(result);
            }
        }

        public IEnumerable<GetRegisteredCoursesDto> GetRegisteredCourses(string academicYear, string semester)
        {
           return RegisteredCourses.Where(x => x.AcademicYear == academicYear && x.Semester == semester)
                             .Select(x=> new GetRegisteredCoursesDto
                             { 
                                 RegistrationDate = x.RegistrationDate,
                                 AcademicYear = x.AcademicYear,
                                 Approved = x.Approved,                                
                                 Semester = x.Semester,
                                 Level = Level,
                                 StudentId = x.StudentId,
                                 ProgramOfStudy = ProgramId,
                                 StudentName = $"{Surname} {Othernames}",
                                 MountedCourseId = x.MountedCourseId
                             })
                             .ToList();
        }

        public GetExamResultsResponse GetResults(string academicYear, string level, string program)
        {
            var studentResults = Results.Where(x => x.AcademicYear == academicYear && x.Level == level).Select(x => new ExamResultsDto
            {
                AcademicYear = academicYear,
                Level = x.Level,
                Semster = x.Semester,
                //CourseCode = x.CourseCode,
                //CourseName = x.CourseName,
                Credit = x.Credit,
                ClassMark = x.ClassMark,
                ExamMark = x.ExamMark,
                TotalMark = x.TotalMark,
                Grade = x.Grade,
                GradePoint = x.GradePoint,
                Lecturer = x.LecturerId,
            }).ToList();
            return
                 
                new GetExamResultsResponse(
                    academicYear, $"{Surname} {Othernames}",
                    program,
                   studentResults.Where(x => x.Scoring == true).Sum(x=>x.Credit),
                   studentResults.Where(x => x.Scoring == true).Sum(x=> x.Credit * x.GradePoint),
                   studentResults.Where(x => x.AcademicYear == academicYear && x.Level == level).ToList()
                );
        }

        public IEnumerable<ExamResultsDto> GetResult(Dictionary<string, MountedCourse> mountedCourses)
        {
            var registeredCourses = RegisteredCourses.ToDictionary(x => x.RegisteredCourseId, x => x);
            return from result in Results
                    let registeredCourse = registeredCourses[result.RegisteredCourseId]
                    let mountedCourse = mountedCourses[registeredCourse.MountedCourseId]
                    select new ExamResultsDto
                    {
                        AcademicYear = result.AcademicYear,
                        CourseName = mountedCourse.CourseName,
                        CourseCode = mountedCourse.CourseCode,
                        ClassMark = result.ClassMark,
                        Credit = result.Credit,
                        ExamMark = result.ExamMark,
                        Grade = result.Grade,
                        GradePoint = result.GradePoint,
                        Level = result.Level,
                        Scoring = result.Scoring,
                        Semster = result.Semester,
                        TotalMark = result.TotalMark
                    };
            
        }

        public string ProgramOfStudy(Program program) => program.Name;
        //public IEnumerable<ExamResult> CheckResult()
        //{

        //}
    }
}
