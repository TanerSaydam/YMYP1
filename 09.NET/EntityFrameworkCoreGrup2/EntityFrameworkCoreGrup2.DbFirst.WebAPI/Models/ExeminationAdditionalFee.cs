using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirst.WebAPI.Models;

public partial class ExeminationAdditionalFee
{
    public Guid Id { get; set; }

    public Guid ExaminationId { get; set; }

    public string Description { get; set; } = null!;

    public int Quantity { get; set; }

    public decimal Price { get; set; }

    public bool IsDiscount { get; set; }

    public virtual Examination Examination { get; set; } = null!;
}
