using KMapper;
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
    public class GetMountedCoursesCommand : IGetMountedCoursesCommand
    {
        private readonly IUnitOfWork _uow;
        public GetMountedCoursesCommand(IUnitOfWork uow)
        {
            _uow = uow;
        }

       

        public IResult Execute(IRequest request)
        {
            if (request is GetMountedCoursesRequest mountedcourse)
            {
                var mountedCourses = _uow.Programs
                                    ?.GetprogramByName(mountedcourse.Program)
                                    ?.GetMountedCourses(mountedcourse.AcademicYear);  

                if(mountedCourses == null) return new Result(false, Message.NotFound(nameof(MountedCourse)));

                return new Result<IEnumerable<GetMountedCoursesResponse>>(true, mountedCourses, Message.OperationCompletedSuccesfully);
            }

            return new Result(false, Message.OperationFailed);
        }
    }
}
