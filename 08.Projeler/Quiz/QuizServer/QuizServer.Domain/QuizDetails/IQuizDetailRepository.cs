using QuizServer.Domain.Quizes;
using QuizServer.Domain.Shared;

namespace QuizServer.Domain.QuizDetails;
public interface IQuizDetailRepository
{
    Task CreateAsync(QuizDetail quizDetail, CancellationToken cancellationToken = default);
    Task UpdateAsync(QuizDetail quizDetail, CancellationToken cancellationToken = default);
    Task<QuizDetail?> GetByIdAsync(Identity id, CancellationToken cancellationToken = default);
    Task DeleteAsync(QuizDetail quizDetail, CancellationToken cancellationToken = default);
    Task<List<QuizDetail>> GetAllByQuizIdAsync(Identity quizId, CancellationToken cancellationToken = default);

    Task<QuizDetail> GetQuizDetailByQuestionNumberAsync(RoomNumber roomNumber, int questionNumber, CancellationToken cancellationToken = default);

    Task<int> GetQuizDetailCountByRoomNumberAsync(RoomNumber roomNumber, CancellationToken cancellationToken = default);
}
