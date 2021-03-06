﻿using SP.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.Services.Interfaces.Repository
{
    public interface IUnitOfWork
    {
        IStudentRepository Students { get; }
        IInstitutionRepository Institutions { get; }
        ISchoolRepository Schools { get; }
        IDepartmentRepository Departments { get; }
        IProgramRepository Programs { get; }
        ICourseRepository Courses { get; }
        ILookupRepository Lookups { get; }
        ILecturerRepository Lecturers { get; }

        void SaveChanges();
        void SaveChanges<T>(T data, string table);
    }
}
