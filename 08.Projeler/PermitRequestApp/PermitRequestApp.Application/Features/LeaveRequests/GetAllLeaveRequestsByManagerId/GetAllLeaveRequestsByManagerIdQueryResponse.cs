using PermitRequestApp.Domain.LeaveRequests;
using PermitRequestApp.Domain.Shared;

namespace PermitRequestApp.Application.Features.LeaveRequests.GetAllLeaveRequestsByManagerId;

public sealed record GetAllLeaveRequestsByManagerIdQueryResponse(
    Guid Id,
    string RequestFormNumber,
    string FullName,
    LeaveType LeaveType,
    DateTime CreatedDate,
    DateTime StartDate,
    DateTime EndDate,
    int TotalHours,
    Workflow WorkFlow);
