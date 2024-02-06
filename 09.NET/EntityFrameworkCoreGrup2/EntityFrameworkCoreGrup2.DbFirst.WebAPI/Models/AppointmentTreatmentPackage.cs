using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirst.WebAPI.Models;

public partial class AppointmentTreatmentPackage
{
    public Guid AppointmentId { get; set; }

    public Guid TreatmentPackageId { get; set; }

    public int Quantity { get; set; }

    public virtual Appointment Appointment { get; set; } = null!;

    public virtual TreatmentPackage TreatmentPackage { get; set; } = null!;
}
