using GenericRepository;
using MediatR;
using PermitRequestApp.Domain.CumulativeLeaveRequests;

namespace PermitRequestApp.Domain.LeaveRequests.Events;

public sealed class CreateCumulativeLeaveRequestEvent(
    ICumulativeLeaveRequestRepository cumulativeLeaveRequestRepository,
    ILeaveRequestRepository leaveRequestRepository,
    Domain.Abstractions.IUnitOfWork unitOfWork) : INotificationHandler<LeaveRequestDomainEvent>
{
    public async Task Handle(LeaveRequestDomainEvent notification, CancellationToken cancellationToken)
    {
        LeaveRequest? leaveRequest = await leaveRequestRepository.GetByExpressionAsync(p => p.Id == notification.Id, cancellationToken);

        if(leaveRequest is null)
        {
            throw new ArgumentException("Leave request is not found");
        }

        TimeSpan timeSpan = leaveRequest.EndDate - leaveRequest.StartDate;

        int totalHours = (int)((timeSpan.TotalDays+1) * 8);

        CumulativeLeaveRequest? cumulativeLeaveRequest = 
            await cumulativeLeaveRequestRepository
            .GetByExpressionAsync(p =>
            p.UserId == leaveRequest.RequestUserId && 
            p.Year == leaveRequest.StartDate.Year && 
            p.LeaveType == leaveRequest.LeaveType, 
            cancellationToken);

        if (cumulativeLeaveRequest is not null)
        {
            cumulativeLeaveRequest.ChangeTotalHours(totalHours);
            cumulativeLeaveRequestRepository.Update(cumulativeLeaveRequest);
        }
        else
        {
           cumulativeLeaveRequest = CumulativeLeaveRequest.Create(
           leaveRequest.LeaveType,
           leaveRequest.RequestUserId,
           totalHours,
           leaveRequest.StartDate.Year);

            await cumulativeLeaveRequestRepository.AddAsync(cumulativeLeaveRequest, cancellationToken);
        }
         
        
        await unitOfWork.SaveChangesAsync(cancellationToken);
    }
}
