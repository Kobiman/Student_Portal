using SP.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.DAL.Models
{
    public class Students
    {
        public Memory<StudentDM> Next { get; set; }
        public int Heigth { get; set; }
        private int _limit;
        private int index;
        public Students(int limit)
        {
            Next = new StudentDM[limit];
            _limit = limit;
            index = 0;
            Heigth = 0;
        }

        public void Add(Student student)
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
                    Next.Span[Heigth] = new StudentDM(1000);
                    Next.Span[index].Add(student);
                    Heigth++;
                }
            }
        }
    }

    public class StudentDM
    {
        public StudentDM(int length)
        {
            this.length = length;
            StudentId = new string[length];
            IndexNumber = new string[length];
            ReferenceNumber = new string[length];
            Surname = new string[length];
            Othernames = new string[length];
            Title = new string[length];
            Gender = new string[length];
            MaritalStatus = new string[length];
            DateofBirth = new string[length];
            Disability = new bool[length];
            Country = new string[length];
            Region = new string[length];
            HomeTown = new string[length];
            Address1 = new string[length];
            Address2 = new string[length];
            Contact1 = new string[length];
            Contact2 = new string[length];
            PersonalEmail = new string[length];
            UniversityEmail = new string[length];
            ResidentialStatus = new string[length];
            ProgramOfStudy = new string[length];
            Specialization = new string[length];
            ProgramStatus = new string[length];
            Level = new string[length];
            StudentType = new string[length];
            EnrollmentOption = new string[length];
            RegistrationStatus = new string[length];
            DateOfEntry = new System.DateTime[length];
            DateOfCompletion = new System.DateTime[length];
            Results = new StudentResultDM[length];
            RegisteredCourses = new RegisteredCourseDM[length];
            EmergencyContact = new EmergencyContactDM[length];
            //Owning = new bool[length];
            //FeesBalance = new string[length];
            PamentOption = new string[length];
            DepartmentId = new string[length];
            State = new int[length];
        }
        public void Add(Student student)
        {

            lock (student)
            {
                if (Count == StudentId.Length)
                {
                    var newLength = StudentId.Length + 1000;
                    var _StudentId = new string[newLength];
                    StudentId.CopyTo(_StudentId);
                    StudentId = _StudentId;
                    var _IndexNumber = new string[newLength];
                    IndexNumber.CopyTo(_IndexNumber);
                    IndexNumber = _IndexNumber;
                    var _ReferenceNumber = new string[newLength];
                    ReferenceNumber.CopyTo(_ReferenceNumber);
                    ReferenceNumber = _ReferenceNumber;
                    var _Surname = new string[newLength];
                    Surname.CopyTo(_Surname);
                    Surname = _Surname;
                    var _Othernames = new string[newLength];
                    Othernames.CopyTo(_Othernames);
                    Othernames = _Othernames;
                    var _Title = new string[newLength];
                    Title.CopyTo(_Title);
                    Title = _Title;
                    var _Gender = new string[newLength];
                    Gender.CopyTo(_Gender);
                    Gender = _Gender;
                    var _MaritalStatus = new string[newLength];
                    MaritalStatus.CopyTo(_MaritalStatus);
                    MaritalStatus = _MaritalStatus;
                    var _DateofBirth = new string[newLength];
                    DateofBirth.CopyTo(_DateofBirth);
                    DateofBirth = _DateofBirth;
                    var _Disability = new bool[newLength];
                    Disability.CopyTo(_Disability);
                    Disability = _Disability;
                    var _Country = new string[newLength];
                    Country.CopyTo(_Country);
                    Country = _Country;
                    var _Region = new string[newLength];
                    Region.CopyTo(_Region);
                    Region = _Region;
                    var _HomeTown = new string[newLength];
                    HomeTown.CopyTo(_HomeTown);
                    HomeTown = _HomeTown;
                    var _Address1 = new string[newLength];
                    Address1.CopyTo(_Address1);
                    Address1 = _Address1;
                    var _Address2 = new string[newLength];
                    Address2.CopyTo(_Address2);
                    Address2 = _Address2;
                    var _Contact1 = new string[newLength];
                    Contact1.CopyTo(_Contact1);
                    Contact1 = _Contact1;
                    var _Contact2 = new string[newLength];
                    Contact2.CopyTo(_Contact2);
                    Contact2 = _Contact2;
                    var _PersonalEmail = new string[newLength];
                    PersonalEmail.CopyTo(_PersonalEmail);
                    PersonalEmail = _PersonalEmail;
                    var _UniversityEmail = new string[newLength];
                    UniversityEmail.CopyTo(_UniversityEmail);
                    UniversityEmail = _UniversityEmail;
                    var _ResidentialStatus = new string[newLength];
                    ResidentialStatus.CopyTo(_ResidentialStatus);
                    ResidentialStatus = _ResidentialStatus;
                    var _ProgramOfStudy = new string[newLength];
                    ProgramOfStudy.CopyTo(_ProgramOfStudy);
                    ProgramOfStudy = _ProgramOfStudy;
                    var _Specialization = new string[newLength];
                    Specialization.CopyTo(_Specialization);
                    Specialization = _Specialization;
                    var _ProgramStatus = new string[newLength];
                    ProgramStatus.CopyTo(_ProgramStatus);
                    ProgramStatus = _ProgramStatus;
                    var _Level = new string[newLength];
                    Level.CopyTo(_Level);
                    Level = _Level;
                    var _StudentType = new string[newLength];
                    StudentType.CopyTo(_StudentType);
                    StudentType = _StudentType;
                    var _EnrollmentOption = new string[newLength];
                    EnrollmentOption.CopyTo(_EnrollmentOption);
                    EnrollmentOption = _EnrollmentOption;
                    var _RegistrationStatus = new string[newLength];
                    RegistrationStatus.CopyTo(_RegistrationStatus);
                    RegistrationStatus = _RegistrationStatus;
                    var _DateOfEntry = new System.DateTime[newLength];
                    DateOfEntry.CopyTo(_DateOfEntry);
                    DateOfEntry = _DateOfEntry;
                    var _DateOfCompletion = new System.DateTime[newLength];
                    DateOfCompletion.CopyTo(_DateOfCompletion);
                    DateOfCompletion = _DateOfCompletion;
                    var _Results = new StudentResultDM[newLength];;
                    Results.CopyTo(_Results);
                    Results = _Results;
                    var _RegisteredCourses = new RegisteredCourseDM[newLength]; 
                    RegisteredCourses.CopyTo(_RegisteredCourses);
                    RegisteredCourses = _RegisteredCourses;
                    var _EmergencyContact = new EmergencyContactDM[newLength];
                    EmergencyContact.CopyTo(_EmergencyContact);
                    EmergencyContact = _EmergencyContact;
                    var _Owning = new bool[newLength];
                    //Owning.CopyTo(_Owning);
                    //Owning = _Owning;
                    //var _FeesBalance = new string[newLength];
                    //FeesBalance.CopyTo(_FeesBalance);
                    //FeesBalance = _FeesBalance;
                    var _PamentOption = new string[newLength];
                    PamentOption.CopyTo(_PamentOption);
                    PamentOption = _PamentOption;
                    var _DepartmentId = new string[newLength];
                    DepartmentId.CopyTo(_DepartmentId);
                    DepartmentId = _DepartmentId;
                    var _State = new int[newLength];
                    State.CopyTo(_State);
                    State = _State;
                }
                StudentId.Span[Count] = student.StudentId;
                IndexNumber.Span[Count] = student.IndexNumber;
                ReferenceNumber.Span[Count] = student.ReferenceNumber;
                Surname.Span[Count] = student.Surname;
                Othernames.Span[Count] = student.Othernames;
                Title.Span[Count] = student.Title;
                Gender.Span[Count] = student.Gender;
                MaritalStatus.Span[Count] = student.MaritalStatus;
                DateofBirth.Span[Count] = student.DateofBirth;
                Disability.Span[Count] = student.Disability;
                Country.Span[Count] = student.Country;
                Region.Span[Count] = student.Region;
                HomeTown.Span[Count] = student.HomeTown;
                Address1.Span[Count] = student.Address1;
                Address2.Span[Count] = student.Address2;
                Contact1.Span[Count] = student.Contact1;
                Contact2.Span[Count] = student.Contact2;
                PersonalEmail.Span[Count] = student.PersonalEmail;
                UniversityEmail.Span[Count] = student.UniversityEmail;
                ResidentialStatus.Span[Count] = student.ResidentialStatus;
                ProgramOfStudy.Span[Count] = student.ProgramOfStudy;
                Specialization.Span[Count] = student.Specialization;
                ProgramStatus.Span[Count] = student.ProgramStatus;
                Level.Span[Count] = student.Level;
                StudentType.Span[Count] = student.StudentType;
                EnrollmentOption.Span[Count] = student.EnrollmentOption;
                RegistrationStatus.Span[Count] = student.RegistrationStatus;
                DateOfEntry.Span[Count] = student.DateOfEntry;
                DateOfCompletion.Span[Count] = student.DateOfCompletion;

                //Owning.Span[Count] = student.Owning;
                //FeesBalance.Span[Count] = student.FeesBalance;
                PamentOption.Span[Count] = student.PamentOption;
                DepartmentId.Span[Count] = student.DepartmentId;
                State.Span[Count]++;
                Count++;

                Results.Span[Count] = new StudentResultDM(length);
                if (student.Results?.Count > 0)
                {
                    foreach (var t in student.Results)
                    {
                        Results.Span[Count].Add(t);
                    }
                }

                EmergencyContact.Span[Count] = new EmergencyContactDM(length);
                if (student.EmergencyContact?.Count > 0)
                {
                    foreach (var t in student.EmergencyContact)
                    {
                        EmergencyContact.Span[Count].Add(t);
                    }
                }

                RegisteredCourses.Span[Count] = new RegisteredCourseDM(length);
                if (student.RegisteredCourses?.Count > 0)
                {
                    foreach (var t in student.RegisteredCourses)
                    {
                        RegisteredCourses.Span[Count].Add(t);
                    }
                }
            }
        }
        private readonly int length;


        public int Count;

        public Memory<string> StudentId;
        public Memory<string> IndexNumber;
        public Memory<string> ReferenceNumber;
        public Memory<string> Surname;
        public Memory<string> Othernames;
        public Memory<string> Title;
        public Memory<string> Gender;
        public Memory<string> MaritalStatus;
        public Memory<string> DateofBirth;
        public Memory<bool> Disability;
        public Memory<string> Country;
        public Memory<string> Region;
        public Memory<string> HomeTown;
        public Memory<string> Address1;
        public Memory<string> Address2;
        public Memory<string> Contact1;
        public Memory<string> Contact2;
        public Memory<string> PersonalEmail;
        public Memory<string> UniversityEmail;
        public Memory<string> ResidentialStatus;
        public Memory<string> ProgramOfStudy;
        public Memory<string> Specialization;
        public Memory<string> ProgramStatus;
        public Memory<string> Level;
        public Memory<string> StudentType;
        public Memory<string> EnrollmentOption;
        public Memory<string> RegistrationStatus;
        public Memory<System.DateTime> DateOfEntry;
        public Memory<System.DateTime> DateOfCompletion;
        public Memory<StudentResultDM> Results;
        public Memory<RegisteredCourseDM> RegisteredCourses;
        public Memory<EmergencyContactDM> EmergencyContact;
        //public Memory<bool> Owning;
        //public Memory<string> FeesBalance;
        public Memory<string> PamentOption;
        public Memory<string> DepartmentId;
        public Memory<int> State;
    }
}
