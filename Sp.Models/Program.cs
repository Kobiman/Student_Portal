﻿using SP.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SP.Models
{
    public class Program
    {
        public Program()
        {
            ProgramId = ProgramId ?? Guid.NewGuid().ToString();
        }
        public string ProgramId { get; set; }  
        public string Name { get; set; }
        //public string Code { get; set; }
        public string Duration { get; set; }
        public int Limit { get; set; }
        public string DepartmentId { get; set; }
        public IList<MountedCourse> MountedCourses { get; } = new List<MountedCourse>();
        public IList<Specialization> Specializations { get; set; } = new List<Specialization>();

        public void MountCourses(IEnumerable<MountedCourse> mountedCoures)
        {
            foreach (var mountedCoure in mountedCoures)
            {
                MountedCourses.Add(mountedCoure);
            }
        }

        public IEnumerable<GetMountedCoursesResponse> GetMountedCourses(string academicYear)
        {
            return MountedCourses.Where(x => x.AcademicYear == academicYear)
                                       .Select(x => new GetMountedCoursesResponse
                                       {
                                           AcademicYear = x.AcademicYear,
                                           AssignedBy = x.AssignedBy,
                                           EnrollmentOption = x.EnrollmentOption,
                                           Level = x.Level,
                                           ProgramOfStudy = Name,
                                           Semester = x.Semester,
                                           CourseName = x.CourseName,
                                           CourseCode = x.CourseCode,
                                           Category = x.Category,
                                           Credit = x.Credit,
                                           AssignedTo = x.AssignedTo,
                                           Scoring = x.Scoring
                                           //MountedCourses = x.MountedCourses
                                       }).ToList();
        }

        public IEnumerable<GetMountedCoursesResponse> GetMountedCourses(string academicYear, string semester, string level)
        {
            return MountedCourses.Where(x => x.AcademicYear == academicYear && x.Semester == semester && x.Level == level)
                                       .Select(x => new GetMountedCoursesResponse
                                       {
                                           AcademicYear = x.AcademicYear,
                                           AssignedBy = x.AssignedBy,
                                           EnrollmentOption = x.EnrollmentOption,
                                           Level = x.Level,
                                           ProgramOfStudy = Name,
                                           Semester = x.Semester,
                                           CourseName = x.CourseName,
                                           CourseCode = x.CourseCode,
                                           Category = x.Category,
                                           Credit = x.Credit,
                                           AssignedTo = x.AssignedTo,
                                           Scoring = x.Scoring,
                                           MountedCoureId = x.MountedCoureId
                                           //MountedCourses = x.MountedCourses
                                       }).ToList();
        }

        public MountedCourse GetMountedCourse(string mountedCourseId)
        {
            return MountedCourses.FirstOrDefault(x => x.MountedCoureId == mountedCourseId);
        }


        /// <summary>
        /// Edit a program
        /// </summary>
        /// <returns></returns>
        public Program Edit(Program program)
        {
            DepartmentId = program.DepartmentId;
            Name = program.Name;
            return this;
        }
    }
}