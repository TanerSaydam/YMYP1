using PermitRequestApp.Domain.Abstractions;
using PermitRequestApp.Domain.ADUsers;
using PermitRequestApp.Domain.Shared;

namespace PermitRequestApp.Domain.LeaveRequests;

public sealed class LeaveRequest : Entity
{
    private LeaveRequest(int formNumber, LeaveType leaveType, string reason, DateTime startDate, DateTime endDate, Workflow workflowStatus, Guid assignedUserId)
    {
        FormNumber = formNumber;
        LeaveType = leaveType;
        Reason = reason;
        StartDate = startDate;
        EndDate = endDate;
        WorkflowStatus = workflowStatus;
        AssignedUserId = assignedUserId;
    }

    private LeaveRequest()
    {
    }
    public int FormNumber { get; private set; }
    public string RequestFormNumber => $"LRF-{FormNumber.ToString().PadLeft(6, '0')}";

    public LeaveType LeaveType { get; private set; } = LeaveType.AnnualLeave;
    public string Reason { get; private set; } = string.Empty;
    public DateTime StartDate { get; private set; }
    public DateTime EndDate { get; private set; }
    public Workflow WorkflowStatus { get; private set; } = Workflow.None;
    public Guid AssignedUserId { get; private set; }
    public ADUser? AssignedUser { get; private set; }
    public DateTime CreatedAt { get; private set; }
    public Guid CreatedById { get; private set; }
    public ADUser? CreatedBy { get; private set; }
    public DateTime? LastModifiedAt { get; private set; }
    public Guid LastModifiedById { get; private set; }
    public ADUser? LastModifiedBy { get; private set; }

    public static LeaveRequest Create(int formNumber, LeaveType leaveType, string reason, DateTime startDate, DateTime endDate, Workflow workflowStatus, Guid assignedUserId)
    {
        return new(formNumber, leaveType, reason, startDate, endDate, workflowStatus, assignedUserId);
    }

    public void SetCreatedAt()
    {
        CreatedAt = DateTime.Now;
    }

    public void SetModifiedAt()
    {
        LastModifiedAt = DateTime.Now;
    }
}
