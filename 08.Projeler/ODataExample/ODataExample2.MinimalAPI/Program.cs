using Microsoft.AspNetCore.OData;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();

builder.Services.AddControllers()
    .AddOData(options =>
    {
        options.EnableQueryFeatures();
    });

var app = builder.Build();


app.UseCors(x => x.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());

app.MapGet("/", () => "Hello World!");

app.MapControllers();

app.Run();
