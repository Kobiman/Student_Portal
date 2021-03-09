using KMapper;
using SP.DAL;
using SP.DAL.Models;
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
    public class InstitutionRepository : IInstitutionRepository
    {
        private Institutions Collection;
        public InstitutionRepository(Institutions collection) //: base(collection)
        {
            Collection = collection;
        }

        public bool AddInstitution(Institution institution)
        {
            Collection.Add(institution);
            DataWriter.Add(institution, nameof(Institution));
            return true;
        }

        public Institution GetInstitution(string institutionId)
        {
            var result = Collection.Next.Find((x,y) => x.InstitutionId.Span[y] == institutionId);
            return CreateInstitution(result);
        }

        public IEnumerable<Institution> GetInstitutions()
        {
            return Collection.Next.Select((x,y)=> CreateInstitution(x,y));
        }

        public bool UpdateInstitution(Institution institution)
        {
            var result = Collection.Next.Find((x, y) => x.InstitutionId.Span[y] == institution.InstitutionId);
            var originalInstitution = CreateInstitution(result);
            if (originalInstitution == null) return false;
            institution.Map(originalInstitution);
            DataWriter.Add(originalInstitution, nameof(Institution));
            return true;
        }

        private Institution CreateInstitution(InstitutionDM Value, int Index)
        {
            return new Institution
            {
                City = Value.City.Span[Index],
                Code = Value.Code.Span[Index],
                Country = Value.Country.Span[Index],
                DateCreated = Value.DateCreated.Span[Index],
                Email = Value.Email.Span[Index],
                InstitutionId = Value.InstitutionId.Span[Index],
                Logo = Value.Logo.Span[Index],
                Name = Value.Name.Span[Index],
                PostalAddress = Value.PostalAddress.Span[Index],
                Telephone = Value.Telephone.Span[Index]
            };
        }
        private Institution CreateInstitution((InstitutionDM Value, int Index, bool success) result)
        {
            if (!result.success) return null;
            return CreateInstitution(result.Value, result.Index);
        }
    }
}
