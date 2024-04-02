namespace Newsletter.Domain.Entities;

public sealed class Subscribe
{
    public Subscribe()
    {
        Id = Guid.NewGuid();
    }

    public Guid Id { get; set; }
    public string Email { get; set; } = string.Empty;
    public bool EmailConfirmed { get; set; }
}