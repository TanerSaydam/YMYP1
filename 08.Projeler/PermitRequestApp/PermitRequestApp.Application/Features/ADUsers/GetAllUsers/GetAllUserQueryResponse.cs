namespace PermitRequestApp.Application.Features.ADUsers.GetAllUsers;

public sealed record GetAllUserQueryResponse(
    Guid Id,
    string FullName
    );
