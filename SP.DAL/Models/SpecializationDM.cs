using SP.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.DAL.Models
{
    public class SpecializationDM
    {
        public SpecializationDM(int length)
        {
            this.length = length;
            SpecializationId = new string[length];
            Name = new string[length];
            Type = new string[length];
            Level = new string[length];
        }
        public void Add(Specialization type)
        {

            lock (type)
            {
                if (Count == SpecializationId.Length)
                {
                    var newLength = SpecializationId.Length + 100;
                    var _SpecializationId = new string[newLength];
                    SpecializationId.CopyTo(_SpecializationId);
                    SpecializationId = _SpecializationId;
                    var _Name = new string[newLength];
                    Name.CopyTo(_Name);
                    Name = _Name;
                    var _Type = new string[newLength];
                    Type.CopyTo(_Type);
                    Type = _Type;
                    var _Level = new string[newLength];
                    Level.CopyTo(_Level);
                    Level = _Level;

                }
                SpecializationId.Span[Count] = type.SpecializationId;
                Name.Span[Count] = type.Name;
                Type.Span[Count] = type.Type;
                Level.Span[Count] = type.Level;
                Count++;
            }
        }
        private readonly int length;


        public int Count;

        public Memory<string> SpecializationId;
        public Memory<string> Name;
        public Memory<string> Type;
        public Memory<string> Level;
    }
}
