using Regimen.Models;
using System.Collections.Generic;

namespace Regimen.Repositories
{
    public interface IExerciseRepository
    {
        public List<Exercise> GetExercises();
    }
}