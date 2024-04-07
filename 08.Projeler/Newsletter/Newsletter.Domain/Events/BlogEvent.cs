using MediatR;

namespace Newsletter.Domain.Events;
public sealed record BlogEvent(
    Guid BlogId) : INotification;
