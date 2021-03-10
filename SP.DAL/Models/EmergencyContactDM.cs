using SP.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.DAL.Models
{
    public class EmergencyContactDM
    {
        public EmergencyContactDM(int length)
        {
            this.length = length;
            Id = new string[length];
            Name = new string[length];
            Occupation = new string[length];
            Address = new string[length];
            Region = new string[length];
            HomeTown = new string[length];
            Mobile = new string[length];
            Email = new string[length];
            StudentId = new string[length];
        }
        public void Add(EmergencyContact type)
        {

            lock (type)
            {
                if (Count == Id.Length)
                {
                    var newLength = Id.Length + 5;
                    var _ParentId = new string[newLength];
                    Id.CopyTo(_ParentId);
                    Id = _ParentId;
                    var _Name = new string[newLength];
                    Name.CopyTo(_Name);
                    Name = _Name;
                    var _Occupation = new string[newLength];
                    Occupation.CopyTo(_Occupation);
                    Occupation = _Occupation;
                    var _Address = new string[newLength];
                    Address.CopyTo(_Address);
                    Address = _Address;
                    var _Region = new string[newLength];
                    Region.CopyTo(_Region);
                    Region = _Region;
                    var _HomeTown = new string[newLength];
                    HomeTown.CopyTo(_HomeTown);
                    HomeTown = _HomeTown;
                    var _Mobile = new string[newLength];
                    Mobile.CopyTo(_Mobile);
                    Mobile = _Mobile;
                    var _Email = new string[newLength];
                    Email.CopyTo(_Email);
                    Email = _Email;
                    var _StudentId = new string[newLength];
                    StudentId.CopyTo(_StudentId);
                    StudentId = _StudentId;

                }
                Id.Span[Count] = type.Id;
                Name.Span[Count] = type.Name;
                Occupation.Span[Count] = type.Occupation;
                Address.Span[Count] = type.Address;
                Region.Span[Count] = type.Region;
                HomeTown.Span[Count] = type.HomeTown;
                Mobile.Span[Count] = type.Mobile;
                Email.Span[Count] = type.Email;
                StudentId.Span[Count] = type.StudentId;
            }
        }
        private readonly int length;


        public int Count;

        public Memory<string> Id;
        public Memory<string> Name;
        public Memory<string> Occupation;
        public Memory<string> Address;
        public Memory<string> Region;
        public Memory<string> HomeTown;
        public Memory<string> Mobile;
        public Memory<string> Email;
        public Memory<string> StudentId;
    }
}
