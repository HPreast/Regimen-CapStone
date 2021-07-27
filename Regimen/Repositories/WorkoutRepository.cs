using Microsoft.Extensions.Configuration;
using Regimen.Models;
using Regimen.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Regimen.Repositories
{
    public class WorkoutRepository : BaseRepository, IWorkoutRepository
    {
        public WorkoutRepository(IConfiguration configuration) : base(configuration) { }

        public void AddNew(Workout workout)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        INSERT INTO Workout(
                                                            userId,
                                                            name
                                                            )
                                        OUTPUT INSERTED.ID
                                        VALUES (
                                                @userId,
                                                @name
                                                );";
                    DbUtils.AddParameter(cmd, "@userId", workout.userId);
                    DbUtils.AddParameter(cmd, "@name", workout.name);

                    workout.id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void EditWorkout(Workout workout)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        UPDATE Workout
                                        Set name = @name
                                        WHERE id = @id
                                      ";
                    DbUtils.AddParameter(cmd, "@name", workout.name);
                    DbUtils.AddParameter(cmd, "@id", workout.id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public List<Workout> GetWorkouts()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using(var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                      SELECT 
                                            id,
                                            name,
                                            userId
                                      FROM Workout
                                      ORDER BY id DESC
                                      ";
                    var reader = cmd.ExecuteReader();

                    var workouts = new List<Workout>();
                    var workout = new Workout();
                    while(reader.Read())
                    {
                        workout = new Workout()
                        {
                            id = DbUtils.GetInt(reader, "id"),
                            userId = DbUtils.GetInt(reader, "userId"),
                            name = DbUtils.GetString(reader, "name"),
                        };
                        workouts.Add(workout);
                    }
                    reader.Close();

                    return workouts;
                }
            }
        }

        public void DeleteWorkout(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                       DELETE Workout
                                       FROM Workout
                                       WHERE @id = id
                                      ";
                    DbUtils.AddParameter(cmd, "@id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
