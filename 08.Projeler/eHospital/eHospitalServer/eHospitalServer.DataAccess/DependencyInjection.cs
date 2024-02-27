using eHospitalServer.DataAccess.Context;
using eHospitalServer.DataAccess.Options;
using eHospitalServer.DataAccess.Services;
using eHospitalServer.Entities.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Scrutor;
using System.Reflection;
using System.Text;

namespace eHospitalServer.DataAccess;
public static class DependencyInjection
{
    public static IServiceCollection AddDataAccess(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        services.AddDbContext<ApplicationDbContext>(options =>
        {
            options
                .UseNpgsql(configuration.GetConnectionString("PostgreSQL"))
                .UseSnakeCaseNamingConvention();            
        });

        services
            .AddIdentity<User, IdentityRole<Guid>>(cfr =>
            {
                cfr.Password.RequiredLength = 1;
                cfr.Password.RequireNonAlphanumeric = false;
                cfr.Password.RequireUppercase = false;
                cfr.Password.RequireLowercase = false;
                cfr.Password.RequireDigit = false;
                cfr.SignIn.RequireConfirmedEmail = true;
                cfr.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
                cfr.Lockout.MaxFailedAccessAttempts = 3;
                cfr.Lockout.AllowedForNewUsers = true;
            })
            .AddEntityFrameworkStores<ApplicationDbContext>()
            .AddDefaultTokenProviders();

        //services.ConfigureOptions<JwtOptionsSetup>();
        services.Configure<JwtOptions>(configuration.GetSection("Jwt"));
        //var jwt = services.BuildServiceProvider().GetRequiredService<IOptions<JwtOptions>>();
        services.ConfigureOptions<JwtTokenOptionsSetup>();

        services.AddAuthentication()
            .AddJwtBearer();
        services.AddAuthorizationBuilder();

        //services.AddAuthorization();

        services.AddScoped<JwtProvider>();
        
        services.Scan(action =>
        {
            action
            .FromAssemblies(Assembly.GetExecutingAssembly())
            .AddClasses(publicOnly: false)
            .UsingRegistrationStrategy(RegistrationStrategy.Skip)
            .AsMatchingInterface()
            .AsImplementedInterfaces()
            .WithScopedLifetime();
        });      

        return services;
    }
}
