using MediatR;
using QuizServer.Domain.Quizes;
using QuizServer.Domain.Shared;
using TS.Result;

namespace QuizServer.Application.Quizzes.DeleteQuizById;

internal sealed class DeleteQuizByIdCommandHandler(
    IQuizRepository quizRepository) : IRequestHandler<DeleteQuizByIdCommand, Result<string>>
{
    public async Task<Result<string>> Handle(DeleteQuizByIdCommand request, CancellationToken cancellationToken)
    {
        Identity id = new(request.Id);
        Quiz? quiz = await quizRepository.GetByIdAsync(id);
        if (quiz is null)
        {
            return Result<string>.Failure("Quiz bulunamadı");
        }
        await quizRepository.DeleteAsync(quiz, cancellationToken);

        return "Quiz başarıyla silindi";
    }
}
