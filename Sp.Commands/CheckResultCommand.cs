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
using Sp.Commands;

namespace Sp.Commands
{
    class CheckResultCommand : ICheckResultCommand
    {
        private readonly IUnitOfWork _uow;
        public CheckResultCommand(IUnitOfWork uow)
        {
            _uow = uow;
        }
        public IResult Execute(IRequest student)
        {
            if (student is AddStudentRequest getStudentRequest) 
            {
            ICollection<ValidationResult> validationResults = new List<ValidationResult>();
            if (!student.Validate(out validationResults)) return new Result(false, validationResults.First().ErrorMessage);
            var studResult = _uow.ExamResults.GetByStudent(getStudentRequest.IndexNumber);
            if (studResult == null) return new Result(false, "Student Not Found");
            return new Result<IList<StudentResult>>(true, studResult, "");
        }
             return new Result(true, "");
    }
    }
}
