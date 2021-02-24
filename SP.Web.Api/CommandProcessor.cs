using SP.Models;
using SP.Models.Dtos;
using SP.Services.Interfaces.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace SP.Web.Api
{
    public class CommandProcessor : ICommandProcessor
    {
        IEnumerable<Type> types;
        public CommandProcessor()
        {
            types = AppDomain
                    .CurrentDomain
                    .GetAssemblies()
                    .SelectMany(s => s.GetTypes())
                    .Where(t => t.IsInterface);
        }

        public IResult Execute(IRequest request)
        {
            var type = types
                       .FirstOrDefault(x => x.Name == $"I{request.GetType().Name.Replace("Request", "Command")}");
            var command = ServiceContext.GetService(type) as ICommand;
            return command.Execute(request);
        }
    }
}
