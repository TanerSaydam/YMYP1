using MediatR;
using QuizServer.Domain.Dtos;
using QuizServer.Domain.QuizDetails;
using QuizServer.Domain.Quizes;
using TS.Result;

namespace QuizServer.Application.QuizPages.GetQuestion;
public sealed record GetQuizDetailByRoomNumberAndQuestioNumberCommand(
    int RoomNumber,
    int QuestionNumber) : IRequest<Result<QuizDetailDto>>;

internal sealed class GetQuizByRoomNumberAndQuestioNumberCommandHandler
    (IQuizDetailRepository quizDetailRepository) : IRequestHandler<GetQuizDetailByRoomNumberAndQuestioNumberCommand, Result<QuizDetailDto>>
{
    public async Task<Result<QuizDetailDto>> Handle(GetQuizDetailByRoomNumberAndQuestioNumberCommand request, CancellationToken cancellationToken)
    {
        RoomNumber roomNumber = new(request.RoomNumber);
        QuizDetail quizDetail = await quizDetailRepository.GetQuizDetailByQuestionNumber(roomNumber, request.QuestionNumber, cancellationToken);

        var response = new QuizDetailDto(
           quizDetail.Id.Value,
           quizDetail.Title.Value,
           quizDetail.AnswerA.Value,
           quizDetail.AnswerB.Value,
           quizDetail.AnswerC.Value,
           quizDetail.AnswerD.Value,
           "",
           quizDetail.TimeOut.Value
           );

        return response;
    }
}
