using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirst.WebAPI.Models;

public partial class Inventory
{
    public Guid Id { get; set; }

    public string Name { get; set; } = null!;

    public string Description { get; set; } = null!;

    public string SerialNumber { get; set; } = null!;

    public decimal Price { get; set; }

    public string UnitType { get; set; } = null!;

    public decimal UnitValue { get; set; }

    public bool IsActive { get; set; }

    public bool IsDeleted { get; set; }

    public virtual ICollection<ExeminationInventory> ExeminationInventories { get; set; } = new List<ExeminationInventory>();

    public virtual ICollection<TreatmentPackageInventory> TreatmentPackageInventories { get; set; } = new List<TreatmentPackageInventory>();
}
