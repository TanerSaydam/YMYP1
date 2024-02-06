using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirst.WebAPI.Models;

public partial class VehicleMovement
{
    public Guid VehicleId { get; set; }

    public Guid ExaminationId { get; set; }

    public int StartingMileage { get; set; }

    public DateTime StartDate { get; set; }

    public decimal PricePerKm { get; set; }

    public int EstimatedDuration { get; set; }

    public string Note { get; set; } = null!;

    public virtual Examination Examination { get; set; } = null!;

    public virtual Vehicle Vehicle { get; set; } = null!;
}
