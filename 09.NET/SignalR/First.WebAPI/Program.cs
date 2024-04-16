using First.WebAPI.Hubs;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(action =>
{
    action.AddDefaultPolicy(policy => 
    policy
    .AllowAnyHeader()
    .AllowAnyMethod()
    .SetIsOriginAllowed(policy => true)
    .AllowCredentials());
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddSignalR();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.MapHub<ChatHub>("/chat-hub");

app.Run();
