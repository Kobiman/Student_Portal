using SP.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.Services.Interfaces.Repository
{
    public interface ILecturerRepository
    {
        bool AddLecturer(Lecturer lecturer);
        Lecturer GetLecturer(string lecturerId);
        IEnumerable<Lecturer> GetLecturers();
        bool UpdateLecturer(Lecturer lecturer);
        Lecturer GetLecturerByStaffId(string staffId);
    }
}
