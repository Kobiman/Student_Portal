using System;
using System.Collections.Generic;
using System.Text;

namespace SP.Models.Dtos
{
    public class UpdateProgramRequest
    {
        public string ProgramId { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string DepartmentId { get; set; }
    }
}
