using MediatR;
using QuizServer.Domain.QuizDetails;
using QuizServer.Domain.Quizes;
using QuizServer.Domain.Shared;
using TS.Result;

namespace QuizServer.Application.QuizDetails.UpdateQuizDetail;

internal sealed class UpdateQuizDetailCommandHandler(
    IQuizDetailRepository quizDetailRepository) : IRequestHandler<UpdateQuizDetailCommand, Result<string>>
{
    public async Task<Result<string>> Handle(UpdateQuizDetailCommand request, CancellationToken cancellationToken)
    {
        Identity identity = new(request.Id);
        QuizDetail? quizDetail = await quizDetailRepository.GetByIdAsync(identity, cancellationToken);
        if (quizDetail is null)
        {
            return Result<string>.Failure("Quiz detay bulunamadı");
        }

        Title title = Title.Create(request.Title);
        Answer answerA = new(request.AnswerA);
        Answer answerB = new(request.AnswerB);
        Answer answerC = new(request.AnswerC);
        Answer answerD = new(request.AnswerD);
        CorrectAnswer correctAnswer = CorrectAnswer.FromName(request.CorrectAnswer);
        TimeOut timeOut = new(request.TimeOut);

        quizDetail.SetTitle(title);
        quizDetail.SetAnswerA(answerA);
        quizDetail.SetAnswerB(answerB);
        quizDetail.SetAnswerC(answerC);
        quizDetail.SetAnswerD(answerD);
        quizDetail.SetCorrectAnswer(correctAnswer);
        quizDetail.SetTimeOut(timeOut);

        await quizDetailRepository.UpdateAsync(quizDetail, cancellationToken);

        return "Güncelleme işlemi başarılı";
    }
}

