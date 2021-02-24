using System;
using System.Collections.Generic;
using System.Text;

namespace SP.Models.Dtos
{
    public class ExamResultsDto
    {
        public string Level { get; set; }
        public string Semster { get; set; }
        public string CourseCode { get; set; }
        public string CourseName { get; set; }
        public string Grade { get; set; }
        public int Credit { get; set; }
        public decimal GradePoint { get; set; }
        public decimal ClassMark { get; set; }
        public decimal ExamMark { get; set; }
        public decimal TotalMark { get; set; }
        public string Lecturer { get; set; }
        public bool Scoring { get; set; }
        public string AcademicYear { get;  set; }
    }
}
