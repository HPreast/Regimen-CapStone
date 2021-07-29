using Regimen.Models;
using System.Collections.Generic;

namespace Regimen.Repositories
{
    public interface IWorkoutDayRepository
    {
        public void AddNewDay(WorkoutDay workoutDay);
        public List<WorkoutDay> GetWorkoutDays();
    }
}