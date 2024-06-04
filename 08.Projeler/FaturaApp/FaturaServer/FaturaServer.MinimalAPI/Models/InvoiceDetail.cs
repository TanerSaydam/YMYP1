namespace FaturaServer.MinimalAPI.Models;

public sealed class InvoiceDetail
{
    public InvoiceDetail()
    {
        Id = Guid.NewGuid();
    }
    public Guid Id { get; set; }
    public Guid InvoiceId { get; set; }
    public Guid ProductId { get; set; }
    public int Quantity { get; set; }
}