using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Regimen.Models
{
    public class Exercise
    {
        public int id { get; set; }
        public string name { get; set; }
        public int workoutDayId { get; set; }
        public int apiId { get; set; }
    }
}
