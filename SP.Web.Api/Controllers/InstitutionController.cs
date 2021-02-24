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
    public class InstitutionController : ControllerBase
    {
        private readonly IInstitutionService _institutionService;
        public InstitutionController(IInstitutionService institutionService)
        {
            _institutionService = institutionService;
        }

        [HttpPost]
        [Route("AddInstitution")]
        public IActionResult AddInstitution([FromBody]Institution institution)
        {
            var result = _institutionService.AddInstitution(institution);
            if (result.IsSucessful) return Ok(result);
            return BadRequest(result);
        }

        [HttpGet]
        [Route("GetInstitutions")]
        public IActionResult GetInstitutions()
        {
            var result = _institutionService.GetInstitutions();
            if (result.IsSucessful) return Ok(result);
            return BadRequest(result);
        }
    }
}