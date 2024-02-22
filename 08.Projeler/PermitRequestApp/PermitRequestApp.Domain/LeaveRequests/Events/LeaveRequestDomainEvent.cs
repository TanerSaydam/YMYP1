using MediatR;

namespace PermitRequestApp.Domain.LeaveRequests.Events;
public sealed class LeaveRequestDomainEvent : INotification
{
    public Guid Id { get; }
    public LeaveRequestDomainEvent(Guid id)
    {
        Id = id;
    }
}
