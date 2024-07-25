using MediatR;
using QuizServer.Domain.Quizes;
using TS.Result;

namespace QuizServer.Application.Quizzes.ChangeQuizIsStart;

internal sealed class ChangeQuizIsStartCommandHandler(
    IQuizRepository quizRepository) : IRequestHandler<ChangeQuizIsStartCommand, Result<string>>
{
    public async Task<Result<string>> Handle(ChangeQuizIsStartCommand request, CancellationToken cancellationToken)
    {
        RoomNumber roomNumber = new(request.RoomNumber);
        Quiz? quiz = await quizRepository.GetByRoomNumberAsync(roomNumber, cancellationToken);
        if (quiz is null)
        {
            return Result<string>.Failure("Quiz not found");
        }

        IsStart isStart = new(false);
        quiz.ChangeIsStart(isStart);

        await quizRepository.UpdateAsync(quiz, cancellationToken);

        return "Oda müsait hale getirildi";
    }
}
