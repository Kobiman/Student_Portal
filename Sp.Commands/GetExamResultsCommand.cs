using SP.Common;
using SP.Models;
using SP.Models.Dtos;
using SP.Services.Interfaces.Commands;
using SP.Services.Interfaces.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks.Dataflow;

namespace SP.Commands
{
    public class GetExamResultsCommand : IGetExamResultsCommand
    {
        private readonly IUnitOfWork _uow;
        public GetExamResultsCommand(IUnitOfWork uow)
        {
            _uow = uow;
        }
        public IResult Execute(IRequest request)
        {
            if (request is GetExamResultsRequest examresultsrequest)
            {
                var examresults = _uow.Students
                    .GetStudentsByProgram(examresultsrequest.Program)
                    .Select(s=>s
                    .GetResults(examresultsrequest.AcademicYear,examresultsrequest.Level,examresultsrequest.Program))
                    .ToList();
               
                if (examresults == null) return new Result(false, Message.NotFound(nameof(StudentResult)));

                return new Result<IEnumerable<GetExamResultsResponse>>(true, examresults, "");
            }
            return new Result(false, "");
        }
    }
}
