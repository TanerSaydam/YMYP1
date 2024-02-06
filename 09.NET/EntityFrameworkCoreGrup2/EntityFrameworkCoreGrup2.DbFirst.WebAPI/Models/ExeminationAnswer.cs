using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirst.WebAPI.Models;

public partial class ExeminationAnswer
{
    public Guid ExaminationId { get; set; }

    public Guid UserId { get; set; }

    public string Reason { get; set; } = null!;

    public int AnswerStatus { get; set; }

    public virtual Examination Examination { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
