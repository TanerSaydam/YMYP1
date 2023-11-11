using System;
using System.Collections.Generic;

namespace _12.PortfolioApp.Models;

public partial class Hastag
{
    public int Id { get; set; }

    public string Tag { get; set; } = null!;

    public int BlogId { get; set; }

    public virtual Blog Blog { get; set; } = null!;
}
