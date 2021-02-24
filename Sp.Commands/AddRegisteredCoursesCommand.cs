using SP.Common;
using SP.Models;
using SP.Models.Dtos;
using SP.Services.Interfaces.Commands;
using SP.Services.Interfaces.Repository;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using KMapper;

namespace SP.Commands
{
    public class AddRegisteredCoursesCommand : IAddRegisteredCoursesCommand
    {
        private readonly IUnitOfWork _uow;
        public AddRegisteredCoursesCommand(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public IResult Execute(IRequest request)
        {
            if (request is AddRegisteredCoursesRequest addRegisteredCourse)
            {
                foreach(var course in addRegisteredCourse.RegisteredCourses)
                {
                    ICollection<ValidationResult> results = new List<ValidationResult>();
                    if (!course.Validate(out results)) return new Result(false, results.First().ErrorMessage);
                }

                var courses = addRegisteredCourse
                             .RegisteredCourses
                             .Select(x=>x.Map<RegisteredCourse, RegisteredCourseDto>())
                             .ToList();

                _uow.Students
                    .GetStudent(courses.First().StudentId)
                    .RegisterCourses(courses);

                _uow.RegisteredCourses.AddRegisteredCourses(courses);
                _uow.SaveChanges();
                return new Result(true, "Course(s) Registered Successfully");
            }
            return new Result(true, "");
        }
    }
}
