using SP.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.DAL.Models
{
    public class Institutions
    {
        public Memory<InstitutionDM> Next { get; set; }
        public int Heigth { get; set; }
        private int _limit;
        private int index;
        public Institutions(int limit)
        {
            Next = new InstitutionDM[limit];
            _limit = limit;
            index = 0;
            Heigth = 0;
        }

        public void Add(Institution institution)
        {
            lock (institution)
            {
                if (Heigth > _limit - 1)
                {
                    if (index == _limit) { index = 0; }
                    Next.Span[index].Add(institution);
                    index++;
                }
                else
                {
                    Next.Span[Heigth] = new InstitutionDM(1);
                    Next.Span[index].Add(institution);
                    Heigth++;
                }
            }
        }
    }

    public class InstitutionDM
    {
        public InstitutionDM(int length)
        {
            InstitutionId = new string[length];
            Code = new string[length];
            Name = new string[length];
            PostalAddress = new string[length];
            Email = new string[length];
            Country = new string[length];
            City = new string[length];
            Telephone = new string[length];
            Logo = new string[length];
            DateCreated = new System.DateTime[length];
        }
        public void Add(Institution type)
        {
            lock (type)
            {
                if (Count == InstitutionId.Length)
                {
                    var newLength = InstitutionId.Length + 1000;
                    var _InstitutionId = new string[newLength];
                    InstitutionId.CopyTo(_InstitutionId);
                    InstitutionId = _InstitutionId;
                    var _Code = new string[newLength];
                    Code.CopyTo(_Code);
                    Code = _Code;
                    var _Name = new string[newLength];
                    Name.CopyTo(_Name);
                    Name = _Name;
                    var _PostalAddress = new string[newLength];
                    PostalAddress.CopyTo(_PostalAddress);
                    PostalAddress = _PostalAddress;
                    var _Email = new string[newLength];
                    Email.CopyTo(_Email);
                    Email = _Email;
                    var _Country = new string[newLength];
                    Country.CopyTo(_Country);
                    Country = _Country;
                    var _City = new string[newLength];
                    City.CopyTo(_City);
                    City = _City;
                    var _Telephone = new string[newLength];
                    Telephone.CopyTo(_Telephone);
                    Telephone = _Telephone;
                    var _Logo = new string[newLength];
                    Logo.CopyTo(_Logo);
                    Logo = _Logo;
                    var _DateCreated = new System.DateTime[newLength];
                    DateCreated.CopyTo(_DateCreated);
                    DateCreated = _DateCreated;

                }
                InstitutionId.Span[Count] = type.InstitutionId;
                Code.Span[Count] = type.Code;
                Name.Span[Count] = type.Name;
                PostalAddress.Span[Count] = type.PostalAddress;
                Email.Span[Count] = type.Email;
                Country.Span[Count] = type.Country;
                City.Span[Count] = type.City;
                Telephone.Span[Count] = type.Telephone;
                Logo.Span[Count] = type.Logo;
                DateCreated.Span[Count] = type.DateCreated;
                Count++;
            }
        }

        public int Count;
        public Memory<string> InstitutionId;
        public Memory<string> Code;
        public Memory<string> Name;
        public Memory<string> PostalAddress;
        public Memory<string> Email;
        public Memory<string> Country;
        public Memory<string> City;
        public Memory<string> Telephone;
        public Memory<string> Logo;
        public Memory<System.DateTime> DateCreated;
    }
}
