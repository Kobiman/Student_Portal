using KMapper;
using SP.Models;
using SP.Models.Dtos;
using SP.Services.Interfaces.Repository;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.DAL.Repository
{
    public class ProgramRepository : Repository<Program>, IProgramRepository
    {
        public ProgramRepository(ConcurrentBag<Program> collection) : base(collection)
        {
        }

        public bool AddProgram(AddProgramRequest request)
        {
            var program = request.Map<Program, AddProgramRequest>();
            Collection.Add(program);
            DataWriter.WriterData(program, nameof(Program));
            return true;
        }

        public Program GetProgram(string programId)
        {
            return Collection.FirstOrDefault(x => x.ProgramId == programId);
        }

        public Program GetprogramByName(string program)
        {
            return Collection.FirstOrDefault(x => x.Name == program);
        }

        public IEnumerable<Program> GetPrograms()
        {
            return Collection.ToList();
        }

        public bool UpdateProgram(UpdateProgramRequest request)
        {
            var originalProgram = Collection.FirstOrDefault(x => x.ProgramId == request.ProgramId);
            if (originalProgram == null) return false;
            request.Map(originalProgram);

            DataWriter.WriterData(originalProgram, nameof(Program));
            return true;
        }
    }
}
