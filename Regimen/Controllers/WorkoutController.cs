using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Regimen.Models;
using Regimen.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Regimen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkoutController : ControllerBase
    {
        private readonly IWorkoutRepository _workoutRepository;
        private readonly IUserRepository _userRepository;
        public WorkoutController(IWorkoutRepository workoutRepo, IUserRepository userRepository)
        {
            _workoutRepository = workoutRepo;
            _userRepository = userRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_workoutRepository.GetWorkouts());
        }
        [HttpPost]
        public IActionResult Add(Workout workout)
        {
            _workoutRepository.AddNew(workout);
            return CreatedAtAction("Get", new { id = workout.id }, workout);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Workout workout)
        {
            if (id != workout.id)
            {
                return BadRequest();
            }
            else
            {
                _workoutRepository.EditWorkout(workout);
                return NoContent();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _workoutRepository.DeleteWorkout(id);
            return NoContent();
        }

        private User GetCurrentUser()
        {
            var firebaseUserId = User?.FindFirst(ClaimTypes.NameIdentifier).Value;

            if (firebaseUserId != null)
            {
                return _userRepository.GetByFirebaseUserId(firebaseUserId);
            }
            else
            {
                return null;
            }
        }
    }
}
