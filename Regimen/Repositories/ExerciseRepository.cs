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
        
        public void AddExercise(Exercise exercise)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        INSERT INTO Exercises
                                                ([name], workoutDayId, apiId)
                                        OUTPUT INSERTED.ID
                                        VALUES (@name, @workoutDayId, @apiId)
                                      ";
                    DbUtils.AddParameter(cmd, "@name", exercise.name);
                    DbUtils.AddParameter(cmd, "@workoutDayId", exercise.workoutDayId);
                    DbUtils.AddParameter(cmd, "@apiId", exercise.apiId);

                    exercise.id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public List<Exercise> GetExercises()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT 
                                                id,
                                                name,
                                                workoutDayId,
                                                apiId
                                        FROM Exercises
                                        ORDER BY name
                                      ";
                    var reader = cmd.ExecuteReader();

                    var exercises = new List<Exercise>();
                    var exercise = new Exercise();
                    while(reader.Read())
                    {
                        exercise = new Exercise()
                        {
                            id = DbUtils.GetInt(reader, "id"),
                            name = DbUtils.GetString(reader, "name"),
                            workoutDayId = DbUtils.GetInt(reader, "workoutDayId"),
                            apiId = DbUtils.GetInt(reader, "apiId"),
                        };
                        exercises.Add(exercise);
                    }
                    reader.Close();

                    return exercises;
                }
            }
        }

        public List<Exercise> GetExercisesByWorkoutDay(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT 
                                                id,
                                                name,
                                                workoutDayId,
                                                apiId
                                        FROM Exercises
                                        WHERE @Id = workoutDayId
                                        ORDER BY name
                                      ";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    var reader = cmd.ExecuteReader();

                    var exercises = new List<Exercise>();
                    var exercise = new Exercise();
                    while (reader.Read())
                    {
                        exercise = new Exercise()
                        {
                            id = DbUtils.GetInt(reader, "id"),
                            name = DbUtils.GetString(reader, "name"),
                            workoutDayId = DbUtils.GetInt(reader, "workoutDayId"),
                            apiId = DbUtils.GetInt(reader, "apiId"),
                        };
                        exercises.Add(exercise);
                    }
                    reader.Close();

                    return exercises;
                }
            }
        }

        public void DeleteExercise(int id)
        {
            using (var conn = Connection)
                conn.Open();
            using (var cmd = Connection.CreateCommand())
            {
                cmd.CommandText = @"
                                    DELETE Exercises
                                    FROM Exercises
                                    WHERE @id = id
                                  ";
                DbUtils.AddParameter(cmd, "@id", id);

                cmd.ExecuteNonQuery();
            }
        }
    }
}
