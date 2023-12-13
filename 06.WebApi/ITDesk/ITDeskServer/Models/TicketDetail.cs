namespace ITDeskServer.Models;

public sealed class TicketDetail
{
    public TicketDetail()
    {
        Id = Guid.NewGuid();
    }
    public Guid Id { get; set; }
    public Guid TicketId { get; set; }
    public Guid AppUserId { get; set; }
    public AppUser? AppUser { get; set; }
    public string Content { get; set; } = string.Empty;
    public DateTime CreatedDate { get; set; }
}
