using MediatR;
using QuizServer.Application.Services;
using QuizServer.Domain.QuizDetails;
using QuizServer.Domain.Quizes;
using TS.Result;

namespace QuizServer.Application.QuizPages.AnswerQuestion;

internal sealed class AnswerQuestionCommandHandler(
   IQuizDetailRepository quizDetailRepository,
   ISignalRService signalRService
   ) : IRequestHandler<AnswerQuestionCommand, Result<string>>
{
    public async Task<Result<string>> Handle(AnswerQuestionCommand request, CancellationToken cancellationToken)
    {
        RoomNumber roomNumber = new(request.RoomNumber);
        QuizDetail quizDetail = await quizDetailRepository.GetQuizDetailByQuestionNumber(roomNumber, request.QuestionNumber, cancellationToken);

        var participants = Shared.Participants.Where(p => p.RoomNumber == request.RoomNumber).Select(s => s.Participant).ToList();

        Participant participant = participants.Where(p => p.Email == request.Email).First();


        string response = "Answer is wrong!";

        CorrectAnswer correctAnswer = CorrectAnswer.FromName(request.Answer);
        if (quizDetail.CorrectAnswer == correctAnswer)
        {
            participant.Point += 1000;
            response = "Answer is right";
        }

        await signalRService.SendParticipantInformationToWhoListener(request.RoomNumber.ToString(), participant);

        return response;
    }
}
