using SP.Common;
using SP.Models;
using SP.Models.Dtos;
using SP.Services.Interfaces.Commands;
using SP.Services.Interfaces.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.Commands
{
    public class ApproveRegistrationCommand : IApproveRegistrationCommand
    {
        private readonly IUnitOfWork _uow;
        public ApproveRegistrationCommand(IUnitOfWork uow)
        {
            _uow = uow;
        }
        public IResult Execute(IRequest request)
        {
            if (request is ApproveRegisteredCoursesRequest approveRegisteredCoursesRequest)
            {
                foreach (var c in approveRegisteredCoursesRequest.ApproveRegisteredCourses)
                {
                    var student = _uow.Students.GetStudent(c.IndexNumber);
                   foreach(var course in c.ApproveCourses)
                    {
                        student.RegisteredCourses.FirstOrDefault(x => x.RegisteredCourseId == course.RegisteredCourseId).Approved = course.Approved;
                    }
                }

                _uow.SaveChanges(approveRegisteredCoursesRequest.ApproveRegisteredCourses,nameof(RegisteredCourse));
            }

            return new Result(false, Message.OperationFailed);
        }
    }
}
