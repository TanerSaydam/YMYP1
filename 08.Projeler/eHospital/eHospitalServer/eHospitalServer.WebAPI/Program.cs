using eHospitalServer.DataAccess;
using eHospitalServer.WebAPI.Middlewares;
using System.Security.Claims;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDataAccess(builder.Configuration);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

ExtensionsMiddleware.CreateFirstUser(app);

app.UseHttpsRedirection();

app.MapControllers()
    .RequireAuthorization(policy =>
    {
        policy.RequireClaim(ClaimTypes.NameIdentifier);
        policy.AddAuthenticationSchemes("Bearer");
    });

app.Run();
