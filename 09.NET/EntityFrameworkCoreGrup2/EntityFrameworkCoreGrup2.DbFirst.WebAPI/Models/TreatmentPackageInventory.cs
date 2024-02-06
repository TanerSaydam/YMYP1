using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirst.WebAPI.Models;

public partial class TreatmentPackageInventory
{
    public Guid TreatmentPackageId { get; set; }

    public Guid InventoryId { get; set; }

    public decimal UnitValue { get; set; }

    public decimal Price { get; set; }

    public virtual Inventory Inventory { get; set; } = null!;

    public virtual TreatmentPackage TreatmentPackage { get; set; } = null!;
}
