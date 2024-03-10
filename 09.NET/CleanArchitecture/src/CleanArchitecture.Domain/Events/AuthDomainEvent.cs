using CleanArchitecture.Domain.Entities;
using MediatR;

namespace CleanArchitecture.Domain.Events;
public sealed class AuthDomainEvent : INotification
{
    public readonly AppUser _user;

    public AuthDomainEvent(AppUser user)
    {
        _user = user;
    }
}

