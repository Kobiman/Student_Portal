using System;
using System.Collections.Generic;
using System.Text;

namespace SP.Models.Dtos
{
    public class ApproveRegistrationRequest : IRequest
    {
        public string AcademicYear { get; set; }
        public string Semester { get; set; }
    }
}
