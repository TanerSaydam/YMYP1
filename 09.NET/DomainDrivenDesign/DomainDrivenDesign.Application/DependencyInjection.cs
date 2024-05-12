using DomainDrivenDesign.Domain.Users;
using Microsoft.Extensions.DependencyInjection;

namespace DomainDrivenDesign.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddMediatR(config =>
        {
            config.RegisterServicesFromAssemblies(
                typeof(DependencyInjection).Assembly,
                typeof(User).Assembly);
        });

        services.AddAutoMapper(typeof(DependencyInjection).Assembly);

        return services;
    }
}
