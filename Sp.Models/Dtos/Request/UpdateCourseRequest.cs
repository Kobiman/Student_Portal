using System;
using System.Collections.Generic;
using System.Text;

namespace SP.Models.Dtos
{
    public class UpdateCourseRequest
    {
        public string CourseId { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public int Credit { get; set; }
        public string DepartmentId { get; set; }
    }
}
