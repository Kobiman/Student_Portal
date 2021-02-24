using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SP.Models.Dtos;
using SP.Services.Interfaces;

namespace SP.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ICourseService _courseService;
        public CourseController(ICourseService courseService)
        {
            _courseService = courseService;
        }

        [HttpPost]
        [Route("AddCourse")]
        public IActionResult AddCourse([FromBody]AddCourseRequest course)
        {
            var result = _courseService.AddCourse(course);
            if (result.IsSucessful) return Ok(result);
            return BadRequest(result);
        }

        [HttpGet]
        [Route("GetCourses")]
        public IActionResult GetCourses()
        {
            var result = _courseService.GetCourses();
            if (result.IsSucessful) return Ok(result);
            return BadRequest(result);
        }
    }
}