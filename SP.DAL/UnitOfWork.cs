using SP.DAL.Models;
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
        private IInstitutionRepository _institutions;
        private ISchoolRepository _schools;
        private IDepartmentRepository _departments;
        private IProgramRepository _programs;
        private ICourseRepository _courses;
        private ILookupRepository _lookups;
        private ILecturerRepository _lecturers;

        public IStudentRepository Students => _students ??= new StudentRepository(LoadStudents());

        public IInstitutionRepository Institutions => _institutions ??= new InstitutionRepository(DataReader.ReadData<Institution>(nameof(Institution)));

        public ISchoolRepository Schools => _schools ??= new SchoolRepository(DataReader.ReadData<School>(nameof(School)));

        public IDepartmentRepository Departments => _departments ??= new DepartmentRepository(DataReader.ReadData<Department>(nameof(Department)));

        public IProgramRepository Programs => _programs ??= new ProgramRepository(LoadPrograms());

        public ICourseRepository Courses => _courses ??= new CourseRepository(LoadCourses());

        public ILookupRepository Lookups => _lookups ??= new LookupRepository(DataReader.ReadData<Lookup>(nameof(Lookup))); 

         public ILecturerRepository Lecturers => _lecturers ??= new LecturerRepository(LoadLectures());

        private Students LoadStudents()
        {
            var registeredCourses = DataReader
                .ReadData<RegisteredCourse>(nameof(RegisteredCourse));

            var studentResults = DataReader
                .ReadData<StudentResult>(nameof(StudentResult));

            var emergencyContact = DataReader
                .ReadData<EmergencyContact>(nameof(EmergencyContact));

            var studentsList = DataReader
                .ReadData<Student>(nameof(Student))
                .Distinct(x => x.StudentId, x => x.State).ToList();

            var students = new Students(100);
            foreach (var student in studentsList)
            {
                student.RegisterCourses(registeredCourses.Where(x => x.StudentId == student.StudentId));
                student.AddResults(studentResults.Where(x => x.StudentId == student.StudentId));
                student.AddEmergencyContact(emergencyContact.Where(x => x.StudentId == student.StudentId));
                students.Add(student);
            }
            return students;
        }

        private Programs LoadPrograms()
        {
            var _programs =
                 DataReader.ReadData<Program>(nameof(Program));
            var mountedCourses =
                DataReader.ReadData<MountedCourse>(nameof(MountedCourse));
            var specialization =
                DataReader.ReadData<Specialization>(nameof(Specialization));
            var programs = new Programs(10);
            foreach (var program in _programs)
            {
                program.MountCourses(mountedCourses.Where(x => x.ProgramId == program.ProgramId));
                program.AddSpecializations(specialization);
                programs.Add(program);
            }
            return programs;
        }

        private Courses LoadCourses()
        {
            var _courses = DataReader.ReadData<Course>(nameof(Course))
               .Distinct(x => x.CourseId, x => x.State).ToList();
            var courses = new Courses(5);
            foreach(var c in _courses)
            {
                courses.Add(c);
            }
            return courses;
        }

        private Lecturers LoadLectures()
        {
            var _lecturers = DataReader.ReadData<Lecturer>(nameof(Lecturer))
               .Distinct(x => x.LecturerId, x => x.State).ToList();
            var lecturers = new Lecturers(5);
            foreach (var c in _lecturers)
            {
                lecturers.Add(c);
            }
            return lecturers;
        }

        public void SaveChanges<T>(T data, string table)
        {
            DataWriter.WriterData(data, table);
        }

        public void SaveChanges()
        {
        }

    }
}
