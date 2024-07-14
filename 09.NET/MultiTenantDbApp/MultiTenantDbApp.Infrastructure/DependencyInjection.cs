using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MultiTenantDbApp.Infrastructure.Context;

namespace MultiTenantDbApp.Infrastructure;
public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        services.AddDbContext<ApplicationDbContext>(action =>
        {
            action.UseSqlServer(configuration.GetConnectionString("SqlServer"));
        });

        services.AddScoped<IDbContext>(provider =>
        {
            return new CompanyDbContext(ServiceTool.GetConnectionString());
        });

        return services;
    }
}
