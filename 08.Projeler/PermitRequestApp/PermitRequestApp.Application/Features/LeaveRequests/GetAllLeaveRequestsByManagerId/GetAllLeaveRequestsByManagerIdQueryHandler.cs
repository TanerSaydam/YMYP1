using Ardalis.Result;
using MediatR;
using Microsoft.EntityFrameworkCore;
using PermitRequestApp.Domain.LeaveRequests;

namespace PermitRequestApp.Application.Features.LeaveRequests.GetAllLeaveRequestsByManagerId;

internal sealed class GetAllLeaveRequestsByManagerIdQueryHandler(
    ILeaveRequestRepository leaveRequestRepository) : IRequestHandler<GetAllLeaveRequestsByManagerIdQuery, Result<List<GetAllLeaveRequestsByManagerIdQueryResponse>>>
{
    public async Task<Result<List<GetAllLeaveRequestsByManagerIdQueryResponse>>> Handle(GetAllLeaveRequestsByManagerIdQuery request, CancellationToken cancellationToken)
    {
        List<LeaveRequest> leaveRequests =
            await leaveRequestRepository
            .GetWhere(p => p.RequestUser!.ManagerId == request.ManagerId)
            .Include(p => p.RequestUser)
            .OrderByDescending(p => p.CreatedAt)
            .ToListAsync(cancellationToken);

        List<GetAllLeaveRequestsByManagerIdQueryResponse> response = 
            leaveRequests.Select(s => 
            new GetAllLeaveRequestsByManagerIdQueryResponse
            (
            s.Id,
            s.RequestFormNumber,
            s.RequestUser!.FullName,
            s.LeaveType,
            s.CreatedAt,
            s.StartDate,
            s.EndDate,
            s.TotalHours,
            s.WorkflowStatus
            ))
            .ToList();

        return response;
    }
}
