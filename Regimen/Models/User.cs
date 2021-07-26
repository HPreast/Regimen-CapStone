using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace Regimen.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        [StringLength(28, MinimumLength = 28)]
        public string FirebaseUserId { get; set; }
        [Required]
        [MaxLength(50)]
        public string firstName { get; set; }

        [Required]
        [MaxLength(50)]
        public string lastName { get; set; }

        [Required]
        [MaxLength(255)]
        public string Email { get; set; }
    }
}
