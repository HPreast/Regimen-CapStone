using Regimen.Models;
using System.Collections.Generic;

namespace Regimen.Repositories
{
    public interface IDaysOfWeekRepository
    {
        public List<DaysOfWeek> getWeekdays();
    }
}