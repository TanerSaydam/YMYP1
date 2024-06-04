namespace FaturaServer.MinimalAPI.Models;

public sealed class Invoice
{
    public Invoice()
    {
        Id = Guid.NewGuid();
    }
    public Guid Id { get; set; }
    public DateOnly Date { get; set; }
    public List<InvoiceDetail>? Details { get; set; }
}
