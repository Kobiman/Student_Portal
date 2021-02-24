using SP.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.Services.Interfaces
{
    public interface ISchoolService
    {
        IResult AddSchool(School school);
        IResult GetSchool(string schoolId);
        IResult GetSchools();
        IResult UpdateSchool(School school);
    }
}
