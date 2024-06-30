using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using QuizServer.Infrastructure.Context;
using Scrutor;

namespace QuizServer.Infrastructure;
public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        string connectionString = configuration.GetConnectionString("SqlServer")!;

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

        return services;
    }
}
