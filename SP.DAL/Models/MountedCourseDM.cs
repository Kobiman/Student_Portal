using SP.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.DAL.Models
{
    public class MountedCourses
    {
        public Memory<MountedCourseDM> Next { get; set; }
        public int Heigth { get; set; }
        private int _limit;
        private int index;
        public MountedCourses(int limit)
        {
            Next = new MountedCourseDM[limit];
            _limit = limit;
            index = 0;
            Heigth = 0;
        }

        public void Add(MountedCourse student)
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
                    Next.Span[Heigth] = new MountedCourseDM(100);
                    Next.Span[index].Add(student);
                    Heigth++;
                }
            }
        }
    }
    public class MountedCourseDM
    {
        public MountedCourseDM(int length)
        {
            //this.length = length;
            MountedCoureId = new string[length];
            EnrollmentOption = new string[length];
            Level = new string[length];
            MaxLimit = new int[length];
            MinLimit = new int[length];
            Semester = new string[length];
            AcademicYear = new string[length];
            ProgramId = new string[length];
            AssignedBy = new string[length];
            Date = new System.DateTime[length];
            CourseName = new string[length];
            CourseCode = new string[length];
            AssignedTo = new string[length];
            Specialization = new string[length];
            Category = new string[length];
            Scoring = new bool[length];
            Credit = new int[length];
        }
        public void Add(MountedCourse type)
        {

            lock (type)
            {
                if (Count == MountedCoureId.Length)
                {
                    var newLength = MountedCoureId.Length + 10;
                    var _MountedCoureId = new string[newLength];
                    MountedCoureId.CopyTo(_MountedCoureId);
                    MountedCoureId = _MountedCoureId;
                    var _EnrollmentOption = new string[newLength];
                    EnrollmentOption.CopyTo(_EnrollmentOption);
                    EnrollmentOption = _EnrollmentOption;
                    var _Level = new string[newLength];
                    Level.CopyTo(_Level);
                    Level = _Level;
                    var _MaxLimit = new int[newLength];
                    MaxLimit.CopyTo(_MaxLimit);
                    MaxLimit = _MaxLimit;
                    var _MinLimit = new int[newLength];
                    MinLimit.CopyTo(_MinLimit);
                    MinLimit = _MinLimit;
                    var _Semester = new string[newLength];
                    Semester.CopyTo(_Semester);
                    Semester = _Semester;
                    var _AcademicYear = new string[newLength];
                    AcademicYear.CopyTo(_AcademicYear);
                    AcademicYear = _AcademicYear;
                    var _ProgramId = new string[newLength];
                    ProgramId.CopyTo(_ProgramId);
                    ProgramId = _ProgramId;
                    var _AssignedBy = new string[newLength];
                    AssignedBy.CopyTo(_AssignedBy);
                    AssignedBy = _AssignedBy;
                    var _Date = new System.DateTime[newLength];
                    Date.CopyTo(_Date);
                    Date = _Date;
                    var _CourseName = new string[newLength];
                    CourseName.CopyTo(_CourseName);
                    CourseName = _CourseName;
                    var _CourseCode = new string[newLength];
                    CourseCode.CopyTo(_CourseCode);
                    CourseCode = _CourseCode;
                    var _AssignedTo = new string[newLength];
                    AssignedTo.CopyTo(_AssignedTo);
                    AssignedTo = _AssignedTo;
                    var _Specialization = new string[newLength];
                    Specialization.CopyTo(_Specialization);
                    Specialization = _Specialization;
                    var _Category = new string[newLength];
                    Category.CopyTo(_Category);
                    Category = _Category;
                    var _Scoring = new bool[newLength];
                    Scoring.CopyTo(_Scoring);
                    Scoring = _Scoring;
                    var _Credit = new int[newLength];
                    Credit.CopyTo(_Credit);
                    Credit = _Credit;
                }

                MountedCoureId.Span[Count] = type.MountedCoureId;
                EnrollmentOption.Span[Count] = type.EnrollmentOption;
                Level.Span[Count] = type.Level;
                MaxLimit.Span[Count] = type.MaxLimit;
                MinLimit.Span[Count] = type.MinLimit;
                Semester.Span[Count] = type.Semester;
                AcademicYear.Span[Count] = type.AcademicYear;
                ProgramId.Span[Count] = type.ProgramId;
                AssignedBy.Span[Count] = type.AssignedBy;
                Date.Span[Count] = type.Date;
                CourseName.Span[Count] = type.CourseName;
                CourseCode.Span[Count] = type.CourseCode;
                AssignedTo.Span[Count] = type.AssignedTo;
                Specialization.Span[Count] = type.Specialization;
                Category.Span[Count] = type.Category;
                Scoring.Span[Count] = type.Scoring;
                Credit.Span[Count] = type.Credit;
                Count++;
            }
        }
        //private readonly int length;


        public int Count;

        public Memory<string> MountedCoureId;
        public Memory<string> EnrollmentOption;
        public Memory<string> Level;
        public Memory<int> MaxLimit;
        public Memory<int> MinLimit;
        public Memory<string> Semester;
        public Memory<string> AcademicYear;
        public Memory<string> ProgramId;
        public Memory<string> AssignedBy;
        public Memory<System.DateTime> Date;
        public Memory<string> CourseName;
        public Memory<string> CourseCode;
        public Memory<string> AssignedTo;
        public Memory<string> Specialization;
        public Memory<string> Category;
        public Memory<bool> Scoring;
        public Memory<int> Credit;
    }
}
