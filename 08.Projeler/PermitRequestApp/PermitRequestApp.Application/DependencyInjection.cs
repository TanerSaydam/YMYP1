using Microsoft.Extensions.DependencyInjection;
using PermitRequestApp.Domain.CumulativeLeaveRequests;
using System.Reflection;

namespace PermitRequestApp.Application;
public static class DependencyInjection
{
    public static IServiceCollection AddApplication(
        this IServiceCollection services)
    {

        services.AddMediatR(configuration =>
        {
            configuration.RegisterServicesFromAssemblies(
                Assembly.GetExecutingAssembly(),
                typeof(CumulativeLeaveRequest).Assembly);
        });

        return services;
    }
}
