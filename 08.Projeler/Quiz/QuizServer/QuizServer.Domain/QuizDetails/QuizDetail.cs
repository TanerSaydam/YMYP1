using QuizServer.Domain.Quizes;
using QuizServer.Domain.Shared;

namespace QuizServer.Domain.QuizDetails;
public sealed class QuizDetail : Entity
{
    public Id QuizId { get; set; } = default!;
    public Title Title { get; set; } = default!;


}
