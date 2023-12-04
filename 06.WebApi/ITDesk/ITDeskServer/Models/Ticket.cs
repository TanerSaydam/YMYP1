namespace ITDeskServer.Models;

public sealed class Ticket
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public AppUser AppUser { get; set; } = new();
    public string Subject { get; set; } = string.Empty;
    public DateTime CreatedDate { get; set; }
    public bool IsOpen { get; set; }
    public List<TicketFile> FileUrls { get; set; } = new();
}
