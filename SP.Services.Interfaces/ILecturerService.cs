﻿using SP.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.Services.Interfaces
{
    public interface ILecturerService
    {
        IResult AddLecturer(Lecturer lecturer);
        IResult GetLecturer(string lecturerId);
        IResult GetLecturers();
        IResult UpdateLecturer(Lecturer lecturer);
        IResult GetLecturerByStaffId(string staffId);
    }
}
