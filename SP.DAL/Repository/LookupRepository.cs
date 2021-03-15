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
    public class LookupRepository : ILookupRepository
    {
        private Lookups Collection;
        public LookupRepository(Lookups collection)
        {
            Collection = collection;
        }

        public bool AddLookup(Lookup lookup)
        {
            Collection.Add(lookup);
            DataWriter.Add(lookup, nameof(Lookup));
            return true;
        }

        public Lookup GetLookup(string lookupId)
        {
            var result = Collection.Next.Find((x,y) => x.LookupId.Span[y] == lookupId);
            return CreateLookup(result);
        }

        public Lookup GetLookupByName(string name)
        {
            var result = Collection.Next.Find((x,y) => x.Name.Span[y] == name);
            return CreateLookup(result);
        }

        public IEnumerable<Lookup> GetLookups()
        {
            return Collection.Next.Select((x,y)=> CreateLookup(x,y));
        }

        public bool UpdateLookup(Lookup lookup)
        {
            var result = Collection.Next.Find((x,y) => x.LookupId.Span[y] == lookup.LookupId);
            var originalLookup = CreateLookup(result);
            if (originalLookup == null) return false;
            lookup.Map(originalLookup);

            DataWriter.Add(originalLookup, nameof(Lookup));
            return true;
        }

        public bool Exist(Lookup lookup)
        {
            var result = Collection.Next.Find((l,m) => l.Name.Span[m] == (lookup.Name) && l.Type.Span[m] == (lookup.Type));
            var existingLookup = CreateLookup(result);
            if (existingLookup == null) return false;
            return true;
        }

        private Lookup CreateLookup(LookupDM Value, int Index)
        {
            return new Lookup 
            {
               InstitutionId = Value.InstitutionId.Span[Index],
               LookupId = Value.LookupId.Span[Index],
               Name = Value.Name.Span[Index],
               Type = Value.Type.Span[Index],
               State = Value.State.Span[Index]
            };
        }

        private Lookup CreateLookup((LookupDM Value, int Index, bool success) result)
        {
            if (!result.success) return null;
            return CreateLookup(result.Value, result.Index);
        }
    }
}
