using Microsoft.Extensions.Configuration;
using Regimen.Models;
using Regimen.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Regimen.Repositories
{
    public class WorkoutDayRepository : BaseRepository, IWorkoutDayRepository
    {
        public WorkoutDayRepository(IConfiguration configuration) : base(configuration) { }
        
        public void AddNewDay(WorkoutDay workoutDay)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        INSERT INTO WorkoutDay(
                                                                dayId,
                                                                workoutId,
                                                                [name]
                                                               )
                                        OUTPUT INSERTED.ID
                                        VALUES (
                                                @dayId,
                                                @workoutId,
                                                @name
                                                );
                                      ";
                    cmd.Parameters.AddWithValue("@dayId", workoutDay.dayId);
                    cmd.Parameters.AddWithValue("@workoutId", workoutDay.workoutId);
                    cmd.Parameters.AddWithValue("@name", workoutDay.name);

                    workoutDay.id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public List<WorkoutDay> GetWorkoutDays()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT 
                                                id,
                                                [name],
                                                dayId,
                                                workoutId
                                        FROM WorkoutDay
                                        ORDER BY id
                                      ";
                    var reader = cmd.ExecuteReader();

                    var days = new List<WorkoutDay>();
                    var workoutDay = new WorkoutDay();
                    while(reader.Read())
                    {
                        workoutDay = new WorkoutDay()
                        {
                            id = DbUtils.GetInt(reader, "id"),
                            name = DbUtils.GetString(reader, "name"),
                            dayId = DbUtils.GetInt(reader, "dayId"),
                            workoutId = DbUtils.GetInt(reader, "workoutId"),
                        };
                        days.Add(workoutDay);
                    }
                    reader.Close();

                    return days;
                }
            }
        }
    }
}
