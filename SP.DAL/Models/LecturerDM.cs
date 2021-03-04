using SP.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.DAL.Models
{
    public class Lecturers
    {
        public Memory<LecturerDM> Next { get; set; }
        public int Heigth { get; set; }
        private int _limit;
        private int index;
        public Lecturers(int limit)
        {
            Next = new LecturerDM[limit];
            _limit = limit;
            index = 0;
            Heigth = 0;
        }

        public void Add(Lecturer lecturer)
        {
            lock (lecturer)
            {
                if (Heigth > _limit - 1)
                {
                    if (index == _limit) { index = 0; }
                    Next.Span[index].Add(lecturer);
                    index++;
                }
                else
                {
                    Next.Span[Heigth] = new LecturerDM(10);
                    Next.Span[index].Add(lecturer);
                    Heigth++;
                }
            }
        }
    }

    public class LecturerDM
    {
        public LecturerDM(int length)
        {
            this.length = length;
            LecturerId = new string[length];
            StaffId = new string[length];
            Name = new string[length];
            Telephone = new string[length];
            Email = new string[length];
            Address = new string[length];
            DepartmentId = new string[length];
            State = new int[length];
        }
        public void Add(Lecturer type)
        {

            lock (type)
            {
                if (Count == LecturerId.Length)
                {
                    var newLength = LecturerId.Length + 1000;
                    var _LecturerId = new string[newLength];
                    LecturerId.CopyTo(_LecturerId);
                    LecturerId = _LecturerId;
                    var _StaffId = new string[newLength];
                    StaffId.CopyTo(_StaffId);
                    StaffId = _StaffId;
                    var _Name = new string[newLength];
                    Name.CopyTo(_Name);
                    Name = _Name;
                    var _Telephone = new string[newLength];
                    Telephone.CopyTo(_Telephone);
                    Telephone = _Telephone;
                    var _Email = new string[newLength];
                    Email.CopyTo(_Email);
                    Email = _Email;
                    var _Address = new string[newLength];
                    Address.CopyTo(_Address);
                    Address = _Address;
                    var _DepartmentId = new string[newLength];
                    DepartmentId.CopyTo(_DepartmentId);
                    DepartmentId = _DepartmentId;
                    var _State = new int[newLength];
                    State.CopyTo(_State);
                    State = _State;

                }
                LecturerId.Span[Count] = type.LecturerId;
                StaffId.Span[Count] = type.StaffId;
                Name.Span[Count] = type.Name;
                Telephone.Span[Count] = type.Telephone;
                Email.Span[Count] = type.Email;
                Address.Span[Count] = type.Address;
                DepartmentId.Span[Count] = type.DepartmentId;
                State.Span[Count]++;
                Count++;
            }
        }
        private readonly int length;


        public int Count;

        public Memory<string> LecturerId;
        public Memory<string> StaffId;
        public Memory<string> Name;
        public Memory<string> Telephone;
        public Memory<string> Email;
        public Memory<string> Address;
        public Memory<string> DepartmentId;
        public Memory<int> State;
    }
}
