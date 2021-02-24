using SP.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.Services.Interfaces.Repository
{
    public interface IInstitutionRepository
    {
        bool AddInstitution(Institution institution);
        Institution GetInstitution(string institutionId);
        IEnumerable<Institution> GetInstitutions();
        bool UpdateInstitution(Institution institution);
    }
}
