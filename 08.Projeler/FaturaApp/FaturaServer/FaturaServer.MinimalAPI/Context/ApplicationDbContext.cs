using FaturaServer.MinimalAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace FaturaServer.MinimalAPI.Context;

public sealed class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {

    }
    public DbSet<Invoice> Invoices { get; set; }
    public DbSet<InvoiceDetail> InvoiceDetails { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<OrderDetail> OrderDetails { get; set; }
    public DbSet<OrderDetailInvoiceDetail> OrderDetailInvoiceDetails { get; set; }
    public DbSet<Product> Products { get; set; }
}
