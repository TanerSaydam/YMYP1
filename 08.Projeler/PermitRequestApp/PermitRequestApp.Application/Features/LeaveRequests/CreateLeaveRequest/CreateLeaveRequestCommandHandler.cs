using Ardalis.Result;
using MediatR;
using PermitRequestApp.Domain.ADUsers;
using PermitRequestApp.Domain.CumulativeLeaveRequests;
using PermitRequestApp.Domain.LeaveRequests;
using PermitRequestApp.Domain.Shared;

namespace PermitRequestApp.Application.Features.LeaveRequests.CreateLeaveRequest;

internal sealed class CreateLeaveRequestCommandHandler(
    IADUserRepository adUserRepository,
    ILeaveRequestRepository leaveRequestRepository,
    ICumulativeLeaveRequestRepository cumulativeLeaveRequestRepository,
    Domain.Abstractions.IUnitOfWork unitOfWork
    ): IRequestHandler<CreateLeaveRequestCommand, Result<string>>
{
    public async Task<Result<string>> Handle(CreateLeaveRequestCommand request, CancellationToken cancellationToken)
    {
        ADUser? user = await adUserRepository.GetByIdAsync(request.EmployeeId, cancellationToken);
        if (user is null)
        {
            return Result.Conflict("User not found!");
        }

        int lastFormNumber = leaveRequestRepository.FindLastFormNumber();
        if(lastFormNumber < 100)
        {
            lastFormNumber = 100;
        }
        else
        {
            lastFormNumber++;
        } 


        CumulativeLeaveRequest? cumulativeLeaveRequest = 
            await cumulativeLeaveRequestRepository
            .GetByExpressionAsync(p=> p.UserId == request.EmployeeId && p.LeaveType == request.LeaveType, cancellationToken);


        Workflow workflow = Workflow.Pending;

        if(cumulativeLeaveRequest is not null)
        {
            int currentTotalHours = cumulativeLeaveRequest.TotalHours;
            int newHours = ((int)(request.EndDate - request.StartDate).TotalDays + 1) * 8;

            int total = currentTotalHours + newHours;

            if(request.LeaveType == LeaveType.AnnualLeave)
            {
                if(total > 123)
                {
                    workflow = Workflow.Exception;
                }
            }
            else
            {
                if(total > 48)
                {
                    workflow = Workflow.Exception;
                }
            }

        }


        LeaveRequest leaveRequest = LeaveRequest.Create(
            lastFormNumber,
            request.LeaveType,
            request.Reason,
            request.StartDate,
            request.EndDate,
            user.Id,
            user.ManagerId,
            workflow);

        await leaveRequestRepository.AddAsync(leaveRequest, cancellationToken);
        await unitOfWork.SaveChangesAsync(cancellationToken);
       
        return "Request is successful";
    }
}
