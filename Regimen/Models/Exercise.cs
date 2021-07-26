using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Regimen.Models
{
    public class Exercise
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(255)]
        public string name { get; set; }

        [Required]
        public int categoryId { get; set; }

        [Required]
        [MaxLength(255)]
        public string description { get; set; }

        public string image { get; set; }
        public string equipment { get; set; }
        [Required]
        public int workoutDayId { get; set; }
    }
}
