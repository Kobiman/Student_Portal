using SP.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.DAL.Models
{
    public class Lookups
    {
        public Memory<LookupDM> Next { get; set; }
        public int Heigth { get; set; }
        private int _limit;
        private int index;
        public Lookups(int limit)
        {
            Next = new LookupDM[limit];
            _limit = limit;
            index = 0;
            Heigth = 0;
        }

        public void Add(Lookup lookupDM)
        {
            lock (lookupDM)
            {
                if (Heigth > _limit - 1)
                {
                    if (index == _limit) { index = 0; }
                    Next.Span[index].Add(lookupDM);
                    index++;
                }
                else
                {
                    Next.Span[Heigth] = new LookupDM(5);
                    Next.Span[index].Add(lookupDM);
                    Heigth++;
                }
            }
        }
    }
    public class LookupDM
    {
        public LookupDM(int length)
        {
            LookupId = new string[length];
            Name = new string[length];
            Type = new string[length];
            InstitutionId = new string[length];
            State = new int[length];
        }
        public void Add(Lookup type)
        {
            lock (type)
            {
                if (Count == LookupId.Length)
                {
                    var newLength = LookupId.Length + 5;
                    var _LookupId = new string[newLength];
                    LookupId.CopyTo(_LookupId);
                    LookupId = _LookupId;
                    var _Name = new string[newLength];
                    Name.CopyTo(_Name);
                    Name = _Name;
                    var _Type = new string[newLength];
                    Type.CopyTo(_Type);
                    Type = _Type;
                    var _InstitutionId = new string[newLength];
                    InstitutionId.CopyTo(_InstitutionId);
                    InstitutionId = _InstitutionId;
                    var _State = new int[newLength];
                    State.CopyTo(_State);
                    State = _State;

                }
                LookupId.Span[Count] = type.LookupId;
                Name.Span[Count] = type.Name;
                Type.Span[Count] = type.Type;
                InstitutionId.Span[Count] = type.InstitutionId;
                State.Span[Count]++;
                Count++;
            }
        }


        public int Count;
        public Memory<string> LookupId;
        public Memory<string> Name;
        public Memory<string> Type;
        public Memory<string> InstitutionId;
        public Memory<int> State;
    }
}
