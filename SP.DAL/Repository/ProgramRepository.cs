using KMapper;
using SP.DAL.Models;
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
    public class ProgramRepository : IProgramRepository
    {
        private Programs Collection;
        public ProgramRepository(Programs collection)
        {
            Collection = collection;
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
            var program = Collection.Next.Find((x, y) => x.ProgramId.Span[y] == programId);
            return CreateProgram(program);
        }

        public Program GetprogramByName(string programName)
        {
            var program = Collection.Next.Find((x, y) => x.Name.Span[y] == programName);
            return CreateProgram(program);
        }

        public IEnumerable<Program> GetPrograms()
        {
            return Collection.Next.Select((x, y) => CreateProgram(x, y));
        }

        public bool UpdateProgram(UpdateProgramRequest request)
        {
            var result = Collection.Next.Find((x, y) => x.ProgramId.Span[y] == request.ProgramId);
            var originalProgram = CreateProgram(result);
            if (originalProgram == null) return false;
            request.Map(originalProgram);

            DataWriter.WriterData(originalProgram, nameof(Program));
            return true;
        }

        private static Program CreateProgram(ProgramDM Value, int Index)
        {
            return new Program
            {
                DepartmentId = Value.DepartmentId.Span[Index],
                ProgramId = Value.ProgramId.Span[Index],
                Duration = Value.Duration.Span[Index],
                Limit = Value.Limit.Span[Index],
                Name = Value.Name.Span[Index],
                Specializations = Value.Specializations.Span[Index].Select((a, b) =>
                {
                    return new Specialization
                    {
                        Level = a.Level.Span[b],
                        Name = a.Name.Span[b],
                        SpecializationId = a.SpecializationId.Span[b],
                        Type = a.Type.Span[b]
                    };
                }).ToList(),
                MountedCourses = Value.MountedCourses.Span[Index].Select((a, b) =>
                {
                    return new MountedCourse
                    {
                        Level = a.Level.Span[b],
                        Scoring = a.Scoring.Span[b],
                        AcademicYear = a.AcademicYear.Span[b],
                        Semester = a.Semester.Span[b],
                        Specialization = a.Specialization.Span[b],
                        AssignedBy = a.AssignedBy.Span[b],
                        AssignedTo = a.AssignedTo.Span[b],
                        Category = a.Category.Span[b],
                        CourseCode = a.CourseCode.Span[b],
                        CourseName = a.CourseName.Span[b],
                        Credit = a.Credit.Span[b],
                        Date = a.Date.Span[b],
                        EnrollmentOption = a.EnrollmentOption.Span[b],
                        MaxLimit = a.MaxLimit.Span[b],
                        MinLimit = a.MinLimit.Span[b],
                        MountedCoureId = a.MountedCoureId.Span[b],
                        ProgramId = a.ProgramId.Span[b],
                    };
                }).ToList()
            };
        }
        private Program CreateProgram((ProgramDM Value, int Index, bool Success) result)
        {
            if(!result.Success) return null;
            return CreateProgram(result.Value, result.Index);
        }

    }
}
