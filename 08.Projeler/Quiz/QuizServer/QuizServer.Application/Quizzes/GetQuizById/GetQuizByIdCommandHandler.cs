using MediatR;
using QuizServer.Domain.Dtos;
using QuizServer.Domain.Quizes;
using QuizServer.Domain.Shared;
using TS.Result;

namespace QuizServer.Application.Quizzes.GetQuizById;

internal sealed class GetQuizByIdCommandHandler(
    IQuizRepository quizRepository) : IRequestHandler<GetQuizByIdCommand, Result<QuizDto>>
{
    public async Task<Result<QuizDto>> Handle(GetQuizByIdCommand request, CancellationToken cancellationToken)
    {
        Identity id = new(request.id);
        Quiz? quiz = await quizRepository.GetByIdAsync(id, cancellationToken);
        if (quiz is null)
        {
            return Result<QuizDto>.Failure("Quiz not found");
        }

        QuizDto quizDto = new(
            quiz.Id.Value,
            quiz.Title.Value,
            quiz.RoomNumber.Value);

        return quizDto;
    }
}
