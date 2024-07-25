using MediatR;
using QuizServer.Domain.Quizes;
using TS.Result;

namespace QuizServer.Application.QuizPages.GetQuestionTitle;

internal sealed class GetQuestionTitleCommandHandler(
    IQuizRepository quizRepository
    ) : IRequestHandler<GetQuestionTitleCommand, Result<string>>
{
    public async Task<Result<string>> Handle(GetQuestionTitleCommand request, CancellationToken cancellationToken)
    {
        RoomNumber roomNumber = new(request.RoomNumber);
        Quiz? quiz = await quizRepository.GetByRoomNumberAsync(roomNumber, cancellationToken);
        if (quiz is null)
        {
            return Result<string>.Failure("Quiz not found");
        }

        IsStart isStart = new(true);
        quiz.ChangeIsStart(isStart);

        await quizRepository.UpdateAsync(quiz, cancellationToken);

        var details = quiz.Details.ToArray();

        return details[request.QuestionNumber].Title.Value;
    }
}
