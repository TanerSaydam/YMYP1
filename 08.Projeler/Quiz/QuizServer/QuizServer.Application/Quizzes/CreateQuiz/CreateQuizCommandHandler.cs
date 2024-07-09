using MediatR;
using QuizServer.Domain.Quizes;
using TS.Result;

namespace QuizServer.Application.Quizzes.CreateQuiz;

internal sealed class CreateQuizCommandHandler(
    IQuizRepository quizRepository) : IRequestHandler<CreateQuizCommand, Result<string>>
{
    public async Task<Result<string>> Handle(CreateQuizCommand request, CancellationToken cancellationToken)
    {
        Title title = Title.Create(request.Title);
        int roomNumberInt = new Random().Next(000000, 999999);
        RoomNumber roomNumber = new(roomNumberInt);

        if (await quizRepository.IsRoomNumberExists(roomNumber, cancellationToken))
        {
            roomNumberInt = new Random().Next(000000, 999999);
            roomNumber = new(roomNumberInt);
        }

        Quiz quiz = new(title, roomNumber);
        await quizRepository.CreateAsync(quiz, cancellationToken);

        return "Quiz create is successful";
    }
}
