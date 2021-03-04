using SP.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.DAL.Models
{
    public class RegisteredCourseDM
    {
        public RegisteredCourseDM(int length)
        {
            this.length = length;
            RegisteredCourseId = new string[length];
            RegistrationDate = new System.DateTime[length];
            StudentId = new string[length];
            Semester = new string[length];
            MountedCourseId = new string[length];
            AcademicYear = new string[length];
            Approved = new bool[length];
        }
        public void Add(RegisteredCourse type)
        {

            lock (type)
            {
                if (Count == RegisteredCourseId.Length)
                {
                    var newLength = RegisteredCourseId.Length + 1000;
                    var _RegisteredCourseId = new string[newLength];
                    RegisteredCourseId.CopyTo(_RegisteredCourseId);
                    RegisteredCourseId = _RegisteredCourseId;
                    var _RegistrationDate = new System.DateTime[newLength];
                    RegistrationDate.CopyTo(_RegistrationDate);
                    RegistrationDate = _RegistrationDate;
                    var _StudentId = new string[newLength];
                    StudentId.CopyTo(_StudentId);
                    StudentId = _StudentId;
                    var _Semester = new string[newLength];
                    Semester.CopyTo(_Semester);
                    Semester = _Semester;
                    var _MountedCourseId = new string[newLength];
                    MountedCourseId.CopyTo(_MountedCourseId);
                    MountedCourseId = _MountedCourseId;
                    var _AcademicYear = new string[newLength];
                    AcademicYear.CopyTo(_AcademicYear);
                    AcademicYear = _AcademicYear;
                    var _Approved = new bool[newLength];
                    Approved.CopyTo(_Approved);
                    Approved = _Approved;

                }
                RegisteredCourseId.Span[Count] = type.RegisteredCourseId;
                RegistrationDate.Span[Count] = type.RegistrationDate;
                StudentId.Span[Count] = type.StudentId;
                Semester.Span[Count] = type.Semester;
                MountedCourseId.Span[Count] = type.MountedCourseId;
                AcademicYear.Span[Count] = type.AcademicYear;
                Approved.Span[Count] = type.Approved;
            }
        }
        private readonly int length;


        public int Count;

        public Memory<string> RegisteredCourseId;
        public Memory<System.DateTime> RegistrationDate;
        public Memory<string> StudentId;
        public Memory<string> Semester;
        public Memory<string> MountedCourseId;
        public Memory<string> AcademicYear;
        public Memory<bool> Approved;
    }
}
