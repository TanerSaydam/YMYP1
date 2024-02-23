using Ardalis.Result;
using MediatR;

namespace PermitRequestApp.Application.Features.LeaveRequests.GetAllLeaveRequestsByManagerId;
public sealed record GetAllLeaveRequestsByManagerIdQuery(
    Guid ManagerId): IRequest<Result<List<GetAllLeaveRequestsByManagerIdQueryResponse>>>;
