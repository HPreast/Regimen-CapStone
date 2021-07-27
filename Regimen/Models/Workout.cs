using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Regimen.Models
{
    public class Workout
    {
        public int id { get; set; }
        public int userId { get; set; }
        public string name { get; set; }
    }
}
