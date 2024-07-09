using QuizServer.HeathCheck.WebAPI;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHostedService<MyBackground>();

var app = builder.Build();


app.MapGet("/", () => "Hello World!");


app.Run();
