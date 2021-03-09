using KMapper;
using SP.DAL;
using SP.DAL.Repository;
using SP.Models;
using SP.Services.Interfaces.Repository;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.DAL.Repository
{
    public class InstitutionRepository : Repository<Institution>, IInstitutionRepository
    {
        public InstitutionRepository(ConcurrentBag<Institution> collection) : base(collection)
        {
        }

        public bool AddInstitution(Institution institution)
        {
            Collection.Add(institution);
            DataWriter.Add(institution, nameof(Institution));
            return true;
        }

        public Institution GetInstitution(string institutionId)
        {
            return Collection.FirstOrDefault(x=>x.InstitutionId == institutionId);
        }

        public IEnumerable<Institution> GetInstitutions()
        {
            return Collection.ToList();
        }

        public bool UpdateInstitution(Institution institution)
        {
            var originalInstitution = Collection.FirstOrDefault(x => x.InstitutionId == institution.InstitutionId);
            if (originalInstitution == null) return false;
            institution.Map(originalInstitution);
            DataWriter.Add(originalInstitution, nameof(Institution));
            return true;
        }
    }
}
