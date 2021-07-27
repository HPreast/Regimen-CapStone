using Regimen.Models;
using System.Collections.Generic;

namespace Regimen.Repositories
{
    public interface IWorkoutRepository
    {
        public void AddNew(Workout workout);
        public void EditWorkout(Workout workout);
        public List<Workout> GetWorkouts();
        public void DeleteWorkout(int id);
    }
}