using KMapper;
using SP.DAL.Models;
using SP.Models;
using SP.Models.Dtos;
using SP.Services.Interfaces;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.DAL.Repository
{
    public class DepartmentRepository : IDepartmentRepository
    {
        private Departments Collection;
        public DepartmentRepository(Departments collection)
        {
            Collection = collection;
        }

        public bool AddDepartment(AddDepartmentRequest request)
        {
            var department = request.Map<Department, AddDepartmentRequest>();
            Collection.Add(department);
            DataWriter.Add(department, nameof(Department));
            return true;
        }

        public Department GetDepartment(string departmentId)
        {
            var result = Collection.Next.Find((x, y) => x.DepartmentId.Span[y] == departmentId);
            return CreateDepartment(result);
        }

        public Department GetDepartmentbyName(string name)
        {
            var result = Collection.Next.Find((x, y) => x.Name.Span[y] == name);
            return CreateDepartment(result);
        }

        public IEnumerable<Department> GetDepartments()
        {
            return Collection.Next.Select((x, y) => CreateDepartment(x, y));
        }

        public bool UpdateDepartment(UpdateDepartmentRequest request)
        {
            var result = Collection.Next.Find((x, y) => x.DepartmentId.Span[y] == request.DepartmentId);
            var originalDepartment = CreateDepartment(result);
            request.Map(originalDepartment);

            DataWriter.Add(originalDepartment, nameof(Department));
            return true;
        }

        private Department CreateDepartment(DepartmentDM Value, int Index)
        {
            return new Department
            {
                Code = Value.Code.Span[Index],
                SchoolId = Value.SchoolId.Span[Index],
                Name = Value.Name.Span[Index],
                DepartmentId = Value.DepartmentId.Span[Index],
                CourseMounting = Value.CourseMounting.Span[Index]
            };
        }

        private Department CreateDepartment((DepartmentDM Value, int Index, bool Success) result)
        {
            if (!result.Success) return null;
            return CreateDepartment(result.Value, result.Index);
        }
    }
}
