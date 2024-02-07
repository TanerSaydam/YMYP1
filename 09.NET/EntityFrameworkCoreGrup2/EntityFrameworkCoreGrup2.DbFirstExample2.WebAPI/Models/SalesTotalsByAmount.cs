using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirstExample2.WebAPI.Models;

public partial class SalesTotalsByAmount
{
    public decimal? SaleAmount { get; set; }

    public int OrderId { get; set; }

    public string CompanyName { get; set; } = null!;

    public DateTime? ShippedDate { get; set; }
}
