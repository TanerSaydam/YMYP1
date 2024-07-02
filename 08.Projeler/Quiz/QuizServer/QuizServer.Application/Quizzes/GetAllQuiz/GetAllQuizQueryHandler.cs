using MediatR;
using QuizServer.Domain.Quizes;
using TS.Result;

namespace QuizServer.Application.Quizzes.GetAllQuiz;

internal sealed class GetAllQuizQueryHandler(
    IQuizRepository quizRepository) : IRequestHandler<GetAllQuizQuery, Result<List<Quiz>>>
{
    public async Task<Result<List<Quiz>>> Handle(GetAllQuizQuery request, CancellationToken cancellationToken)
    {
        var result = await quizRepository.GetAllAsync(cancellationToken);

        return result;
    }
}
