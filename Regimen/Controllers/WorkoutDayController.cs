using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Regimen.Models;
using Regimen.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Regimen.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class WorkoutDayController : ControllerBase
    {
        private readonly IWorkoutDayRepository _workoutDayRepository;

        public WorkoutDayController(IWorkoutDayRepository workoutDayRepo)
        {
            _workoutDayRepository = workoutDayRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_workoutDayRepository.GetWorkoutDays());
        }

        [HttpPost]
        public IActionResult Add(WorkoutDay workoutDay)
        {
            _workoutDayRepository.AddNewDay(workoutDay);
            return CreatedAtAction("Get", new { id = workoutDay.id }, workoutDay);

        }
    }
}
