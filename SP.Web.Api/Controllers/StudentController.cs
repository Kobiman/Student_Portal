using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SP.Models.Dtos;
using SP.Models.Dtos.Request;
using SP.Services.Interfaces;

namespace SP.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentService _studentService;
        public StudentController(IStudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpPost]
        [Route("AddStudent")]
        public IActionResult AddStudent([FromBody]AddStudentRequest request)
        {
            var result = _studentService.AddStudent(request);
            if (result.IsSucessful) return Ok(result);
            return BadRequest(result);
        }

        [HttpGet]
        [Route("GetStudents")]
        public IActionResult GetStudents()
        {
            var result = _studentService.GetStudents();
            if (result.IsSucessful) return Ok(result);
            return BadRequest(result);
        }

        [HttpGet]
        [Route("GetStudent/{indexNumber}")]
        public IActionResult GetStudents(string indexNumber)
        {
            var result = _studentService.GetStudent(indexNumber);
            if (result.IsSucessful) return Ok(result);
            return BadRequest(result);
        }

    }
}