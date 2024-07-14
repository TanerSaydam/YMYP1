using Microsoft.EntityFrameworkCore;
using MultiTenantDbApp.Domain.Company.Entities;
using MultiTenantDbApp.Domain.Master.Entities;
using MultiTenantDbApp.Infrastructure;
using MultiTenantDbApp.Infrastructure.Context;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddInfrastructure(builder.Configuration);

builder.Services.AddServiceTool();

builder.Services.AddHttpContextAccessor();

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapPost("/companies/create", (CreateCompanyDto request, ApplicationDbContext context) =>
{
    Company company = new()
    {
        Name = request.Name,
        ConnectionString = request.ConnectionString,
    };

    context.Add(company);
    context.SaveChanges();

    return Results.Ok("Create company is successful");
});

app.MapGet("/master/migrate", (ApplicationDbContext appContext) =>
{
    List<Company> companies = appContext.Companies.ToList();

    foreach (var item in companies)
    {
        CompanyDbContext context = new(item.ConnectionString);
        context.Database.Migrate();
    }

    return Results.Ok("All companies migrated");
});

app.MapGet("products/create", (string name) =>
{
    CompanyDbContext context = Context.CreateDbContextInstance();
    Product product = new()
    {
        Name = name
    };

    context.Add(product);
    context.SaveChanges();
    return Results.Ok("Product create is successful");
});

app.MapGet("products/getall", (IDbContext context) =>
{
    // CompanyDbContext context = Context.CreateDbContextInstance();
    var products = context.Products.ToList();
    return Results.Ok(products);
});

app.Run();


record CreateCompanyDto(string Name, string ConnectionString);