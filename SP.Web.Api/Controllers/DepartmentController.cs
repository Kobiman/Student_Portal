using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SP.Commands;
using SP.Models;
using SP.Models.Dtos;
using SP.Models.Dtos.Request;
using SP.Services.Interfaces;
using SP.Services.Interfaces.Commands;

namespace SP.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly ICommandProcessor _processor;
        private readonly IDepartmentService _departmentService;
        public DepartmentController(ICommandProcessor processor, IDepartmentService departmentService)
        {
            _processor = processor;
            _departmentService = departmentService;
        }

        [HttpPost]
        [Route("AddDepartment")]
        public IActionResult AddDepartment([FromBody]AddDepartmentRequest department)
        {
            var result = _departmentService.AddDepartment(department);
            if (result.IsSucessful) return Ok(result);
            return BadRequest(result);
        }

        [HttpGet]
        [Route("GetDepartments")]
        public IActionResult GetDepartments()
        {
            var result = _departmentService.GetDepartments();
            if (result.IsSucessful) return Ok(result);
            return BadRequest(result);
        }

        [HttpPost]
        [Route("MountCourse")]
        public IActionResult MountCourse([FromBody]IEnumerable<MountedCourseDto> mountedCourses)
        {
            var result = _processor.Execute(new AddMountedCourseRequest(mountedCourses));
            if (result.IsSucessful) return Ok(result);
            return BadRequest(result);
        }

        [HttpPost]
        [Route("GetMountedCourses")]
        public IActionResult MountedCourses([FromBody]GetMountedCoursesRequest request)
        {
            var result = _processor.Execute(request);
            if (result.IsSucessful) return Ok(result);
            return BadRequest(result);
        }

        [HttpGet]
        [Route("GetDepartmentsWithCourses")]
        public IActionResult GetDepartmentsWithCourses()
        {
            var result = _processor.Execute(new GetDepartmentsWithCoursesRequest());
            if (result.IsSucessful) return Ok(result);
            return BadRequest(result);
        }

        [HttpPost]
        [Route("GetMountedCoursesForRegistration")]
        public IActionResult GetMountedCoursesForRegistration(GetMountedCoursesForRegistrationRequest request)
        {
            var result = _processor.Execute(request);
            if (result.IsSucessful) return Ok(result);
            return BadRequest(result);
        }

        [HttpPost]
        [Route("RegisterCourse")]
        public IActionResult RegisterCourse([FromBody]IEnumerable<RegisteredCourseDto> request)
        {
            var result = _processor.Execute(new AddRegisteredCoursesRequest(request));
            if (result.IsSucessful) return Ok(result);
            return BadRequest(result);
        }
        
        [HttpPost]
        [Route("GetRegisteredCourses")]
        public IActionResult GetRegisteredCourses([FromBody] GetRegisteredCoursesRequest request)
        {
            var result = _processor.Execute(request);
            if (result.IsSucessful) return Ok(result);
            return BadRequest(result);
        }
    }
}