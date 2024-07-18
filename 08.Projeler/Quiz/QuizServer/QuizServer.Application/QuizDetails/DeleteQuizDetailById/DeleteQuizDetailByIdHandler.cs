using MediatR;
using QuizServer.Domain.QuizDetails;
using QuizServer.Domain.Shared;
using TS.Result;

namespace QuizServer.Application.QuizDetails.DeleteQuizDetailById;

internal sealed class DeleteQuizDetailByIdHandler(
    IQuizDetailRepository quizDetailRepository) : IRequestHandler<DeleteQuizDetailByIdCommand, Result<string>>
{
    public async Task<Result<string>> Handle(DeleteQuizDetailByIdCommand request, CancellationToken cancellationToken)
    {
        Identity id = new(request.Id);
        QuizDetail? quizDetail = await quizDetailRepository.GetByIdAsync(id, cancellationToken);
        if (quizDetail is null)
        {
            return Result<string>.Failure("Quiz detail not found");
        }

        await quizDetailRepository.DeleteAsync(quizDetail, cancellationToken);

        return "Delete is successful";
    }
}
