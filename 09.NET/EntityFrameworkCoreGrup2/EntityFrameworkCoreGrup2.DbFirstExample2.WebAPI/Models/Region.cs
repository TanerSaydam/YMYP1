using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirstExample2.WebAPI.Models;

public partial class Region
{
    public int RegionId { get; set; }

    public string RegionDescription { get; set; } = null!;

    public virtual ICollection<Territory> Territories { get; set; } = new List<Territory>();
}
