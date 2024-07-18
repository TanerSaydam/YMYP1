using QuizServer.Domain.Shared;

namespace QuizServer.Domain.Quizes;

public interface IQuizRepository
{
    Task CreateAsync(Quiz quiz, CancellationToken cancellationToken = default);
    Task UpdateAsync(Quiz quiz, CancellationToken cancellationToken = default);
    Task DeleteAsync(Quiz quiz, CancellationToken cancellationToken = default);
    Task<List<Quiz>> GetAllAsync(CancellationToken cancellationToken = default);
    Task<Quiz?> GetByIdAsync(Identity id, CancellationToken cancellationToken = default);
    Task<Quiz?> GetByRoomNumberAsync(RoomNumber roomNumber, CancellationToken cancellationToken = default);
    Task<bool> IsRoomNumberExists(RoomNumber roomNumber, CancellationToken cancellationToken = default);
}
