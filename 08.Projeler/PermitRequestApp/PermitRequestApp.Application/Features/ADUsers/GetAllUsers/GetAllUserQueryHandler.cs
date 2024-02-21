using Ardalis.Result;
using MediatR;
using Microsoft.EntityFrameworkCore;
using PermitRequestApp.Domain.ADUsers;

namespace PermitRequestApp.Application.Features.ADUsers.GetAllUsers;

internal sealed class GetAllUserQueryHandler(
    IADUserRepository adUserRepository) : IRequestHandler<GetAllUsersQuery, Result<List<GetAllUserQueryResponse>>>
{
    public async Task<Result<List<GetAllUserQueryResponse>>> Handle(GetAllUsersQuery request, CancellationToken cancellationToken)
    {
        var response = 
            await adUserRepository
            .GetAllUsers()
            .Select(s=> new GetAllUserQueryResponse(
                s.Id,
                s.FirstName + " " + s.LastName))
            .ToListAsync(cancellationToken);

        return response;
    }
}
