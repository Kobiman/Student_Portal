using SP.Common;
using SP.Models;
using SP.Services.Interfaces;
using SP.Services.Interfaces.Repository;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;

namespace SP.Services
{
    public class SchoolService : ISchoolService
    {
        private readonly IUnitOfWork _uow;
        public SchoolService(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public IResult AddSchool(School school)
        {
            ICollection<ValidationResult> results = new List<ValidationResult>();
            if (!school.Validate(out results)) return new Result(false, results.First().ErrorMessage);
            _uow.Schools.AddSchool(school);
            _uow.SaveChanges();
            return new Result(true, "School Added Successfully");
        }

        public IResult GetSchool(string schoolId)
        {
            if (string.IsNullOrWhiteSpace(schoolId)) return new Result(false, "SchoolId cannot be null");
            var school = _uow.Schools.GetSchool(schoolId);
            if (school == null) return new Result(false, "SchoolId was not found");
            return new Result<School>(true, school, "");
        }

        public IResult GetSchools()
        {
            return new Result<IEnumerable<School>>(true,
                _uow.Schools.GetSchools(), "");
        }

        public IResult UpdateSchool(School school)
        {
            ICollection<ValidationResult> results = new List<ValidationResult>();
            if (!school.Validate(out results)) return new Result(false, results.First().ErrorMessage);
            if (!_uow.Schools.UpdateSchool(school)) return new Result(false, "Could Not Update School");
            _uow.SaveChanges();
            return new Result(true, "School Updated Successfully");
        }
    }
}
