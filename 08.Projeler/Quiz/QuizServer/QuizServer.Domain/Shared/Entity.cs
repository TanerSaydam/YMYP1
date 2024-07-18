namespace QuizServer.Domain.Shared;
public abstract class Entity
{
    protected Entity()
    {
        Id = new Identity(Guid.NewGuid());
    }
    public Identity Id { get; set; }
}