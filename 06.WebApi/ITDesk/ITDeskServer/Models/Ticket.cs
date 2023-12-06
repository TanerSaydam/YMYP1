namespace ITDeskServer.Models;

public sealed class Ticket
{
    public Guid Id { get; set; }
    public Guid AppUserId { get; set; }
    public AppUser? AppUser { get; set; }
    public string Subject { get; set; } = string.Empty;
    public DateTime CreatedDate { get; set; }
    public bool IsOpen { get; set; }
    public List<TicketFile>? FileUrls { get; set; }
}
