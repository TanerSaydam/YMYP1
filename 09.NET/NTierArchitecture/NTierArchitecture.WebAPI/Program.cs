using Microsoft.EntityFrameworkCore;
using NTierArchitecture.Business;
using NTierArchitecture.Business.Mapping;
using NTierArchitecture.DataAccess.Context;
using NTierArchitecture.DataAccess.Repositories;

var builder = WebApplication.CreateBuilder(args);

//DbContext
builder.Services.AddDbContext<ApplicationDbContext>(opt =>
{
    opt.UseSqlServer(builder.Configuration.GetConnectionString("SqlServer"));
});

//Dependency Injection
builder.Services.AddScoped<IStudentRepository, StudentRepository>();
builder.Services.AddScoped<IClassRoomRepository, ClassRoomRepository>();

builder.Services.AddScoped<IStudentService, StudentManager>();
builder.Services.AddAutoMapper(typeof(MappingProfile).Assembly);

//Application
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
