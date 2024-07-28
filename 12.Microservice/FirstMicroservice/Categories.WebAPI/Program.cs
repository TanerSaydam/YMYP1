using Categories.WebAPI.Context;
using Categories.WebAPI.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("PostgreSql1"));
});

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet("/getall", (ApplicationDbContext context) =>
{
    var categories = context.Categories.ToList();

    return categories;
});

app.MapGet("/create", (string name, ApplicationDbContext context) =>
{
    Category category = new()
    {
        Name = name,
    };

    context.Categories.Add(category);
    context.SaveChanges();

    return category.Id;
});

using (var scope = app.Services.CreateScope())
{
    var srv = scope.ServiceProvider;
    var context = srv.GetRequiredService<ApplicationDbContext>();
    context.Database.Migrate();
}

app.Run();
