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
    public class ProgramController : ControllerBase
    {
        private readonly IProgramService _programService;
        public ProgramController(IProgramService programService)
        {
            _programService = programService;
        }

        [HttpPost]
        [Route("AddProgram")]
        public IActionResult AddProgram([FromBody]AddProgramRequest department)
        {
            var result = _programService.AddProgram(department);
            if (result.IsSucessful) return Ok(result);
            return BadRequest(result);
        }

        [HttpGet]
        [Route("GetPrograms")]
        public IActionResult GetPrograms()
        {
            var result = _programService.GetPrograms();
            if (result.IsSucessful) return Ok(result);
            return BadRequest(result);
        }

    }
}