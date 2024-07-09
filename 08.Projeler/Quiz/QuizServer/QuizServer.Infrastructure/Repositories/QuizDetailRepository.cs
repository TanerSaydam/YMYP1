using QuizServer.Domain.QuizDetails;
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
}
