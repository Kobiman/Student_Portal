using SP.Models;
using SP.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.Services.Interfaces.Commands
{
    public interface ICommand
    {
        IResult Execute(IRequest request);
    }
}
