using PermitRequestApp.Domain.Shared;

namespace PermitRequestApp.Application.Features.CumulativeLeaveRequests.GetAllCumulativeLeaveRequest;

public sealed record GetAllCumulativeLeaveRequestQueryResponse(
    string FullName,
    LeaveType LeaveType,
    int Year,
    int TotalHours);
