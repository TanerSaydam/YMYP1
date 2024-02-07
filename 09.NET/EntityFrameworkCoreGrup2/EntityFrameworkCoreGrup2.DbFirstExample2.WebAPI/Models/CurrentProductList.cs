using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirstExample2.WebAPI.Models;

public partial class CurrentProductList
{
    public int ProductId { get; set; }

    public string ProductName { get; set; } = null!;
}
