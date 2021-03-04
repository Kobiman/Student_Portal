using SP.Common;
using SP.Models;
using SP.Models.Dtos;
using SP.Services.Interfaces.Repository;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using KMapper;
using SP.Services.Interfaces;
using System.Security.Cryptography.X509Certificates;
using SP.Commands;
using SP.Services.Interfaces.Commands;

namespace SP.Commands
{
    public class CheckResultCommand : ICheckResultCommand
    {
        private readonly IUnitOfWork _uow;
        public CheckResultCommand(IUnitOfWork uow)
        {
            _uow = uow;
        }
        public IResult Execute(IRequest request)
        {
            if (request is CheckResultRequest getStudentRequest) 
            {
            ICollection<ValidationResult> validationResults = new List<ValidationResult>();
            if (!getStudentRequest.Validate(out validationResults)) return new Result(false, validationResults.First().ErrorMessage);
            var studentResults = _uow.Students.GetStudent(getStudentRequest.IndexNumber)?.Results;


            if (studentResults == null) return new Result(false, "Sorry, No Record Found");
            return new Result<IList<StudentResult>>(true, studentResults, "");
        }
             return new Result(true, "");
    }
    }
}
