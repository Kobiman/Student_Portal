using SP.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.DAL.Models
{
    public class StudentResultDM
    {
        public StudentResultDM(int length)
        {
            this.length = length;
            Date = new System.DateTime[length];
            ExamResultId = new string[length];
            StudentId = new string[length];
            AcademicYear = new string[length];
            Semester = new string[length];
            Credit = new int[length];
            ProgramId = new string[length];
            Level = new string[length];
            RegisteredCourseId = new string[length];
            Grade = new string[length];
            GradePoint = new decimal[length];
            ClassMark = new decimal[length];
            ExamMark = new decimal[length];
            TotalMark = new decimal[length];
            Scoring = new bool[length];
            LecturerId = new string[length];
        }
        public void Add(StudentResult type)
        {

            lock (type)
            {
                if (Count == Date.Length)
                {
                    var newLength = Date.Length + 1000;
                    var _Date = new System.DateTime[newLength];
                    Date.CopyTo(_Date);
                    Date = _Date;
                    var _ExamResultId = new string[newLength];
                    ExamResultId.CopyTo(_ExamResultId);
                    ExamResultId = _ExamResultId;
                    var _StudentId = new string[newLength];
                    StudentId.CopyTo(_StudentId);
                    StudentId = _StudentId;
                    var _AcademicYear = new string[newLength];
                    AcademicYear.CopyTo(_AcademicYear);
                    AcademicYear = _AcademicYear;
                    var _Semester = new string[newLength];
                    Semester.CopyTo(_Semester);
                    Semester = _Semester;
                    var _Credit = new int[newLength];
                    Credit.CopyTo(_Credit);
                    Credit = _Credit;
                    var _ProgramId = new string[newLength];
                    ProgramId.CopyTo(_ProgramId);
                    ProgramId = _ProgramId;
                    var _Level = new string[newLength];
                    Level.CopyTo(_Level);
                    Level = _Level;
                    var _RegisteredCourseId = new string[newLength];
                    RegisteredCourseId.CopyTo(_RegisteredCourseId);
                    RegisteredCourseId = _RegisteredCourseId;
                    var _Grade = new string[newLength];
                    Grade.CopyTo(_Grade);
                    Grade = _Grade;
                    var _GradePoint = new decimal[newLength];
                    GradePoint.CopyTo(_GradePoint);
                    GradePoint = _GradePoint;
                    var _ClassMark = new decimal[newLength];
                    ClassMark.CopyTo(_ClassMark);
                    ClassMark = _ClassMark;
                    var _ExamMark = new decimal[newLength];
                    ExamMark.CopyTo(_ExamMark);
                    ExamMark = _ExamMark;
                    var _TotalMark = new decimal[newLength];
                    TotalMark.CopyTo(_TotalMark);
                    TotalMark = _TotalMark;
                    var _Scoring = new bool[newLength];
                    Scoring.CopyTo(_Scoring);
                    Scoring = _Scoring;
                    var _LecturerId = new string[newLength];
                    LecturerId.CopyTo(_LecturerId);
                    LecturerId = _LecturerId;

                }
                Date.Span[Count] = type.Date;
                ExamResultId.Span[Count] = type.ExamResultId;
                StudentId.Span[Count] = type.StudentId;
                AcademicYear.Span[Count] = type.AcademicYear;
                Semester.Span[Count] = type.Semester;
                Credit.Span[Count] = type.Credit;
                ProgramId.Span[Count] = type.ProgramId;
                Level.Span[Count] = type.Level;
                RegisteredCourseId.Span[Count] = type.RegisteredCourseId;
                Grade.Span[Count] = type.Grade;
                GradePoint.Span[Count] = type.GradePoint;
                ClassMark.Span[Count] = type.ClassMark;
                ExamMark.Span[Count] = type.ExamMark;
                TotalMark.Span[Count] = type.TotalMark;
                Scoring.Span[Count] = type.Scoring;
                LecturerId.Span[Count] = type.LecturerId;
            }
        }
        private readonly int length;


        public int Count;

        public Memory<System.DateTime> Date;
        public Memory<string> ExamResultId;
        public Memory<string> StudentId;
        public Memory<string> AcademicYear;
        public Memory<string> Semester;
        public Memory<int> Credit;
        public Memory<string> ProgramId;
        public Memory<string> Level;
        public Memory<string> RegisteredCourseId;
        public Memory<string> Grade;
        public Memory<decimal> GradePoint;
        public Memory<decimal> ClassMark;
        public Memory<decimal> ExamMark;
        public Memory<decimal> TotalMark;
        public Memory<bool> Scoring;
        public Memory<string> LecturerId;
    }
}
