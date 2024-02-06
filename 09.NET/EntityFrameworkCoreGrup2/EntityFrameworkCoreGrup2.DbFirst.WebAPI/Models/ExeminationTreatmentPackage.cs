using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirst.WebAPI.Models;

public partial class ExeminationTreatmentPackage
{
    public Guid ExaminationId { get; set; }

    public Guid TreatmentPackageId { get; set; }

    public decimal Price { get; set; }

    public int Quantity { get; set; }

    public virtual Examination Examination { get; set; } = null!;

    public virtual TreatmentPackage TreatmentPackage { get; set; } = null!;
}
