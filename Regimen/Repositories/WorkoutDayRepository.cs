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
                                                                dayName,
                                                                [name]
                                                               )
                                        OUTPUT INSERTED.ID
                                        VALUES (
                                                @dayId,
                                                @workoutId,
                                                @dayName,
                                                @name
                                                );
                                      ";
                    cmd.Parameters.AddWithValue("@dayId", workoutDay.dayId);
                    cmd.Parameters.AddWithValue("@workoutId", workoutDay.workoutId);
                    cmd.Parameters.AddWithValue("@name", workoutDay.name);
                    cmd.Parameters.AddWithValue("@dayName", workoutDay.dayName);

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
                                                dayName,
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
                            dayName = DbUtils.GetString(reader, "dayName"),
                        };
                        days.Add(workoutDay);
                    }
                    reader.Close();

                    return days;
                }
            }
        }

        public List<WorkoutDay> GetWorkoutDaysByWorkoutId(int id)
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
                                                dayName,
                                                workoutId
                                        FROM WorkoutDay
                                        WHERE @id = workoutId
                                        ORDER BY id
                                      ";
                    DbUtils.AddParameter(cmd, "@id", id);
                    var reader = cmd.ExecuteReader();

                    var days = new List<WorkoutDay>();
                    var workoutDay = new WorkoutDay();
                    while (reader.Read())
                    {
                        workoutDay = new WorkoutDay()
                        {
                            id = DbUtils.GetInt(reader, "id"),
                            name = DbUtils.GetString(reader, "name"),
                            dayId = DbUtils.GetInt(reader, "dayId"),
                            workoutId = DbUtils.GetInt(reader, "workoutId"),
                            dayName = DbUtils.GetString(reader, "dayName"),
                        };
                        days.Add(workoutDay);
                    }
                    reader.Close();

                    return days;
                }
            }
        }

        public void EditWorkoutDay(WorkoutDay workoutDay)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        UPDATE WorkoutDay
                                        Set name = @name,
                                            dayName = @dayName,
                                            dayId = @dayId
                                        WHERE id = @id
                                      ";
                    DbUtils.AddParameter(cmd, "@name", workoutDay.name);
                    DbUtils.AddParameter(cmd, "@dayName", workoutDay.dayName);
                    DbUtils.AddParameter(cmd, "@dayId", workoutDay.dayId);
                    DbUtils.AddParameter(cmd, "@id", workoutDay.id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteWorkoutDay(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                       DELETE WorkoutDay
                                       FROM WorkoutDay
                                       WHERE @id = id
                                      ";
                    DbUtils.AddParameter(cmd, "@id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
