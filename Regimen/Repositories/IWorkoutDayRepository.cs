using Regimen.Models;
using System.Collections.Generic;

namespace Regimen.Repositories
{
    public interface IWorkoutDayRepository
    {
        public void AddNewDay(WorkoutDay workoutDay);
        public List<WorkoutDay> GetWorkoutDays();
        public void EditWorkoutDay(WorkoutDay workoutDay);
        public void DeleteWorkoutDay(int id);
        public List<WorkoutDay> GetWorkoutDaysByWorkoutId(int id);
    }
}