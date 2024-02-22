using Ardalis.Result;
using MediatR;
using PermitRequestApp.Domain.Shared;

namespace PermitRequestApp.Application.Features.LeaveRequests.CreateLeaveRequest;
public sealed record CreateLeaveRequestCommand(
    Guid EmployeeId,
    LeaveType LeaveType,
    DateTime StartDate,
    DateTime EndDate,
    string? Reason) : IRequest<Result<string>>;
