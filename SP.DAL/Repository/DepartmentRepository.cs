using KMapper;
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
    public class DepartmentRepository : Repository<Department>, IDepartmentRepository
    {
        public DepartmentRepository(ConcurrentBag<Department> collection) : base(collection)
        {
        }

        public bool AddDepartment(AddDepartmentRequest request)
        {
            var department = request.Map<Department, AddDepartmentRequest>();
            Collection.Add(department);
            DataWriter.WriterData(department, nameof(Department));
            return true;
        }

        public Department GetDepartment(string departmentId)
        {
            return Collection.FirstOrDefault(x => x.DepartmentId == departmentId);
        }

        public Department GetDepartmentbyName(string name)
        {
            return Collection.FirstOrDefault(x => x.Name == name);
        }

        public IEnumerable<Department> GetDepartments()
        {
            return Collection.ToList();
        }

        public bool UpdateDepartment(UpdateDepartmentRequest request)
        {
            var originalDepartment = Collection.FirstOrDefault(x => x.DepartmentId == request.DepartmentId);
            if (originalDepartment == null) return false;
            request.Map(originalDepartment);

            DataWriter.WriterData(originalDepartment, nameof(Department));
            return true;
        }
    }
}
