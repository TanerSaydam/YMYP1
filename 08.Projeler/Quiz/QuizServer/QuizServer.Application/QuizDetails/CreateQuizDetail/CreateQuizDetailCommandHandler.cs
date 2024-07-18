using MediatR;
using QuizServer.Domain.QuizDetails;
using QuizServer.Domain.Quizes;
using QuizServer.Domain.Shared;
using TS.Result;

namespace QuizServer.Application.QuizDetails.CreateQuizDetail;

internal sealed class CreateQuizDetailCommandHandler(
    IQuizDetailRepository quizDetailRepository) : IRequestHandler<CreateQuizDetailCommand, Result<string>>
{
    public async Task<Result<string>> Handle(CreateQuizDetailCommand request, CancellationToken cancellationToken)
    {
        Identity quizId = new(request.QuizId);
        Title title = Title.Create(request.Title);
        Answer answerA = new(request.AnswerA);
        Answer answerB = new(request.AnswerB);
        Answer answerC = new(request.AnswerC);
        Answer answerD = new(request.AnswerD);
        CorrectAnswer correctAnswer = CorrectAnswer.FromName(request.CorrectAnswer);
        TimeOut timeOut = new(request.TimeOut);

        QuizDetail quizDetail = new(quizId, title, answerA, answerB, answerC, answerD, correctAnswer, timeOut);

        await quizDetailRepository.CreateAsync(quizDetail, cancellationToken);

        return "Create is successful";
    }
}
