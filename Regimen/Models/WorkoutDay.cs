using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Regimen.Models
{
    public class WorkoutDay
    {
        public int id { get; set; }
        public int dayId { get; set; }
        public int workoutId { get; set; }
        public string name { get; set; }
        public string dayName { get; set; }
    }
}
