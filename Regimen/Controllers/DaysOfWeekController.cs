using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Regimen.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Regimen.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DaysOfWeekController : ControllerBase
    {
        private readonly IDaysOfWeekRepository _daysOfWeekRepository;

        public DaysOfWeekController(IDaysOfWeekRepository daysOfWeekRepository)
        {
            _daysOfWeekRepository = daysOfWeekRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_daysOfWeekRepository.getWeekdays());
        }
    }
}
