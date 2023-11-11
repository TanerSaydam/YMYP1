using System;
using System.Collections.Generic;

namespace _12.PortfolioApp.Models;

public partial class Ability
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public bool IsActive { get; set; }

    public int Percent { get; set; }

    public string ImageUrl { get; set; } = null!;
}
