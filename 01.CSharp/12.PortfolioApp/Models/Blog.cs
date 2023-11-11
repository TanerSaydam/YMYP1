using System;
using System.Collections.Generic;

namespace _12.PortfolioApp.Models;

public partial class Blog
{
    public int Id { get; set; }

    public string Title { get; set; } = null!;

    public string CoverImageUrl { get; set; } = null!;

    public string Content { get; set; } = null!;

    public DateTime Date { get; set; }

    public virtual ICollection<Hastag> Hastags { get; set; } = new List<Hastag>();
}
