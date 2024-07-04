using MediatR;
using QuizServer.Domain.Quizes;
using TS.Result;

namespace QuizServer.Application.QuizParticipants.JoinQuiz;

internal sealed class JoinQuizCommandHandler(
    IQuizRepository quizRepository) : IRequestHandler<JoinQuizCommand, Result<string>>
{
    public async Task<Result<string>> Handle(JoinQuizCommand request, CancellationToken cancellationToken)
    {
        RoomNumber roomNumber = new(request.RoomNumber);
        Quiz? quiz = await quizRepository.GetByRoomNumberAsync(roomNumber, cancellationToken);

        if (quiz is null)
        {
            return Result<string>.Failure("Quiz not found");
        }

        Participant participant = new(request.UserName, request.Email);
        Participants participants = new(request.RoomNumber, participant);
        Shared.Participants.Add(participants);


        //signalR ile katılımcı bilgisini FrontEnd'e göndereceğiz

        return "Join is successful";
    }
}
