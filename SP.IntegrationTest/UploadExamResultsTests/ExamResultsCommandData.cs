using SP.Commands;
using SP.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.IntegrationTest.UploadExamResultsTests
{
    public class ExamResultsCommandData
    {

        public static IEnumerable<StudentResult> GetExamResultsRequest()
        {

            return new List<StudentResult>
            {
              new StudentResult
              {
                StudentId = "UE20027814",
                AcademicYear = "2019/2020",
                Semester = "1",
                RegisteredCourseId="65757575",
                LecturerId = "Kobby",
                
              },

              new StudentResult
              {
                StudentId = "UE20027714",
                AcademicYear = "2019/2020",
                Semester = "1",
                RegisteredCourseId="65757575",
                LecturerId = "Kobby",
              },

              new StudentResult
              {
                StudentId = "UE20027914",
                AcademicYear = "2019/2020",
                Semester = "1",
                RegisteredCourseId="65757575",
                LecturerId = "Kobby",
              },

            };

        }
    }
}
