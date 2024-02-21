using Ardalis.Result;
using MediatR;

namespace PermitRequestApp.Application.Features.ADUsers.GetAllUsers;
public sealed record GetAllUsersQuery() : IRequest<Result<List<GetAllUserQueryResponse>>>;
