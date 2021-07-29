using Microsoft.Extensions.Configuration;
using Regimen.Models;
using Regimen.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Regimen.Repositories
{
    public class DaysOfWeekRepository : BaseRepository, IDaysOfWeekRepository
    {
        public DaysOfWeekRepository(IConfiguration configuration) : base(configuration) { }

        public List<DaysOfWeek> getWeekdays()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT
                                                id,
                                                [name]
                                        FROM DaysOfWeek
                                        ORDER BY id
                                      ";
                    var reader = cmd.ExecuteReader();

                    var weekDays = new List<DaysOfWeek>();
                    var weekDay = new DaysOfWeek();
                    while(reader.Read())
                    {
                        weekDay = new DaysOfWeek()
                        {
                            id = DbUtils.GetInt(reader, "id"),
                            name = DbUtils.GetString(reader, "name"),
                        };
                        weekDays.Add(weekDay);
                    }
                    reader.Close();

                    return weekDays;
                }
            }
        }
    }
}
