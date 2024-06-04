var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", (HttpContext context) =>
{
    context.Response.StatusCode = 201;
    return Results.Ok("Hello World!");
});

app.MapGet("/test", (HttpContext context) =>
{
    context.Response.StatusCode = 201;
    return Results.Ok("Hello World!");
});

app.Run();
