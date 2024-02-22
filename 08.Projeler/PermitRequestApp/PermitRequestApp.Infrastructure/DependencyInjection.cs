using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PermitRequestApp.Domain.Abstractions;
using PermitRequestApp.Domain.ADUsers;
using PermitRequestApp.Domain.CumulativeLeaveRequests;
using PermitRequestApp.Domain.LeaveRequests;
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

        services.AddScoped<IUnitOfWork>(srv => srv.GetRequiredService<ApplicationDbContext>());

        services.AddScoped<IADUserRepository, ADUserRepository>();
        services.AddScoped<ILeaveRequestRepository, LeaveRequestRepository>();
        services.AddScoped<ICumulativeLeaveRequestRepository, CumulativeLeaveRequestRepository>();

        return services;
    }
}
