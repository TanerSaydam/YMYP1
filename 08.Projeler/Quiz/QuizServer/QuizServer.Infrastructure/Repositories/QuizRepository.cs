using Microsoft.EntityFrameworkCore;
using QuizServer.Domain.Quizes;
using QuizServer.Domain.Shared;
using QuizServer.Infrastructure.Context;

namespace QuizServer.Infrastructure.Repositories;
internal sealed class QuizRepository(
    ApplicationDbContext context) : IQuizRepository
{
    public async Task CreateAsync(Quiz quiz, CancellationToken cancellationToken = default)
    {
        await context.AddAsync(quiz, cancellationToken);
        await context.SaveChangesAsync(cancellationToken);
    }

    public async Task DeleteAsync(Quiz quiz, CancellationToken cancellationToken = default)
    {
        context.Remove(quiz);
        await context.SaveChangesAsync(cancellationToken);
    }

    public async Task<List<Quiz>> GetAllAsync(CancellationToken cancellationToken = default)
    {
        return await context.Quizzes.ToListAsync(cancellationToken);
    }

    public async Task<Quiz?> GetByIdAsync(Id id, CancellationToken cancellationToken = default)
    {
        return await context.Quizzes.FindAsync(id, cancellationToken);
    }

    public async Task<Quiz?> GetByRoomNumberAsync(RoomNumber roomNumber, CancellationToken cancellationToken = default)
    {
        return await context.Quizzes.FirstOrDefaultAsync(p => p.RoomNumber == roomNumber, cancellationToken);
    }

    public async Task<bool> IsRoomNumberExists(RoomNumber roomNumber, CancellationToken cancellationToken = default)
    {
        return await context.Quizzes.AnyAsync(p => p.RoomNumber == roomNumber, cancellationToken);
    }

    public async Task UpdateAsync(Quiz quiz, CancellationToken cancellationToken = default)
    {
        context.Update(quiz);
        await context.SaveChangesAsync(cancellationToken);
    }
}
