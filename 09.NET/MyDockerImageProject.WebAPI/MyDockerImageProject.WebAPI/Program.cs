var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapGet("/api", () => "Docker Image Hello World!");
app.MapGet("/getall", () => Data.Todos);
app.MapGet("/create", (string work) =>
{
    Data.Todos.Add(work);
    return Results.Ok(Data.Todos);
});

app.Run();


public static class Data
{
    public static List<string> Todos = new() { "Taner Saydam" };
}