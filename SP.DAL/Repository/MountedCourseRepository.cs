using KMapper;
using SP.Models;
using SP.Models.Dtos;
using SP.Models.Dtos.Request;
using SP.Services.Interfaces.Repository;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;

namespace SP.DAL.Repository
{
    public class MountedCourseRepository : Repository<MountedCourse>, IMountedCourseRepository
    {
        public MountedCourseRepository(ConcurrentBag<MountedCourse> collection) : base(collection)
        {
        }
        public bool MountCourse (AddMountedCourseRequest request)
        {
            var mountedCoure = request.Map<MountedCourse, AddMountedCourseRequest>();
            Collection.Add(mountedCoure);
            DataWriter.WriterData(mountedCoure, nameof(MountedCourse));
            return true;
        }


        public bool AddMountedCourses(IEnumerable<MountedCourse> mountedcourses)
        {
            DataWriter.WriterData(mountedcourses, nameof(MountedCourse));
            return true;
        }

        public bool RemoveMountedCourse(RemoveMountedCoursesRequest request)
        {
            DataWriter.WriterData(request, nameof(MountedCourse));
            return true;
        }

        public bool UpdateMountedCourse(MountedCourse mountedCourse)
        {
            DataWriter.WriterData(mountedCourse, nameof(MountedCourse));
            return true;
        }
    }
}
