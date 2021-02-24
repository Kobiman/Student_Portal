using KMapper;
using SP.Models;
using SP.Services.Interfaces.Repository;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.DAL.Repository
{
    public class SchoolRepository : Repository<School>, ISchoolRepository
    {
        public SchoolRepository(ConcurrentBag<School> collection) : base(collection)
        {
        }
        public bool AddSchool(School school)
        {
            Collection.Add(school);
            DataWriter.WriterData(school, nameof(School));
            return true;
        }
        public School GetSchool(string schoolId)
        {
            return Collection.FirstOrDefault(x => x.SchoolId == schoolId);
        }
        public IEnumerable<School> GetSchools()
        {
            return Collection.ToList();
        }
        public bool UpdateSchool(School school)
        {
            var originalSchool = Collection.FirstOrDefault(x => x.SchoolId == school.SchoolId);
            if (originalSchool == null) return false;
            school.Map(originalSchool);
            DataWriter.WriterData(originalSchool, nameof(School));
            return true;
        }
    }
}
