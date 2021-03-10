using SP.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.DAL.Models
{
    public class Departments
    {
        public Memory<DepartmentDM> Next { get; set; }
        public int Heigth { get; set; }
        private int _limit;
        private int index;
        public Departments(int limit)
        {
            Next = new DepartmentDM[limit];
            _limit = limit;
            index = 0;
            Heigth = 0;
        }

        public void Add(Department student)
        {
            lock (student)
            {
                if (Heigth > _limit - 1)
                {
                    if (index == _limit) { index = 0; }
                    Next.Span[index].Add(student);
                    index++;
                }
                else
                {
                    Next.Span[Heigth] = new DepartmentDM(5);
                    Next.Span[index].Add(student);
                    Heigth++;
                }
            }
        }
    }
    public class DepartmentDM
    {
        public DepartmentDM(int length)
        {
            this.length = length;
            DepartmentId = new string[length];
            Name = new string[length];
            Code = new string[length];
            CourseMounting = new bool[length];
            SchoolId = new string[length];
            State = new int[length];
        }
        public void Add(Department type)
        {
            lock (type)
            {
                if (Count == DepartmentId.Length)
                {
                    var newLength = DepartmentId.Length + 5;
                    var _DepartmentId = new string[newLength];
                    DepartmentId.CopyTo(_DepartmentId);
                    DepartmentId = _DepartmentId;
                    var _Name = new string[newLength];
                    Name.CopyTo(_Name);
                    Name = _Name;
                    var _Code = new string[newLength];
                    Code.CopyTo(_Code);
                    Code = _Code;
                    var _CourseMounting = new bool[newLength];
                    CourseMounting.CopyTo(_CourseMounting);
                    CourseMounting = _CourseMounting;
                    var _SchoolId = new string[newLength];
                    SchoolId.CopyTo(_SchoolId);
                    SchoolId = _SchoolId;
                    var _State = new int[newLength];
                    State.CopyTo(_State);
                    State = _State;
                }
                DepartmentId.Span[Count] = type.DepartmentId;
                Name.Span[Count] = type.Name;
                Code.Span[Count] = type.Code;
                CourseMounting.Span[Count] = type.CourseMounting;
                SchoolId.Span[Count] = type.SchoolId;
                State.Span[Count]++;
                Count++;
            }
        }
        private readonly int length;


        public int Count;

        public Memory<string> DepartmentId;
        public Memory<string> Name;
        public Memory<string> Code;
        public Memory<bool> CourseMounting;
        public Memory<string> SchoolId;
        public Memory<int> State;
    }
}
