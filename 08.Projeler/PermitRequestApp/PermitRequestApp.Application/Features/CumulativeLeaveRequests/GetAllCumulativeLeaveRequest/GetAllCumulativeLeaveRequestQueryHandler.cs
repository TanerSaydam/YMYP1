using Ardalis.Result;
using MediatR;
using Microsoft.EntityFrameworkCore;
using PermitRequestApp.Domain.CumulativeLeaveRequests;

namespace PermitRequestApp.Application.Features.CumulativeLeaveRequests.GetAllCumulativeLeaveRequest;

internal sealed class GetAllCumulativeLeaveRequestQueryHandler(
    ICumulativeLeaveRequestRepository cumulativeLeaveRequestRepository) : IRequestHandler<GetAllCumulativeLeaveRequestQuery, Result<List<GetAllCumulativeLeaveRequestQueryResponse>>>
{
    public async Task<Result<List<GetAllCumulativeLeaveRequestQueryResponse>>> Handle(GetAllCumulativeLeaveRequestQuery request, CancellationToken cancellationToken)
    {
        List<CumulativeLeaveRequest> cumulativeLeaveRequests = await cumulativeLeaveRequestRepository.GetAll().Include(p=> p.User).ToListAsync(cancellationToken);

        List<GetAllCumulativeLeaveRequestQueryResponse> response = 
            cumulativeLeaveRequests.Select(s=> new GetAllCumulativeLeaveRequestQueryResponse
            (
                s.User!.FullName,
                s.LeaveType,
                s.Year,
                s.TotalHours
            )).ToList();

        return response;

    }
}
