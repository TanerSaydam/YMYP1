using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirst.WebAPI.Models;

public partial class TreatmentPackage
{
    public Guid Id { get; set; }

    public string Name { get; set; } = null!;

    public string Description { get; set; } = null!;

    public decimal Price { get; set; }

    public bool IsActive { get; set; }

    public bool IsDeleted { get; set; }

    public virtual ICollection<AppointmentTreatmentPackage> AppointmentTreatmentPackages { get; set; } = new List<AppointmentTreatmentPackage>();

    public virtual ICollection<ExeminationTreatmentPackage> ExeminationTreatmentPackages { get; set; } = new List<ExeminationTreatmentPackage>();

    public virtual ICollection<TreatmentPackageInventory> TreatmentPackageInventories { get; set; } = new List<TreatmentPackageInventory>();
}
