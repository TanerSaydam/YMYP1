namespace FaturaServer.MinimalAPI.Models;

public sealed class OrderDetailInvoiceDetail
{
    public Guid OrderDetailId { get; set; }
    public Guid InvoiceDetailId { get; set; }
    public int Quantity { get; set; }
}
