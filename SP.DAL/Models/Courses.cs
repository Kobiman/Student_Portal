using SP.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.DAL.Models
{
    public class Courses
    {
        public Memory<CourseDM> Next { get; set; }
        public int Heigth { get; set; }
        private int _limit;
        private int index;
        public Courses(int limit)
        {
            Next = new CourseDM[limit];
            _limit = limit;
            index = 0;
            Heigth = 0;
        }

        public void Add(Course course)
        {
            lock (course)
            {
                if (Heigth > _limit - 1)
                {
                    if (index == _limit) { index = 0; }
                    Next.Span[index].Add(course);
                    index++;
                }
                else
                {
                    Next.Span[Heigth] = new CourseDM(5);
                    Next.Span[index].Add(course);
                    Heigth++;
                }
            }
        }
    }

    public class CourseDM
    {
        public CourseDM(int length)
        {
            this.length = length;
            CourseId = new string[length];
            Code = new string[length];
            CourseName = new string[length];
            Credit = new int[length];
            DepartmentId = new string[length];
            State = new int[length];
        }
        public void Add(Course type)
        {

            lock (type)
            {
                if (Count == CourseId.Length)
                {
                    var newLength = CourseId.Length + 5;
                    var _CourseId = new string[newLength];
                    CourseId.CopyTo(_CourseId);
                    CourseId = _CourseId;
                    var _Code = new string[newLength];
                    Code.CopyTo(_Code);
                    Code = _Code;
                    var _CourseName = new string[newLength];
                    CourseName.CopyTo(_CourseName);
                    CourseName = _CourseName;
                    var _Credit = new int[newLength];
                    Credit.CopyTo(_Credit);
                    Credit = _Credit;
                    var _DepartmentId = new string[newLength];
                    DepartmentId.CopyTo(_DepartmentId);
                    DepartmentId = _DepartmentId;
                    var _State = new int[newLength];
                    State.CopyTo(_State);
                    State = _State;

                }
                CourseId.Span[Count] = type.CourseId;
                Code.Span[Count] = type.Code;
                CourseName.Span[Count] = type.CourseName;
                Credit.Span[Count] = type.Credit;
                DepartmentId.Span[Count] = type.DepartmentId;
                State.Span[Count] = type.State;
                Count++;
            }
        }
        private readonly int length;


        public int Count;

        public Memory<string> CourseId;
        public Memory<string> Code;
        public Memory<string> CourseName;
        public Memory<int> Credit;
        public Memory<string> DepartmentId;
        public Memory<int> State;
    }
}
