using SP.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.DAL.Models
{
    public class Programs
    {
        public Memory<ProgramDM> Next { get; set; }
        public int Heigth { get; set; }
        private int _limit;
        private int index;
        public Programs(int limit)
        {
            Next = new ProgramDM[limit];
            _limit = limit;
            index = 0;
            Heigth = 0;
        }

        public void Add(Program student)
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
                    Next.Span[Heigth] = new ProgramDM(10);
                    Next.Span[index].Add(student);
                    Heigth++;
                }
            }
        }
    }

    public class ProgramDM
    {
        public ProgramDM(int length)
        {
            this.length = length;
            ProgramId = new string[length];
            Name = new string[length];
            Duration = new string[length];
            Limit = new int[length];
            DepartmentId = new string[length];
            Specializations = new SpecializationDM[length];
            MountedCourses = new MountedCourseDM[length];
        }
        public void Add(Program type)
        {

            lock (type)
            {
                if (Count == ProgramId.Length)
                {
                    var newLength = ProgramId.Length + 4;
                    var _ProgramId = new string[newLength];
                    ProgramId.CopyTo(_ProgramId);
                    ProgramId = _ProgramId;
                    var _Name = new string[newLength];
                    Name.CopyTo(_Name);
                    Name = _Name;
                    var _Duration = new string[newLength];
                    Duration.CopyTo(_Duration);
                    Duration = _Duration;
                    var _Limit = new int[newLength];
                    Limit.CopyTo(_Limit);
                    Limit = _Limit;
                    var _DepartmentId = new string[newLength];
                    DepartmentId.CopyTo(_DepartmentId);
                    DepartmentId = _DepartmentId;
                    var _Specializations = new SpecializationDM[newLength];
                    Specializations.CopyTo(_Specializations);
                    Specializations = _Specializations;
                    var _mountedCourseDM = new MountedCourseDM[newLength];
                    MountedCourses.CopyTo(_mountedCourseDM);
                    MountedCourses = _mountedCourseDM;
                }
                ProgramId.Span[Count] = type.ProgramId;
                Name.Span[Count] = type.Name;
                Duration.Span[Count] = type.Duration;
                Limit.Span[Count] = type.Limit;
                DepartmentId.Span[Count] = type.DepartmentId;

                Specializations.Span[Count] = new SpecializationDM(length);
                if (type.Specializations?.Count > 0)
                {
                    foreach (var t in type.Specializations)
                    {
                        Specializations.Span[Count].Add(t);
                    }
                }

                MountedCourses.Span[Count] = new MountedCourseDM(length);
                if (type.MountedCourses?.Count > 0)
                {
                    foreach (var t in type.MountedCourses)
                    {
                        MountedCourses.Span[Count].Add(t);
                    }
                }
                Count++;
            }
        }
        private readonly int length;


        public int Count;

        public Memory<string> ProgramId;
        public Memory<string> Name;
        public Memory<string> Duration;
        public Memory<int> Limit;
        public Memory<string> DepartmentId;
        public Memory<SpecializationDM> Specializations;
        public Memory<MountedCourseDM> MountedCourses;
    }
}
