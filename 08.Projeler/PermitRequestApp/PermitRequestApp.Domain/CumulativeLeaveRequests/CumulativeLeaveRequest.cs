using PermitRequestApp.Domain.Abstractions;
using PermitRequestApp.Domain.ADUsers;
using PermitRequestApp.Domain.Shared;

namespace PermitRequestApp.Domain.CumulativeLeaveRequests;

public sealed class CumulativeLeaveRequest : Entity
{
    private CumulativeLeaveRequest(LeaveType leaveType, Guid userId, int totalHours, int year)
    {
        LeaveType = leaveType;
        UserId = userId;
        TotalHours = totalHours;
        Year = year;
    }

    private CumulativeLeaveRequest()
    {

    }
    public LeaveType LeaveType { get; private set; } = LeaveType.ExcusedAbsence;
    public Guid UserId { get; private set; }
    public ADUser? User { get; private set; }
    public int TotalHours { get; private set; }
    public int Year { get; private set; }

    public static CumulativeLeaveRequest Create(LeaveType leaveType, Guid userId, int totalHours, int year)
    {
        return new CumulativeLeaveRequest(leaveType, userId, totalHours, year);
    }

}
