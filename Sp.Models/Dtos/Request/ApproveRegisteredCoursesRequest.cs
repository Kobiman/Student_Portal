using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SP.Models.Dtos
{
    public class ApproveRegisteredCoursesRequest: IRequest
    {
        public ApproveRegisteredCoursesRequest(IEnumerable<ApproveRegisteredCourseDto> approveRegisteredCourses)
        {
            ApproveRegisteredCourses = approveRegisteredCourses;
        }

        public IEnumerable<ApproveRegisteredCourseDto> ApproveRegisteredCourses { get; }

    }
    public class ApproveRegisteredCourseDto
    {
        public ApproveRegisteredCourseDto()
        {
            ApproveCourses = new List<ApproveCoursesDto>();
        }
        [Required]
        public string IndexNumber { get; set; }
        public IEnumerable<ApproveCoursesDto> ApproveCourses { get; }
        public string RegisteredCourseId { get; set; }
    }

    public class ApproveCoursesDto
    {   
        [Required]
        public string CourseCode { get; set; }
        public bool Approved { get; set; }
        [Required]
        public string RegisteredCourseId { get; set; }
    }
}
