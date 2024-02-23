using Ardalis.Result;
using MediatR;

namespace PermitRequestApp.Application.Features.CumulativeLeaveRequests.GetAllCumulativeLeaveRequest;
public sealed record GetAllCumulativeLeaveRequestQuery() : IRequest<Result<List<GetAllCumulativeLeaveRequestQueryResponse>>>;
