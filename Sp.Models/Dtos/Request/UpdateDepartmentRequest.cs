﻿using System;
using System.Collections.Generic;
using System.Text;

namespace SP.Models.Dtos
{
    public class UpdateDepartmentRequest
    {
        public string DepartmentId { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string SchoolId { get; set; }
    }
}
