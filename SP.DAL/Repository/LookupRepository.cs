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
    public class LookupRepository : Repository<Lookup>, ILookupRepository
    {
        public LookupRepository(ConcurrentBag<Lookup> collection) : base(collection)
        {
        }

        public bool AddLookup(Lookup lookup)
        {
            Collection.Add(lookup);
            DataWriter.Add(lookup, nameof(Lookup));
            return true;
        }

        public Lookup GetLookup(string lookupId)
        {
            return Collection.FirstOrDefault(x => x.LookupId == lookupId);
        }

        public Lookup GetLookupByName(string name)
        {
            return Collection.FirstOrDefault(x => x.Name == name);
        }

        public IEnumerable<Lookup> GetLookups()
        {
            return Collection.ToList();
        }

        public bool UpdateLookup(Lookup lookup)
        {
            var originalLookup = Collection.FirstOrDefault(x => x.LookupId == lookup.LookupId);
            if (originalLookup == null) return false;
            lookup.Map(originalLookup);

            DataWriter.Add(originalLookup, nameof(Lookup));
            return true;
        }

        public bool Exist(Lookup lookup)
        {
            var existingLookup = Collection.FirstOrDefault(l => l.Name.Equals(lookup.Name) && l.Type.Equals(lookup.Type));
            if (existingLookup == null) return false;
            return true;
        }
    }
}
