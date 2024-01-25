var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(configuration =>
{
    configuration.AddDefaultPolicy(options => 
    options
        .AllowAnyMethod()
        .AllowAnyOrigin()
        .AllowAnyHeader());
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment() || app.Environment.IsProduction())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
