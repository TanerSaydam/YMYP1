using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using QuizServer.Infrastructure.Context;
using QuizServer.Infrastructure.Options;
using Scrutor;
using System.Text;

namespace QuizServer.Infrastructure;
public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddHttpContextAccessor();

        services.Configure<Jwt>(configuration.GetSection("Jwt"));

        string connectionString = configuration.GetConnectionString("SqlServer")!;

        var srv = services.BuildServiceProvider();

        var options = srv.GetRequiredService<IOptions<Jwt>>();

        services.AddAuthentication().AddJwtBearer(action =>
        {
            action.TokenValidationParameters = new()
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateIssuerSigningKey = true,
                ValidateLifetime = true,
                ValidIssuer = options.Value.Issuer,
                ValidAudience = options.Value.Audience,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(options.Value.SecretKey))
            };
        });

        services.AddDbContext<ApplicationDbContext>(conf =>
        {
            conf.UseSqlServer(connectionString);
        });

        services.Scan(action =>
        {
            action
            .FromAssemblies(typeof(DependencyInjection).Assembly)
            .AddClasses(publicOnly: false)
            .UsingRegistrationStrategy(RegistrationStrategy.Skip)
            .AsImplementedInterfaces()
            .WithScopedLifetime();
        });

        services.AddHealthChecks()
        .AddCheck("health-check", () => HealthCheckResult.Healthy())
        .AddDbContextCheck<ApplicationDbContext>()
        ;

        return services;
    }
}
