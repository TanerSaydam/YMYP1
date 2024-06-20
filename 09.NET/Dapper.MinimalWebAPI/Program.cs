using Dapper;
using Dapper.MinimalWebAPI.Models;
using Microsoft.Data.SqlClient;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHttpContextAccessor();

var app = builder.Build();

app.MapGet("/", (IHttpContextAccessor httpContextAccessor) =>
{
    // HttpContextAccessor httpContextAccessor = new();
    return "Hello World!";
});

app.MapGet("/dapper", () =>
{
    string conString = "Data Source=TANER\\SQLEXPRESS;Initial Catalog=eCommerceDb;Integrated Security=True;Connect Timeout=30;Encrypt=True;Trust Server Certificate=True;Application Intent=ReadWrite;Multi Subnet Failover=False";


    var db = new SqlConnection(conString);
    db.Open();

    var result = db.Query<List<Product>>("Select * from Products");


    return result;
});

app.Run();
