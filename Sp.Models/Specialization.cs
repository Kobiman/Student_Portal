using System;
using System.Collections.Generic;
using System.Text;

namespace SP.Models
{
    public class Specialization
    {
        public Specialization()
        {
            SpecializationId = Guid.NewGuid().ToString();
        }
        public string SpecializationId { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Level { get; set; }
    }
}
