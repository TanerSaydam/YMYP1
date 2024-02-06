using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirst.WebAPI.Models;

public partial class UserType
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
