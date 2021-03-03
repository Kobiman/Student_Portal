using KMapper;
using SP.Common;
using SP.Models;
using SP.Models.Dtos;
using SP.Services.Interfaces;
using SP.Services.Interfaces.Repository;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;

namespace SP.Commands
{
    public class UploadExamResultsCommand : IUploadExamResultsCommand
    {
        private readonly IUnitOfWork _uow;
        public UploadExamResultsCommand(IUnitOfWork uow)
        {
            _uow = uow;
        }
        public IResult Execute(IRequest request)
        {
            if (request is GetExamResultsRequest examResultsRequest)
            {
                foreach (var student in examResultsRequest.ExamResults)
                {
                    ICollection<ValidationResult> results = new List<ValidationResult>();
                    if (!student.Validate(out results)) return new Result(false, results.First().ErrorMessage);
                }

                var examresult = examResultsRequest.Map<StudentResult, GetExamResultsRequest>();
                _uow.SaveChanges(examresult,nameof(StudentResult));
                return new Result(true, Message.AddedSuccessfully(nameof(StudentResult)));
            }
            return new Result(false, Message.OperationFailed);
        }
    }
}
