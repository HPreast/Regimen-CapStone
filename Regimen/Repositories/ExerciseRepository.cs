using Microsoft.Extensions.Configuration;
using Regimen.Models;
using Regimen.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Regimen.Repositories
{
    public class ExerciseRepository : BaseRepository, IExerciseRepository
    {
        public ExerciseRepository(IConfiguration configuration) : base(configuration) { }
            public List<Exercise> GetExercises()
            {
                using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT id, name, category, description, image, equipment, workoutDayId
                                        FROM Exercise
                                      ";
                    var reader = cmd.ExecuteReader();

                    var exercises = new List<Exercise>();

                    while(reader.Read())
                    {
                        exercises.Add(new Exercise()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            name = DbUtils.GetString(reader, "name"),
                            categoryId = DbUtils.GetInt(reader, "categoryId"),
                            description = DbUtils.GetString(reader, "description"),
                            image = DbUtils.GetString(reader, "image"),
                            equipment = DbUtils.GetString(reader, "equipment"),
                            workoutDayId = DbUtils.GetInt(reader, "workoutDayId")
                        });
                    }
                    reader.Close();

                    return exercises;
                }
            }
            }
        
    }
}
