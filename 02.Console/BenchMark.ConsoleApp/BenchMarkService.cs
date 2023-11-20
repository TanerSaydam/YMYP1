using BenchMark.ConsoleApp.Context;
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Configs;
using Bogus.DataSets;
using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace BenchMark.ConsoleApp;

[ShortRunJob, Config(typeof(Config))]
public class BenchMarkService
{
    ApplicationDbContext context = new();
    public string connectionString = "Data Source=DESKTOP-3BJ5GK9\\SQLEXPRESS;Initial Catalog=BenchMarkTestDb;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False";
    SqlConnection con;

    public BenchMarkService()
    {
        con = new SqlConnection(connectionString);
    }
    private class Config : ManualConfig
    {
        public Config()
        {
            SummaryStyle = BenchmarkDotNet.Reports.SummaryStyle.Default.WithRatioStyle(BenchmarkDotNet.Columns.RatioStyle.Trend);
        }
    }    

    [Benchmark(Baseline = true)]
    public void ToList()
    {
        var users = context.Set<User>().AsNoTracking().ToList();
    }

    [Benchmark]
    public void FromSqlRaw()
    {
        var users = context.Set<User>().FromSqlRaw("select * from users").AsNoTracking().ToList();
    }

    [Benchmark]
    public void SqlQueryRaw()
    {
        var users = context.Database.SqlQueryRaw<List<User>>("select * from users").AsNoTracking().ToList();
    }

    [Benchmark]
    public async Task ToListAsync()
    {
        var users = await context.Set<User>().AsNoTracking().ToListAsync();
    }

    [Benchmark]
    public async Task FromSqlRawAsync()
    {
        var users = await context.Set<User>().FromSqlRaw("select * from users").AsNoTracking().ToListAsync();
    }

    [Benchmark]
    public async Task SqlQueryRawAsync()
    {
        var users = await context.Database.SqlQueryRaw<List<User>>("select * from users").AsNoTracking().ToListAsync();
    }

    [Benchmark]
    public void ExecuteNonQuery()
    {
        con.Open();
        SqlCommand cmd = new("Select * From users",con);
        cmd.ExecuteNonQuery();
        con.Close();        
    }

    [Benchmark]
    public async Task ExecuteNonQueryAsync()
    {
        await con.OpenAsync();
        SqlCommand cmd = new("Select * From users", con);
        await cmd.ExecuteNonQueryAsync();
        await con.CloseAsync();
    }

    [Benchmark]
    public void DapperSqlQuery()
    {
        using (var db = new SqlConnection(connectionString))
        {
            db.Open();

            var sorgu = "SELECT * FROM Users";

            var users = db.Query<List<User>>(sorgu);
        }
    }

    [Benchmark]
    public async Task DapperSqlQueryAsync()
    {
        using (var db = new SqlConnection(connectionString))
        {
            db.Open();

            var sorgu = "SELECT * FROM Users";

            var users = await db.QueryAsync<List<User>>(sorgu);
        }
    }
}
