using KMapper;
using SP.DAL.Models;
using SP.Models;
using SP.Services.Interfaces.Repository;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.DAL.Repository
{
    public class SchoolRepository : ISchoolRepository
    {
        private Schools Collection;
        public SchoolRepository(Schools collection)
        {
            Collection = collection;
        }
        public bool AddSchool(School school)
        {
            Collection.Add(school);
            DataWriter.Add(school, nameof(School));
            return true;
        }
        public School GetSchool(string schoolId)
        {
            var result = Collection.Next.Find((x,y) => x.SchoolId.Span[y] == schoolId);
            return CreateSchool(result);
        }

        public IEnumerable<School> GetSchools()
        {
            return Collection.Next.Select((x,y)=> CreateSchool(x,y));
        }
        public bool UpdateSchool(School school)
        {
            var result = Collection.Next.Find((x,y) => x.SchoolId.Span[y] == school.SchoolId);
            var originalSchool = CreateSchool(result);
            if (originalSchool == null) return false;
            school.Map(originalSchool);
            DataWriter.Add(originalSchool, nameof(School));
            return true;
        }

        private School CreateSchool(SchoolDM Value, int Index)
        {
            return new School
            {
                AcademicYear = Value.AcademicYear.Span[Index],
                InstitutionId = Value.InstitutionId.Span[Index],
                Name = Value.Name.Span[Index],
                RegistrationActivated = Value.RegistrationActivated.Span[Index],
                ResultUploaded = Value.ResultUploaded.Span[Index],
                SchoolId = Value.SchoolId.Span[Index]
            };
        }

        private School CreateSchool((SchoolDM Value, int Index, bool success) result)
        {
            if (!result.success) return null;
            return CreateSchool(result.Value, result.Index);
        }
    }
}
