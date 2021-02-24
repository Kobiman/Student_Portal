using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SP.Models;
using SP.Services.Interfaces;

namespace SP.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LecturerController : ControllerBase
    {
        private readonly ILecturerService _lecturerService;
        public LecturerController(ILecturerService lecturerService)
        {
            _lecturerService = lecturerService;
        }

        [HttpPost]
        [Route("AddLecturer")]
        public IActionResult AddLecturer([FromBody]Lecturer lecturer)
        {
            var result = _lecturerService.AddLecturer(lecturer);
            if (result.IsSucessful) return Ok(result);
            return BadRequest(result);
        }

        [HttpGet]
        [Route("GetLecturers")]
        public IActionResult GetLecturers()
        {
            var result = _lecturerService.GetLecturers();
            if (result.IsSucessful) return Ok(result);
            return BadRequest(result);
        }
    }
}