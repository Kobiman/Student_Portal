using System;
using System.Collections.Generic;
using System.Text;

namespace SP.Models.Dtos
{
    public class GetExamResultsRequest :IRequest
    {
        private IEnumerable<MountedCourseDto> uploadexamresults;

        public GetExamResultsRequest (IEnumerable<StudentResult> examresults)
        {
            ExamResults = examresults;
        }

        public GetExamResultsRequest(IEnumerable<MountedCourseDto> uploadexamresults)
        {
            this.uploadexamresults = uploadexamresults;
        }

        public IEnumerable<StudentResult> ExamResults { get; }
        public string Program { get; set; }
        public string AcademicYear { get; set; }
        public string Level { get; set; }
    }
}
