namespace PermitRequestApp.Domain.LeaveRequests;
public interface ILeaveRequestRepository
{
    LeaveRequest? FindLastFormNumber();
}
