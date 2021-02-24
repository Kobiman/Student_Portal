using SP.DAL.Repository;
using SP.Models;
using SP.Services.Interfaces.Repository;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.DAL.Repository
{
    public class LecturerRepository : Repository<Lecturer>, ILecturerRepository
    {
        public LecturerRepository(ConcurrentBag<Lecturer> collection) : base(collection)
        {
        }

        public bool AddLecturer(Lecturer lecturer)
        {
            Collection.Add(lecturer);
            DataWriter.WriterData(lecturer, nameof(Lecturer));
            return true;
        }

        public Lecturer GetLecturer(string lecturerId)
        {
            return Collection.FirstOrDefault(x => x.LecturerId == lecturerId);
        }

        public Lecturer GetLecturerByStaffId(string staffId)
        {
            return Collection.FirstOrDefault(x => x.StaffId == staffId);
        }

        public IEnumerable<Lecturer> GetLecturers()
        {
            return Collection.ToList();
        }

        public bool UpdateLecturer(Lecturer lecturer)
        {
            var originalCourse = Collection.FirstOrDefault(x => x.LecturerId == lecturer.LecturerId);
            if (originalCourse == null) return false;

            DataWriter.WriterData(originalCourse, nameof(Lecturer));
            return true;
        }
    }
}
