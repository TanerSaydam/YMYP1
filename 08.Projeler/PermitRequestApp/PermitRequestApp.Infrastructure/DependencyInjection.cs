using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PermitRequestApp.Domain.ADUsers;
using PermitRequestApp.Infrastructure.Context;
using PermitRequestApp.Infrastructure.Repositories;

namespace PermitRequestApp.Infrastructure;
public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services,
        IConfiguration configuration)
    {

        services.AddDbContext<ApplicationDbContext>(options =>
        {
            options.UseSqlServer(configuration.GetConnectionString("SqlServer"));
        });

        services.AddScoped<IADUserRepository, ADUserRepository>();

        return services;
    }
}
