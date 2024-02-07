using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirstExample2.WebAPI.Models;

public partial class ProductsAboveAveragePrice
{
    public string ProductName { get; set; } = null!;

    public decimal? UnitPrice { get; set; }
}
