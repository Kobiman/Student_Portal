using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SP.Models
{
    public class MountedCourses
    {
        [Required]
        public string CourseName { get; set; }
        [Required]
        public string CourseCode { get; set; }
        [Required]
        public string AssignedTo { get; set; }
        [Required]
        public string Category { get; set; }
        public bool Scoring { get; set; }
        public int Credit { get; set; }
    }
}
