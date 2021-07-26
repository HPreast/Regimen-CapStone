//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using Regimen.Repositories;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;

//namespace Regimen.Controllers
//{
//    [Route("https://wger.de/api/v2/exerciseinfo")]
//    [ApiController]
//    public class ExerciseController : ControllerBase
//    {
//        private readonly IExerciseRepository _exerciseRepository;
//        public ExerciseController(IExerciseRepository exerciseRepository)
//        {
//            _exerciseRepository = exerciseRepository;
//        }

//        [HttpGet]
//        public IActionResult GetExerciseList()
//        {
//            return Ok(_exerciseRepository.GetExercises());
//        }
//    }
//}
