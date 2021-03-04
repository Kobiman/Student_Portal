using KMapper;
using SP.DAL.Models;
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
    public class CourseRepository : ICourseRepository
    {
        private Courses Collection;
        public CourseRepository(Courses collection)
        {
            Collection = collection;
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
            var result = Collection.Next.Find((x, y) => x.CourseId.Span[y] == courseId);
            return CreateCourse(result);
        }

        public Course GetCourseByName(string course)
        {
            var result = Collection.Next.Find((x, y) => x.CourseName.Span[y] == course);
            return CreateCourse(result);
        }
        public IEnumerable<Course> GetCourses()
        {
            return Collection.Next.Select((x, y) => CreateCourse(x, y));
        }
        public bool UpdateCourse(UpdateCourseRequest request)
        {
            var result = Collection.Next.Find((x, y) => x.CourseId.Span[y] == request.CourseId);
            if (!result.success) return false;
            var originalCourse = CreateCourse(result);
            request.Map(originalCourse);

            DataWriter.WriterData(originalCourse, nameof(Course));
            return true;
        }

        private Course CreateCourse(CourseDM Value, int Index)
        {
            return new Course
            {
                Code = Value.Code.Span[Index],
                CourseId = Value.CourseId.Span[Index],
                DepartmentId = Value.DepartmentId.Span[Index],
                CourseName = Value.CourseName.Span[Index],
                Credit = Value.Credit.Span[Index],
                State = Value.State.Span[Index],
            };
        }
        private Course CreateCourse((CourseDM Value, int Index, bool Success) result)
        {
            if (!result.Success) return null;
            return new Course { 
                Code = result.Value.Code.Span[result.Index],
                CourseId = result.Value.CourseId.Span[result.Index],
                DepartmentId = result.Value.DepartmentId.Span[result.Index],
                CourseName = result.Value.CourseName.Span[result.Index],
                Credit = result.Value.Credit.Span[result.Index],
                State = result.Value.State.Span[result.Index],
            };
        }
    }
}
