using MediatR;
using QuizServer.Domain.Dtos;
using QuizServer.Domain.Quizes;
using TS.Result;

namespace QuizServer.Application.Quizzes.GetAllQuiz;

internal sealed class GetAllQuizQueryHandler(
    IQuizRepository quizRepository) : IRequestHandler<GetAllQuizQuery, Result<List<QuizDto>>>
{
    public async Task<Result<List<QuizDto>>> Handle(GetAllQuizQuery request, CancellationToken cancellationToken)
    {
        var result = await quizRepository.GetAllAsync(cancellationToken);

        var response = result.Select(s => new QuizDto(s.Id.Value, s.Title.Value, s.RoomNumber.Value)).ToList();

        return response;
    }
}
