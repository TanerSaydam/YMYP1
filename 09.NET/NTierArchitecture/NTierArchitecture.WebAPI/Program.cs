using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using NTierArchitecture.Business;
using NTierArchitecture.Business.Mapping;
using NTierArchitecture.Business.Services;
using NTierArchitecture.DataAccess.Context;
using NTierArchitecture.DataAccess.Repositories;
using NTierArchitecture.Entities.Models;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddAuthentication().AddJwtBearer(options =>
{
    options.TokenValidationParameters = new()
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateIssuerSigningKey = true,
        ValidateLifetime = true,
        ValidIssuer = "Taner Saydam",
        ValidAudience = "Taner Saydam",
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("benim þire anahtarým benim þire anahtarým benim þire anahtarým benim þire anahtarým benim þire anahtarým"))
    };
});
builder.Services.AddAuthorization();

//DbContext
builder.Services.AddDbContext<ApplicationDbContext>(opt =>
{
    opt.UseSqlServer(builder.Configuration.GetConnectionString("SqlServer"));
    //opt.LogTo(Console.WriteLine, LogLevel.Information);
});
builder.Services.AddIdentity<AppUser, IdentityRole<Guid>>(options=>
{
    options.Password.RequiredLength = 1;
    options.Password.RequireDigit = false;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = false;
    options.Password.RequireLowercase = false;
})
    .AddEntityFrameworkStores<ApplicationDbContext>();

//Dependency Injection
builder.Services.AddScoped<AuthService>();

builder.Services.AddScoped<IStudentRepository, StudentRepository>();
builder.Services.AddScoped<IClassRoomRepository, ClassRoomRepository>();

builder.Services.AddScoped<IStudentService, StudentManager>();
builder.Services.AddScoped<IClassRoomService, ClassRoomManager>();

builder.Services.AddScoped<IJwtProvider, JwtProvider>();

builder.Services.AddAutoMapper(typeof(MappingProfile).Assembly);

//Application
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(setup =>
{
    var jwtSecuritySheme = new OpenApiSecurityScheme
    {
        BearerFormat = "JWT",
        Name = "JWT Authentication",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.Http,
        Scheme = JwtBearerDefaults.AuthenticationScheme,
        Description = "Put **_ONLY_** yourt JWT Bearer token on textbox below!",

        Reference = new OpenApiReference
        {
            Id = JwtBearerDefaults.AuthenticationScheme,
            Type = ReferenceType.SecurityScheme
        }
    };

    setup.AddSecurityDefinition(jwtSecuritySheme.Reference.Id, jwtSecuritySheme);

    setup.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    { jwtSecuritySheme, Array.Empty<string>() }
                });
});

var app = builder.Build();

// Middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


using (var scoped = app.Services.CreateScope())
{
    var userManager = scoped.ServiceProvider.GetRequiredService<UserManager<AppUser>>();
    if (!userManager.Users.Any())
    {
        AppUser appUser = new()
        {
            FirstName = "Taner",
            LastName = "Saydam",
            Email = "tanersaydam@gmail.com",
            UserName = "tsaydam"
        };
        userManager.CreateAsync(appUser, "1").Wait();
    }
}

app.MapControllers();

app.Run();
