using PermitRequestApp.Domain.Abstractions;
using PermitRequestApp.Domain.ADUsers;
using PermitRequestApp.Domain.Shared;

namespace PermitRequestApp.Domain.LeaveRequests;

public sealed class LeaveRequest : Entity
{
    private LeaveRequest(int formNumber, LeaveType leaveType, string? reason, DateTime startDate, DateTime endDate,
        Guid requestUserId, Guid? assignedUserId, Workflow workflow)
    {
        FormNumber = formNumber;
        LeaveType = leaveType;
        Reason = reason;
        StartDate = startDate;
        EndDate = endDate;
        RequestUserId = requestUserId;
        AssignedUserId = assignedUserId;
        WorkflowStatus = workflow;
    }

    private LeaveRequest()
    {
    }
    public int FormNumber { get; private set; }
    public string RequestFormNumber => $"LRF-{FormNumber.ToString().PadLeft(6, '0')}";
    public LeaveType LeaveType { get; private set; } = LeaveType.AnnualLeave;
    public string? Reason { get; private set; } = string.Empty;
    public DateTime StartDate { get; private set; }
    public DateTime EndDate { get; private set; }
    public int TotalHours => (int)((EndDate.Date - StartDate.Date).TotalDays +1) * 8;
    public Workflow WorkflowStatus { get; private set; } = Workflow.Pending;

    public Guid RequestUserId { get; private set; }
    public ADUser? RequestUser { get; private set; } 
    public Guid? AssignedUserId { get; private set; }
    public ADUser? AssignedUser { get; private set; }
    public DateTime CreatedAt { get; private set; }
    public Guid? CreatedById { get; private set; }
    public ADUser? CreatedBy { get; private set; }
    public DateTime? LastModifiedAt { get; private set; }
    public Guid? LastModifiedById { get; private set; }
    public ADUser? LastModifiedBy { get; private set; }

    public static LeaveRequest Create(int formNumber, LeaveType leaveType, string? reason, DateTime startDate, DateTime endDate, Guid requestUserId, Guid? assignedUserId, Workflow workflow)
    {
        return new(formNumber, leaveType, reason, startDate, endDate, requestUserId,assignedUserId, workflow);
    }

    public void SetCreatedAt()
    {
        CreatedAt = DateTime.Now;
    }

    public void SetModifiedAt()
    {
        LastModifiedAt = DateTime.Now;
    }

    public void ChangeWorkflowStatus(bool isAccepted)
    {
        WorkflowStatus = isAccepted ? Workflow.Approved : Workflow.Rejected;
    }
}
