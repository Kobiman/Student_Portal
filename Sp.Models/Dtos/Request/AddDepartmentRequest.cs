﻿using System;
using System.Collections.Generic;
using System.Text;

namespace SP.Models.Dtos
{
    public class AddDepartmentRequest
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public string SchoolId { get; set; }
    }
}
