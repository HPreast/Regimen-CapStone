using Regimen.Models;
using System.Collections.Generic;

namespace Regimen.Repositories
{
    public interface IExerciseRepository
    {
        public void AddExercise(Exercise exercise);
        public List<Exercise> GetExercises();
        public void DeleteExercise(int id);
        public List<Exercise> GetExercisesByWorkoutDay(int id);
    }
}