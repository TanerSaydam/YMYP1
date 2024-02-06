using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirst.WebAPI.Models;

public partial class MainRoleDetail
{
    public Guid MainRoleId { get; set; }

    public Guid RoleId { get; set; }

    public virtual Role Role { get; set; } = null!;
}
