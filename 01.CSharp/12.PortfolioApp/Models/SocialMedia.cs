using System;
using System.Collections.Generic;

namespace _12.PortfolioApp.Models;

public partial class SocialMedia
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Icon { get; set; } = null!;

    public string Link { get; set; } = null!;
}
