﻿namespace SP.Models.Dtos
{
    public class AddCourseRequest
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Credit { get; set; }
        public int Cred => int.Parse(Credit);
        public string DepartmentId { get; set; }
    }
}
