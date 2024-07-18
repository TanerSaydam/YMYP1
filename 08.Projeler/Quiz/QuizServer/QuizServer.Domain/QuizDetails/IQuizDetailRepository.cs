using QuizServer.Domain.Shared;

namespace QuizServer.Domain.QuizDetails;
public interface IQuizDetailRepository
{
    Task CreateAsync(QuizDetail quizDetail, CancellationToken cancellationToken = default);
    Task UpdateAsync(QuizDetail quizDetail, CancellationToken cancellationToken = default);
    Task<QuizDetail?> GetByIdAsync(Identity id, CancellationToken cancellationToken = default);
    Task DeleteAsync(QuizDetail quizDetail, CancellationToken cancellationToken = default);
    Task<List<QuizDetail>> GetAllByQuizIdAsync(Identity quizId, CancellationToken cancellationToken = default);
}
