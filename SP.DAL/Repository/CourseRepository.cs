using KMapper;
using SP.Models;
using SP.Models.Dtos;
using SP.Services.Interfaces.Repository;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.DAL.Repository
{
    public class CourseRepository : Repository<Course>, ICourseRepository
    {
        public CourseRepository(ConcurrentBag<Course> collection) : base(collection)
        {
        }
        public bool AddCourse(AddCourseRequest request)
        {
            var course = request.Map<Course, AddCourseRequest>();
            Collection.Add(course);
            DataWriter.WriterData(course, nameof(Course));
            return true;
        }
        public Course GetCourse(string courseId)
        {
            return Collection.FirstOrDefault(x => x.CourseId == courseId);
        }
        public Course GetCourseByName(string course)
        {
            return Collection.FirstOrDefault(x => x.CourseName == course);
        }
        public IEnumerable<Course> GetCourses()
        {
            return Collection.ToList();
        }
        public bool UpdateCourse(UpdateCourseRequest request)
        {
            var originalCourse = Collection.FirstOrDefault(x => x.CourseId == request.CourseId);
            if (originalCourse == null) return false;
            request.Map(originalCourse);

            DataWriter.WriterData(originalCourse, nameof(Course));
            return true;
        }
    }
}
