using PermitRequestApp.Domain.Abstractions;
using PermitRequestApp.Domain.ADUsers;
using PermitRequestApp.Domain.CumulativeLeaveRequests;

namespace PermitRequestApp.Domain.Notifications;

public sealed class Notification : Entity
{
    private Notification(Guid userId, string message, Guid cumulativeLeaveRequestId)
    {
        UserId = userId;
        Message = message;
        CumulativeLeaveRequestId = cumulativeLeaveRequestId;
        CreateDate = DateTime.Now;
    }

    private Notification()
    {

    }
    public Guid UserId { get; private set; }
    public ADUser? User { get; private set; }
    public string Message { get; private set; } = string.Empty;
    public DateTime CreateDate { get; private set; }
    public Guid CumulativeLeaveRequestId { get; private set; }
    public CumulativeLeaveRequest? CumulativeLeaveRequest { get; private set; }

    public static Notification Create(Guid userId, string message, Guid cumulativeLeaveRequestId)
    {
        return new(userId, message, cumulativeLeaveRequestId);
    }

}
