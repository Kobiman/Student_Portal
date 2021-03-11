using NUnit.Framework;
using Shouldly;
using SP.Models;
using SP.Models.Dtos;
using SP.Services.Interfaces;
using SP.Services.Interfaces.Commands;
using SP.TestInfrastructure;
using SP.TestInfrastructure.RegisteredCoursesCommandTests;
using SP.TestInfrastructure.StudentServiceTest;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.IntegrationTest.RegisteredCourseTests
{
    public class ApproveRegisteredCoursesTest : IDisposable
    {
        private IGetRegisteredCoursesCommand _getRegisteredCoursesCommand;
        private IAddRegisteredCoursesCommand _addRegisteredCoureCommand;
        private IStudentService _studentService;
        private IProgramService _programService;

        [SetUp]
        public void Setup()
        {
            TestBootStrapper.Setup();
            _getRegisteredCoursesCommand = TestBootStrapper.Resolve<IGetRegisteredCoursesCommand>();
            _addRegisteredCoureCommand = TestBootStrapper.Resolve<IAddRegisteredCoursesCommand>();
            _studentService = TestBootStrapper.Resolve<IStudentService>();
            _programService = TestBootStrapper.Resolve<IProgramService>();
        }

        [Test]
        public void ApproveRegisteredCoursesCommand_With_Approved_Set_To_True_Should_Return_True()
        {
            //Arrange
            var student = StudentServiceData.GetStudent();
            var getRegisteredCourseRequest = new GetRegisteredCoursesRequest { IndexNumber = "12345f", AcademicYear = "2020/21", Semester = "1" };
            var registerCourseRequest = new AddRegisteredCoursesRequest(RegisteredCourseCommandData.GetRegisteredCourseRequests());

            //Act
            _programService.AddProgram(new AddProgramRequest { DepartmentId = "xdssd", Name = "BSc. Computer Science" });
            _studentService.AddStudent(student);            

            _addRegisteredCoureCommand.Execute(registerCourseRequest);
            //TODO
            //Approve Registration
            // _approveregisteredCoureCommand.Execute(approveregisteredCourseRequest);
            //Get Registered Courses
            //var registeredCourses = _registeredCoursesCoureCommand.Execute(registeredCoursesRequest);

            //Pick the first element
            //registeredCourses[0].Approved.ShouldBeTrue()


            Result result = _getRegisteredCoursesCommand.Execute(getRegisteredCourseRequest) as Result;
            var ApprovalStatus = new RegisteredCourseDto();
            //Assert
            //Assert.AreEqual(registeredCourse.Approved, ApprovalStatus.Approved);
            result.IsSucessful.ShouldBeTrue();

        }
        public void Dispose()
        {
            TestBootStrapper.Dispose();
        }
    }
}
