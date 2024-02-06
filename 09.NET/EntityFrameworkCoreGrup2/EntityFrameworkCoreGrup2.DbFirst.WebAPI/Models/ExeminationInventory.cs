using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirst.WebAPI.Models;

public partial class ExeminationInventory
{
    public Guid ExaminationId { get; set; }

    public Guid InventoryId { get; set; }

    public int Quantity { get; set; }

    public decimal Price { get; set; }

    public virtual Examination Examination { get; set; } = null!;

    public virtual Inventory Inventory { get; set; } = null!;
}
