using System;

namespace SP.Models
{
    public class StudentResult
    {
        public StudentResult()
        {
            Date = DateTime.Now;
            ExamResultId = Guid.NewGuid().ToString();
        }
        public DateTime Date { get; set; }
        public string ExamResultId { get; set; }
        public string StudentId { get; set; }
        public string AcademicYear { get; set; }
        public string Semester { get; set; }
        public int Credit { get; set; }
        public string ProgramId { get; set; }
        public string Level { get; set; }
        public string RegisteredCourseId { get; set; }
        public string Grade { get; set; }
        public decimal GradePoint { get; set; }
        public decimal ClassMark { get; set; }
        public decimal ExamMark { get; set; }
        public decimal TotalMark { get; set; }
        public bool Scoring { get; set; }
        public string LecturerId { get; set; }
    }
}