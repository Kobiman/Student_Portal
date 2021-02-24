using SP.DAL.Repository;
using SP.Models;
using SP.Services.Interfaces;
using SP.Services.Interfaces.Repository;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        private IStudentRepository _students;
        private IMountedCourseRepository _mountedcourses;
        private IInstitutionRepository _institutions;
        private IRegisteredCourseRepository _registeredcourses;
        private ISchoolRepository _schools;
        private IDepartmentRepository _departments;
        private IProgramRepository _programs;
        private ICourseRepository _courses;
        private ILookupRepository _lookups;
        private ILecturerRepository _lecturers;
        private IExamResultsRepository _uploadExamResults;

        public IStudentRepository Students => _students ??
                (_students = new StudentRepository(LoadStudents()));


        public IExamResultsRepository ExamResults => _uploadExamResults ??
            (_uploadExamResults = new ExamResultsRepository(LoadUploadExamResults()));
        
        public IMountedCourseRepository MountedCourses => _mountedcourses ??
                (_mountedcourses = new MountedCourseRepository(LoadMountedCourses()));

        public IMountedCourseRepository MountedCoures => _mountedcourses??
                (_mountedcourses = new MountedCourseRepository(DataReader
                 .ReadData<MountedCourse>(nameof(MountedCourse))));
        //public IRegisteredCourseRepository _RegisteredCourses => _registeredcourses ??
        //        (_registeredcourses = new RegisteredCourseRepository(LoadRegisteredCourses()));
        public IRegisteredCourseRepository RegisteredCourses => _registeredcourses ??
                (_registeredcourses = new RegisteredCourseRepository(DataReader
                 .ReadData<RegisteredCourse>(nameof(RegisteredCourse))));

        public IInstitutionRepository Institutions => _institutions ?? 
               (_institutions = new InstitutionRepository(DataReader
                .ReadData<Institution>(nameof(Institution))));

        public ISchoolRepository Schools => _schools ?? 
               (_schools = new SchoolRepository(DataReader
                .ReadData<School>(nameof(School))));

        public IDepartmentRepository Departments => _departments ?? 
               (_departments = new DepartmentRepository(DataReader
                .ReadData<Department>(nameof(Department))));

        public IProgramRepository Programs => _programs ?? 
            (_programs = new ProgramRepository(LoadPrograms()));

        public ICourseRepository Courses => _courses ??
           (_courses = new CourseRepository(DataReader
               .ReadData<Course>(nameof(Course))));

        public ILookupRepository Lookups => _lookups ??
           (_lookups = new LookupRepository(DataReader
               .ReadData<Lookup>(nameof(Lookup)))); 

         public ILecturerRepository Lecturers => _lecturers ??
           (_lecturers = new LecturerRepository(DataReader
               .ReadData<Lecturer>(nameof(Lecturer))));

        private ConcurrentBag<Student> LoadStudents()
        {
            var registeredCourses = DataReader
                .ReadData<RegisteredCourse>(nameof(RegisteredCourse));

            var students = DataReader
                .ReadData<Student>(nameof(Student));

            foreach (var student in students)
            {
                student.RegisterCourses(registeredCourses.Where(x => x.StudentId == student.StudentId));
            }
            return students;
        }


        private ConcurrentBag<StudentResult> LoadUploadExamResults()
        {
            return
                 DataReader
                .ReadData<StudentResult>(nameof(StudentResult));
        }


        private ConcurrentBag<MountedCourse> LoadMountedCourses()
        {
            return
                 DataReader
                .ReadData<MountedCourse>(nameof(MountedCourse));
        }

        private ConcurrentBag<RegisteredCourse> LoadRegisteredCourses()
        {
            return
                 DataReader
                .ReadData<RegisteredCourse>(nameof(RegisteredCourse));
        }

        private ConcurrentBag<Program> LoadPrograms()
        {
            var programs =
                 DataReader
                .ReadData<Program>(nameof(Program));
            var mountedCourses =
                DataReader
                .ReadData<MountedCourse>(nameof(MountedCourse));
            foreach(var program in programs)
            {
                program.MountCourses(mountedCourses.Where(x => x.ProgramId == program.ProgramId));
            }

            return programs;
        }

        public void SaveChanges()
        {
            
        }

    }
}
