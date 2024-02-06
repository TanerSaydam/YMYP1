using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirst.WebAPI.Models;

public partial class Vehicle
{
    public Guid Id { get; set; }

    public Guid BranchId { get; set; }

    public string Model { get; set; } = null!;

    public string PlateNumber { get; set; } = null!;

    public string Color { get; set; } = null!;

    public decimal PricePerKm { get; set; }

    public bool IsRented { get; set; }

    public string Note { get; set; } = null!;

    public bool IsActive { get; set; }

    public bool IsDeleted { get; set; }

    public virtual Branch Branch { get; set; } = null!;

    public virtual ICollection<VehicleMovement> VehicleMovements { get; set; } = new List<VehicleMovement>();
}
