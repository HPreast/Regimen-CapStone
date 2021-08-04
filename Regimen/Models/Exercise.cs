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
        public int numOfSets { get; set; }
        public int numOfReps { get; set; }
        public int weight { get; set; }
        public int apiId { get; set; }
    }
}
