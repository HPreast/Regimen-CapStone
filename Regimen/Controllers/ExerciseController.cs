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
    public class ExerciseController : ControllerBase
    {
        private readonly IExerciseRepository _exerciseRepository;

        public ExerciseController(IExerciseRepository exerciseRepo)
        {
            _exerciseRepository = exerciseRepo;
        }

        [HttpPost]
        public IActionResult Add(Exercise exercise)
        {
            _exerciseRepository.AddExercise(exercise);
            return CreatedAtAction("Get", new { id = exercise.id }, exercise);
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_exerciseRepository.GetExercises());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_exerciseRepository.GetExercisesByWorkoutDay(id));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _exerciseRepository.DeleteExercise(id);
            return NoContent();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Exercise exercise)
        {
            if (id != exercise.id)
            {
                return BadRequest();
            }
            else
            {
                _exerciseRepository.EditExercise(exercise);
                return NoContent();
            }
        }
    }
}
