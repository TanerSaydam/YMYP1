using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirstExample2.WebAPI.Models;

public partial class CustomerDemographic
{
    public string CustomerTypeId { get; set; } = null!;

    public string? CustomerDesc { get; set; }

    public virtual ICollection<Customer> Customers { get; set; } = new List<Customer>();
}
