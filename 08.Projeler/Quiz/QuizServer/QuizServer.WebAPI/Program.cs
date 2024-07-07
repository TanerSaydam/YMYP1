using QuizServer.Application;
using QuizServer.Infrastructure;
using QuizServer.Infrastructure.Hubs;
using QuizServer.WebAPI.Middleware;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();

builder.Services.AddHttpContextAccessor();
builder.Services.AddSwaggerGen();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddApplication();
builder.Services.AddInfrastructure(builder.Configuration);

builder.Services.AddExceptionHandler<MyExceptionHandler>().AddProblemDetails();

builder.Services.AddSignalR();

builder.Services.AddControllers();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseCors(x => x.AllowAnyHeader().AllowCredentials().AllowAnyMethod().SetIsOriginAllowed(x => true));

app.UseAuthorization();

app.MapControllers();

app.UseExceptionHandler();

app.MapHub<CreateRoomHub>("/create-room");

app.Run();
