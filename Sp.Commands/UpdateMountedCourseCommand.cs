using SP.Common;
using SP.Models;
using SP.Models.Dtos;
using SP.Models.Dtos.Request;
using SP.Services.Interfaces.Commands;
using SP.Services.Interfaces.Repository;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace SP.Commands
{
    public class UpdateMountedCourseCommand : IUpdateMountedCourseCommand
    {

        private readonly IUnitOfWork _uow;
        public UpdateMountedCourseCommand(IUnitOfWork uow)
        {
            _uow = uow;
        }
        public IResult Execute(IRequest request)
        {
            if (request is UpdateMountedCourseRequest NewmountedCourse)
            {
                ICollection<ValidationResult> results = new List<ValidationResult>();
                if (!NewmountedCourse.Validate(out results)) return new Result(false, results.First().ErrorMessage);

                //var UpdatemountedCourse = mountedcourse.

                var program = _uow.Programs.GetProgram(NewmountedCourse.ProgramId);
                var OldMountedCourse = program.MountedCourses.FirstOrDefault(x => x.MountedCoureId == NewmountedCourse.MountedCourseId);
                OldMountedCourse.AcademicYear = NewmountedCourse.AcademicYear;
                OldMountedCourse.EnrollmentOption = NewmountedCourse.EnrollmentOption;
                OldMountedCourse.ProgramId = NewmountedCourse.ProgramId;
                OldMountedCourse.AcademicYear = NewmountedCourse.CourseCode;
                OldMountedCourse.CourseCode = NewmountedCourse.CourseName;
                OldMountedCourse.Credit = NewmountedCourse.Credit;
                OldMountedCourse.Category = NewmountedCourse.Category;
                OldMountedCourse.AssignedBy = NewmountedCourse.AssignedBy;
                OldMountedCourse.AssignedTo = NewmountedCourse.AssignedTo;
                OldMountedCourse.Level = NewmountedCourse.Level;
                OldMountedCourse.Scoring = NewmountedCourse.Scoring;
                OldMountedCourse.Semester = NewmountedCourse.Semester;
                //OldMountedCourse.
                _uow.MountedCourses.UpdateMountedCourse(OldMountedCourse);
                _uow.SaveChanges();
                return new Result(true, Message.UpdatedSuccessfully(nameof(MountedCourse)));
            }
            return new Result(false, Message.OperationFailed);
        }
    }
}
