using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.Models.Dtos
{
    public class GetExamResultsResponse
    {
        public GetExamResultsResponse(string academicYear,string name, string program, int cumulativeCredit, decimal cumulativeGPA,  IList<ExamResultsDto> studentResults)
        {
            AcademicYear = academicYear;
            IndexNumber = IndexNumber;
            Name = name;
            Program = program;
            StudentResults = studentResults;
            CumulativeCredit = cumulativeCredit;
            CumulativeGPA = cumulativeGPA;

        }
        public string AcademicYear { get; set; }
        public string IndexNumber { get; set; }
        public string Name { get; set; }
        public string Program { get; set; }
        public int CurrentCredit => StudentResults.Sum(r => r.Credit);
        public decimal CurrentGPA  => StudentResults.Sum(r => r.Credit * r.GradePoint);
        public decimal CumulativeCredit { get; set; }
        public decimal CumulativeGPA { get; set; }

        public IList<ExamResultsDto> StudentResults { get; }
    }
   
}
