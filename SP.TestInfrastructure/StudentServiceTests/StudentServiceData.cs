using SP.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.TestInfrastructure.StudentServiceTest
{
    public static class StudentServiceData
    {
        public static AddStudentRequest GetStudent()
        {
            return new AddStudentRequest
            {
                IndexNumber = "12345fd",
                ReferenceNumber = "12345de",
                Surname = "Lawson",
                Othernames = "Kobina",
                Title = "Mr",
                Gender = "M",
                MaritalStatus = "Single",
                DateofBirth = "6/8/1991",
                Country = "Ghana",
                Region = "Western Region",
                HomeTown = "Cape Coast",
                Disability = false,
                Address1 = "Berlin Top",
                Address2 = "Dominion City",
                Contact1 = "0205742832",
                Contact2 = "0124585145",
                PersonalEmail = "kobiman91@gmail.com",
                StudentType = "Undergraduate",
                EnrolmentOption = "Regular",
                ResidentialStatus = "Resident",
                ProgramOfStudy = "BSc. Computer Science",
                Specialization = "Software Engineering",
                ProgramStatus = "Inprogress",
                UniversityEmail = "kobina.lawson@uenr.edu.gh",
                Level = "400",
                DateOfEntry = DateTime.Now,
                PamentOption = "GFP"
            };
        }

        public static IEnumerable<AddStudentRequest> GetStudents()
        {
            return new List<AddStudentRequest>
            {
                new AddStudentRequest
                {
                    IndexNumber = "123454kk",
                    ReferenceNumber = "12345dd",
                    Surname = "Lawson",
                    Othernames = "Kobina",
                    Title = "Mr",
                    Gender = "M",
                    MaritalStatus = "Single",
                    DateofBirth = "6/8/1991",
                    Country = "Ghana",
                    Region = "Western Region",
                    HomeTown = "Cape Coast",
                    Disability = false,
                    Contact1 = "0205742832",
                    Contact2 = "0214578512",
                    Address1 = "Berlin Top",
                    Address2 = "Dominion City",
                    PersonalEmail = "kobiman91@gmail.com",
                    StudentType = "Undergraduate",
                    EnrolmentOption = "Regular",
                    ResidentialStatus = "Resident",
                    ProgramOfStudy = "BSc. Computer Science",
                    Specialization = "Software Engineering",
                    ProgramStatus = "Inprogress",
                    UniversityEmail = "kobina.lawson@uenr.edu.gh",
                    Level = "400",
                    DateOfEntry = DateTime.Now,
                    PamentOption = "GFP"
                },

                new AddStudentRequest
                {
                    IndexNumber = "123454d",
                    ReferenceNumber = "123445d",
                    Surname = "Lawson",
                    Othernames = "Kobina",
                    Title = "Mr",
                    Gender = "M",
                    MaritalStatus = "Single",
                    DateofBirth = "6/8/1991",
                    Country = "Ghana",
                    Region = "Western Region",
                    HomeTown = "Cape Coast",
                    Disability = false,
                    Address1 = "Berlin Top",
                    Address2 = "Dominion City",
                    Contact1 = "0205742832",
                    Contact2 = "0214578512",
                    PersonalEmail = "kobiman91@gmail.com",
                    StudentType = "Undergraduate",
                    EnrolmentOption = "Regular",
                    ResidentialStatus = "Resident",
                    ProgramOfStudy = "BSc. Computer Science",
                    Specialization = "Software Engineering",
                    ProgramStatus = "Inprogress",
                    UniversityEmail = "kobina.lawson@uenr.edu.gh",
                    Level = "400",
                    DateOfEntry = DateTime.Now,
                    PamentOption = "GFP"
                }
            };
        }
    }
}
