using SP.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.DAL.Models
{
    public class Schools
    {
        public Memory<SchoolDM> Next { get; set; }
        public int Heigth { get; set; }
        private int _limit;
        private int index;
        public Schools(int limit)
        {
            Next = new SchoolDM[limit];
            _limit = limit;
            index = 0;
            Heigth = 0;
        }

        public void Add(School course)
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
                    Next.Span[Heigth] = new SchoolDM(5);
                    Next.Span[index].Add(course);
                    Heigth++;
                }
            }
        }
    }

    public class SchoolDM
    {
            public SchoolDM(int length)
            {
                SchoolId = new string[length];
                Name = new string[length];
                AcademicYear = new string[length];
                Semester = new string[length];
                RegistrationActivated = new bool[length];
                ResultUploaded = new bool[length];
                InstitutionId = new string[length];
                State = new int[length];
            }
            public void Add(School type)
            {

                lock (type)
                {
                    if (Count == SchoolId.Length)
                    {
                        var newLength = SchoolId.Length + 5;
                        var _SchoolId = new string[newLength];
                        SchoolId.CopyTo(_SchoolId);
                        SchoolId = _SchoolId;
                        var _Name = new string[newLength];
                        Name.CopyTo(_Name);
                        Name = _Name;
                        var _AcademicYear = new string[newLength];
                        AcademicYear.CopyTo(_AcademicYear);
                        AcademicYear = _AcademicYear;
                        var _Semester = new string[newLength];
                        Semester.CopyTo(_Semester);
                        Semester = _Semester;
                        var _RegistrationActivated = new bool[newLength];
                        RegistrationActivated.CopyTo(_RegistrationActivated);
                        RegistrationActivated = _RegistrationActivated;
                        var _ResultUploaded = new bool[newLength];
                        ResultUploaded.CopyTo(_ResultUploaded);
                        ResultUploaded = _ResultUploaded;
                        var _InstitutionId = new string[newLength];
                        InstitutionId.CopyTo(_InstitutionId);
                        InstitutionId = _InstitutionId;
                        var _State = new int[newLength];
                        State.CopyTo(_State);
                        State = _State;

                    }
                    SchoolId.Span[Count] = type.SchoolId;
                    Name.Span[Count] = type.Name;
                    AcademicYear.Span[Count] = type.AcademicYear;
                    Semester.Span[Count] = type.Semester;
                    RegistrationActivated.Span[Count] = type.RegistrationActivated;
                    ResultUploaded.Span[Count] = type.ResultUploaded;
                    InstitutionId.Span[Count] = type.InstitutionId;
                    State.Span[Count]++;
                    Count++;
                }
            }


            public int Count;

            public Memory<string> SchoolId;
            public Memory<string> Name;
            public Memory<string> AcademicYear;
            public Memory<string> Semester;
            public Memory<bool> RegistrationActivated;
            public Memory<bool> ResultUploaded;
            public Memory<string> InstitutionId;
            public Memory<int> State;
    }
}
