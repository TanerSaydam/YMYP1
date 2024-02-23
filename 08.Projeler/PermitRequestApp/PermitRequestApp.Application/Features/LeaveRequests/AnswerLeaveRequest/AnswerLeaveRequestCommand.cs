using Ardalis.Result;
using MediatR;

namespace PermitRequestApp.Application.Features.LeaveRequests.AnswerLeaveRequest;
public sealed record AnswerLeaveRequestCommand(
    Guid Id,
    bool IsAccepted) : IRequest<Result<string>>;
