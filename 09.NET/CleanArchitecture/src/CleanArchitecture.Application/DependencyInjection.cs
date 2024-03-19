using CleanArchitecture.Application.Behaviors;
using CleanArchitecture.Application.Options;
using CleanArchitecture.Domain.Entities;
using FluentValidation;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace CleanArchitecture.Application;
public static class DependencyInjection
{
    //21:33 görüşelim
    public static IServiceCollection AddApplication(
        this IServiceCollection services)
    {
        services.AddValidatorsFromAssembly(typeof(DependencyInjection).Assembly);
        services.AddMediatR(configuration =>
        {
            configuration.RegisterServicesFromAssemblies(
                typeof(DependencyInjection).Assembly,
                typeof(AppUser).Assembly);
            configuration.AddOpenBehavior(typeof(ValidationBehavior<,>));
        });

        var emailOptions = services.BuildServiceProvider().GetRequiredService<IOptions<EmailOptions>>().Value;
        
        services
        .AddFluentEmail(emailOptions.Email)
        .AddSmtpSender(
          emailOptions.SMTP,
          emailOptions.PORT);
        //emailOptions.Email,
        //emailOptions.Password);

        return services;
    }
}
