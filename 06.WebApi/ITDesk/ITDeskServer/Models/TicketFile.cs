namespace ITDeskServer.Models;

public sealed class TicketFile
{
    public Guid Id { get; set; }
    public Guid TicketId { get; set; }    
    public string FileUrl { get; set; } = string.Empty;
}
