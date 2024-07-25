using MediatR;
using QuizServer.Domain.Dtos;
using TS.Result;

namespace QuizServer.Application.QuizPages.GetParticipants;
public sealed record GetParticipantsQuery(int RoomNumber) : IRequest<Result<List<QuizParticipant>>>;
