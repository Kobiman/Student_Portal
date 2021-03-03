using SP.Models;
using SP.Models.Dtos;
using SP.Models.Dtos.Request;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.Services.Interfaces.Repository
{
    public interface IMountedCourseRepository//: IRepository<MountedCourse>
    {
        bool MountCourse(AddMountedCourseRequest request);
        bool AddMountedCourses(IEnumerable<MountedCourse> mountedcourses);
        bool UpdateMountedCourse(MountedCourse mountedCourse);
        //bool RemoveMountCourse(RemoveMountedCourseRequest request);
    }
}
