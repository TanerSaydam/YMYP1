using PermitRequestApp.Application.Features.ADUsers.GetAllUsers;
using PermitRequestApp.Application.Features.LeaveRequests.GetAllLeaveRequestsByManagerId;

namespace PermitRequestApp.MVC.DTOs;

public sealed record LeaveRequestListDto(
    Guid? ManagerId,
    List<GetAllUserQueryResponse> Users,
    List<GetAllLeaveRequestsByManagerIdQueryResponse> LeaveRequests);
