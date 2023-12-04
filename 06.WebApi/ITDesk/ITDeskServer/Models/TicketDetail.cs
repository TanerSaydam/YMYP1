namespace ITDeskServer.Models;

public sealed class TicketDetail
{
    public Guid Id { get; set; }
    public Guid TicketId { get; set; }
    public Guid UserId { get; set; }
    public AppUser AppUser { get; set; } = new();
    public string Content { get; set; } = string.Empty;
    public DateTime CreatedDate { get; set; }
}
