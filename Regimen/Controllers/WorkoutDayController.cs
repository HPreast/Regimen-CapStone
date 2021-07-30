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

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_workoutDayRepository.GetWorkoutDaysByWorkoutId(id));
        }

        [HttpPost]
        public IActionResult Add(WorkoutDay workoutDay)
        {
            _workoutDayRepository.AddNewDay(workoutDay);
            return CreatedAtAction("Get", new { id = workoutDay.id }, workoutDay);

        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, WorkoutDay workoutDay)
        {
            if (id != workoutDay.id)
            {
                return BadRequest();
            }
            else
            {
                _workoutDayRepository.EditWorkoutDay(workoutDay);
                return NoContent();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _workoutDayRepository.DeleteWorkoutDay(id);
            return NoContent();
        }
    }
}
