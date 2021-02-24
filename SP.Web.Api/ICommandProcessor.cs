using SP.Models;
using SP.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.Web.Api
{
    public interface ICommandProcessor
    {
        IResult Execute(IRequest request);
    }
}
