using SP.Models;
using SP.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.Services.Interfaces.Repository
{
    public interface IProgramRepository : IRepository<Program>
    {
        bool AddProgram(AddProgramRequest request);
        Program GetProgram(string programId);
        IEnumerable<Program> GetPrograms();
        bool UpdateProgram(UpdateProgramRequest request);
        Program GetprogramByName(string program);
    }
}
