using Microsoft.EntityFrameworkCore;
using QuizServer.Domain.QuizDetails;
using QuizServer.Domain.Quizes;
using QuizServer.Domain.Shared;
using QuizServer.Infrastructure.Context;

namespace QuizServer.Infrastructure.Repositories;
internal sealed class QuizDetailRepository(
    ApplicationDbContext context) : IQuizDetailRepository
{
    public async Task CreateAsync(QuizDetail quizDetail, CancellationToken cancellationToken = default)
    {
        await context.AddAsync(quizDetail, cancellationToken);
        await context.SaveChangesAsync(cancellationToken);
    }

    public async Task UpdateAsync(QuizDetail quizDetail, CancellationToken cancellationToken = default)
    {
        context.Update(quizDetail);
        await context.SaveChangesAsync(cancellationToken);
    }

    public async Task DeleteAsync(QuizDetail quizDetail, CancellationToken cancellationToken = default)
    {
        context.QuizDetails.Remove(quizDetail);
        await context.SaveChangesAsync(cancellationToken);
    }

    public async Task<List<QuizDetail>> GetAllByQuizIdAsync(Identity quizId, CancellationToken cancellationToken = default)
    {
        return await context.QuizDetails.Where(p => p.QuizId == quizId).ToListAsync(cancellationToken);
    }

    public async Task<QuizDetail?> GetByIdAsync(Identity id, CancellationToken cancellationToken = default)
    {
        return await context.QuizDetails.FirstAsync(p => p.Id == id, cancellationToken);
    }

    public async Task<QuizDetail> GetQuizDetailByQuestionNumberAsync(RoomNumber roomNumber, int questionNumber, CancellationToken cancellationToken = default)
    {
        Quiz quiz = await context.Quizzes.FirstAsync(p => p.RoomNumber == roomNumber, cancellationToken);
        QuizDetail[] quizDetails = await context.QuizDetails.Where(p => p.QuizId == quiz.Id).ToArrayAsync(cancellationToken);

        return quizDetails[questionNumber];
    }

    public async Task<int> GetQuizDetailCountByRoomNumberAsync(RoomNumber roomNumber, CancellationToken cancellationToken = default)
    {
        Quiz quiz = await context.Quizzes.FirstAsync(p => p.RoomNumber == roomNumber, cancellationToken);
        int count = await context.QuizDetails.Where(p => p.QuizId == quiz.Id).CountAsync(cancellationToken);

        return count - 1;
    }
}
