namespace QuizServer.Domain.QuizDetails;
public interface IQuizDetailRepository
{
    Task CreateAsync(QuizDetail quizDetail, CancellationToken cancellationToken = default);
}
