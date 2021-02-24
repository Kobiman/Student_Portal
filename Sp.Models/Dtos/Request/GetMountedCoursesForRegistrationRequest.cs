using System;
using System.Collections.Generic;
using System.Text;

namespace SP.Models.Dtos.Request
{
    public class GetMountedCoursesForRegistrationRequest : IRequest
    {
        public string Program { get; set; }
        public string Semester { get; set; }
        public string Level { get; set; }
        public string AcademicYear { get; set; }
    }
}
