using Ardalis.Result;
using MediatR;
using PermitRequestApp.Domain.Abstractions;
using PermitRequestApp.Domain.LeaveRequests;
using PermitRequestApp.Domain.LeaveRequests.Events;

namespace PermitRequestApp.Application.Features.LeaveRequests.AnswerLeaveRequest;

internal sealed class AnswerLeaveRequestCommandHandler(
    ILeaveRequestRepository leaveRequestRepository,
    IUnitOfWork unitOfWork,
    IMediator mediator) : IRequestHandler<AnswerLeaveRequestCommand, Result<string>>
{
    public async Task<Result<string>> Handle(AnswerLeaveRequestCommand request, CancellationToken cancellationToken)
    {
        LeaveRequest leaveRequest = await leaveRequestRepository.GetByExpressionAsync(p => p.Id == request.Id, cancellationToken);

        if(leaveRequest is null)
        {
            return Result.NotFound();
        }

        leaveRequest.ChangeWorkflowStatus(request.IsAccepted);

        leaveRequestRepository.Update(leaveRequest);
        await unitOfWork.SaveChangesAsync(cancellationToken);

        if (request.IsAccepted)
        {
            await mediator.Publish(new LeaveRequestDomainEvent(leaveRequest.Id));
        }

        return "Leave request workflow status change is successfull";
    }
}
