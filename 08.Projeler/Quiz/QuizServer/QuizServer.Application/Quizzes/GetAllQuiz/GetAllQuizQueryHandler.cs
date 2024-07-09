using MediatR;
using QuizServer.Domain.Quizes;
using TS.Result;

namespace QuizServer.Application.Quizzes.GetAllQuiz;

internal sealed class GetAllQuizQueryHandler(
    IQuizRepository quizRepository) : IRequestHandler<GetAllQuizQuery, Result<List<GetAllQuizQueryResponse>>>
{
    public async Task<Result<List<GetAllQuizQueryResponse>>> Handle(GetAllQuizQuery request, CancellationToken cancellationToken)
    {
        var result = await quizRepository.GetAllAsync(cancellationToken);

        var response = result.Select(s => new GetAllQuizQueryResponse(s.Id.Value, s.Title.Value, s.RoomNumber.Value)).ToList();

        return response;
    }
}
