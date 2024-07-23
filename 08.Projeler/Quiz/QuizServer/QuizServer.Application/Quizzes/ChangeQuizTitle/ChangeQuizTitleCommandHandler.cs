using MediatR;
using QuizServer.Domain.Quizes;
using QuizServer.Domain.Shared;
using TS.Result;

namespace QuizServer.Application.Quizzes.ChangeQuizTitle;

internal sealed class ChangeQuizTitleCommandHandler(
    IQuizRepository quizRepository
    ) : IRequestHandler<ChangeQuizTitleCommand, Result<string>>
{
    public async Task<Result<string>> Handle(ChangeQuizTitleCommand request, CancellationToken cancellationToken)
    {
        Identity id = new(request.Id);
        Quiz? quiz = await quizRepository.GetByIdAsync(id, cancellationToken);
        if (quiz is null)
        {
            return Result<string>.Failure("Quiz bulunamadı");
        }

        Title title = Title.Create(request.Title);
        quiz.ChangeTitle(title);

        await quizRepository.UpdateAsync(quiz);
        return "Quiz başlığı başarıyla değiştirildi";
    }
}
