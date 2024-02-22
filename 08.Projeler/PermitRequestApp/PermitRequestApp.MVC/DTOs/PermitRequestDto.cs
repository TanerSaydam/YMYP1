using PermitRequestApp.Domain.Shared;

namespace PermitRequestApp.MVC.DTOs;

public sealed record PermitRequestDTO(
    Guid EmployeeId,
    LeaveType LeaveType,
    DateTime StartDate,
    DateTime EndDate,
    string Reason);
