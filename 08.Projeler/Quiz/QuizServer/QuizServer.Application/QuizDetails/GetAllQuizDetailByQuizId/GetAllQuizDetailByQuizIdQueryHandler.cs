using MediatR;
using QuizServer.Domain.Dtos;
using QuizServer.Domain.QuizDetails;
using QuizServer.Domain.Shared;
using TS.Result;

namespace QuizServer.Application.QuizDetails.GetAllQuizDetailByQuizId;

internal sealed class GetAllQuizDetailByQuizIdQueryHandler(
    IQuizDetailRepository quizDetailRepository) : IRequestHandler<GetAllQuizDetailByQuizIdQuery, Result<List<QuizDetailDto>>>
{
    public async Task<Result<List<QuizDetailDto>>> Handle(GetAllQuizDetailByQuizIdQuery request, CancellationToken cancellationToken)
    {
        Identity quizId = new(request.QuizId);
        var quizDetails = await quizDetailRepository.GetAllByQuizIdAsync(quizId, cancellationToken);
        var response = quizDetails.Select(s => new QuizDetailDto(
            s.Id.Value,
            s.Title.Value,
            s.AnswerA.Value,
            s.AnswerB.Value,
            s.AnswerC.Value,
            s.AnswerD.Value,
            s.CorrectAnswer.Name,
            s.TimeOut.Value
            )).ToList();

        return response;
    }
}
