using MediatR;
using QuizServer.Application.Services;
using QuizServer.Domain.QuizDetails;
using QuizServer.Domain.Quizes;
using TS.Result;

namespace QuizServer.Application.QuizPages.AnswerQuestion;

internal sealed class AnswerQuestionCommandHandler(
   IQuizDetailRepository quizDetailRepository,
   ISignalRService signalRService
   ) : IRequestHandler<AnswerQuestionCommand, Result<bool>>
{
    public async Task<Result<bool>> Handle(AnswerQuestionCommand request, CancellationToken cancellationToken)
    {
        RoomNumber roomNumber = new(request.RoomNumber);
        QuizDetail quizDetail = await quizDetailRepository.GetQuizDetailByQuestionNumberAsync(roomNumber, request.QuestionNumber, cancellationToken);

        var participants = Shared.Participants.Where(p => p.RoomNumber == request.RoomNumber).Select(s => s.Participant).ToList();

        Participant participant = participants.Where(p => p.Email == request.Email).First();


        bool response = false;

        CorrectAnswer correctAnswer = CorrectAnswer.FromName(request.Answer);
        if (quizDetail.CorrectAnswer == correctAnswer)
        {
            participant.Point += 1000 - (1000 / ((quizDetail.TimeOut.Value - request.Time + 2) * 10));
            if (participant.Point > 1000) participant.Point = 1000;
            if (participant.Point < 0) participant.Point = 0;
            response = true;
        }

        await signalRService.SendParticipantInformationToWhoListener(request.RoomNumber.ToString(), participant);

        return response;
    }
}
