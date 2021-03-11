using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NUnit.Framework;
using Shouldly;
using SP.Models;
using SP.Models.Dtos;
using SP.Services.Interfaces;
using SP.Services.Interfaces.Commands;
using SP.TestInfrastructure;
using SP.TestInfrastructure.RegisteredCourseCommandTests;
using SP.TestInfrastructure.RegisteredCoursesCommandTests;
using SP.TestInfrastructure.StudentServiceTest;

namespace SP.IntegrationTest.RegisteredCourseTests
{
    public class RegisterCoursesTests : IDisposable
    {
        private IAddRegisteredCoursesCommand _registeredcoursecommand;
        private IStudentService _studentService;
        private IProgramService _programService;


        [SetUp]
        public void Setup()
        {
            TestBootStrapper.Setup();
            _registeredcoursecommand = TestBootStrapper.Resolve<IAddRegisteredCoursesCommand>();
            _studentService = TestBootStrapper.Resolve<IStudentService>();
            _programService = TestBootStrapper.Resolve<IProgramService>();
        }

        [Test]
        public void RegisteredCourseCommand_With_Valid_Credential_Should_Return_True()
        {
            var studentRequest = StudentServiceData.GetStudent();
            var registeredCourses = RegisteredCourseCommandData.GetRegisteredCourseRequests();
            var request = new AddRegisteredCoursesRequest(registeredCourses);

            _programService.AddProgram(new AddProgramRequest { DepartmentId = "xdssd", Name = "BSc. Computer Science" });
            _studentService.AddStudent(studentRequest);

            foreach (var registeredCourse in request.RegisteredCourses)
            {
                registeredCourse.IndexNumber = studentRequest.IndexNumber;
            }

            var result = _registeredcoursecommand.Execute(request);
            Result<Student> result2 = _studentService.GetStudent(studentRequest.IndexNumber) as Result<Student>;
            result.IsSucessful.ShouldBe(true);
            result2.Value.RegisteredCourses.Count().ShouldBe(registeredCourses.Count());
        }

        [Test]
        public void RegisteredCourseCommand_With_Invalid_Credential_Should_Return_False()
        {
            var studentRequest = StudentServiceData.GetStudent();
            var registeredCourses = RegisteredCourseCommandWithInvalidData.GetRegisteredCourseRequests();

            _programService.AddProgram(new AddProgramRequest { DepartmentId = "xdssd", Name = "BSc. Computer Science" });
            _studentService.AddStudent(studentRequest);
            var request = new AddRegisteredCoursesRequest(registeredCourses);

            var result = _registeredcoursecommand.Execute(request);

            result.IsSucessful.ShouldBe(false);
        }
        public void Dispose()
        {
            TestBootStrapper.Dispose();
        }
    }
}
