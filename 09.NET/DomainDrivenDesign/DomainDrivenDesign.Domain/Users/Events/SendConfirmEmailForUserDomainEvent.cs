using FluentEmail.Core;
using MediatR;

namespace DomainDrivenDesign.Domain.Users.Events;

public sealed class SendConfirmEmailForUserDomainEvent(
    IUserRepository userRepository,
    IFluentEmail fluentEmail
    ) : INotificationHandler<UserDomainEvent>
{
    public async Task Handle(UserDomainEvent notification, CancellationToken cancellationToken)
    {
        User? user = await userRepository.GetByIdAsync(notification.UserId, cancellationToken);
        if (user is null)
        {
            throw new ArgumentException("We are trying to send a confirmation email but cannot find the User");
        }

        await fluentEmail
            .To(user.Email.Value)
            .Subject("Mail Confirm")
            .Body($"You can use this code for confirm your email. Code: {user.EmailConfirmCode.Value}")
            .SendAsync(cancellationToken);
    }
}
