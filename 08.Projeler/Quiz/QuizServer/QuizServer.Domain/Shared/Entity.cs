namespace QuizServer.Domain.Shared;
public abstract class Entity
{
    protected Entity()
    {
        Id = new Id(Guid.NewGuid());
    }
    public Id Id { get; set; }
}