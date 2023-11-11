using System;
using System.Collections.Generic;

namespace _12.PortfolioApp.Models;

public partial class Experience
{
    public int Id { get; set; }

    public string CompanyName { get; set; } = null!;

    public string City { get; set; } = null!;

    public DateTime StartingDate { get; set; }

    public DateTime? LeavingDate { get; set; }

    public string Profession { get; set; } = null!;

    public string? Description { get; set; }
}
