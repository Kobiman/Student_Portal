using SP.DAL.Models;
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
    public class LecturerRepository : ILecturerRepository
    {
        private Lecturers Collection;
        public LecturerRepository(Lecturers collection)
        {
            Collection = collection;
        }

        public bool AddLecturer(Lecturer lecturer)
        {
            Collection.Add(lecturer);
            DataWriter.Add(lecturer, nameof(Lecturer));
            return true;
        }

        public Lecturer GetLecturer(string lecturerId)
        {
            var result = Collection.Next.Find((x, y) => x.LecturerId.Span[y] == lecturerId);
            return CreateLecturer(result);
        }

        public Lecturer GetLecturerByStaffId(string staffId)
        {
            var result = Collection.Next.Find((x, y) => x.StaffId.Span[y] == staffId);
            return CreateLecturer(result);
        }

        public IEnumerable<Lecturer> GetLecturers()
        {
            return Collection.Next.Select((x, y) => CreateLecturer(x, y));
        }

        public bool UpdateLecturer(Lecturer lecturer)
        {
            var result = Collection.Next.Find((x, y) => x.LecturerId.Span[y] == lecturer.LecturerId);
            var originalCourse = CreateLecturer(result);
            if (originalCourse == null) return false;

            DataWriter.Add(originalCourse, nameof(Lecturer));
            return true;
        }

        private Lecturer CreateLecturer((LecturerDM Value, int Index, bool Success) result)
        {
            if (!result.Success) return null;
            return new Lecturer
            {
                Address = result.Value.Address.Span[result.Index],
                DepartmentId = result.Value.DepartmentId.Span[result.Index],
                Email = result.Value.Email.Span[result.Index],
                LecturerId = result.Value.LecturerId.Span[result.Index],
                Name = result.Value.Name.Span[result.Index],
                StaffId = result.Value.StaffId.Span[result.Index],
                Telephone = result.Value.Telephone.Span[result.Index],
                State = result.Value.State.Span[result.Index]
            };
        }

        private Lecturer CreateLecturer(LecturerDM Value, int Index)
        {
            return new Lecturer
            {
                Address = Value.Address.Span[Index],
                DepartmentId = Value.DepartmentId.Span[Index],
                Email = Value.Email.Span[Index],
                LecturerId = Value.LecturerId.Span[Index],
                Name = Value.Name.Span[Index],
                StaffId = Value.StaffId.Span[Index],
                Telephone = Value.Telephone.Span[Index],
                State = Value.State.Span[Index]
            };
        }
    }
}
