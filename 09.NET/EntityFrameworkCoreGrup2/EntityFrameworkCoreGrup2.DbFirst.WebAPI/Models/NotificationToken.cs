using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirst.WebAPI.Models;

public partial class NotificationToken
{
    public Guid Id { get; set; }

    public Guid UserId { get; set; }

    public string DeviceId { get; set; } = null!;

    public string Token { get; set; } = null!;

    public DateTime CreatedDate { get; set; }

    public bool IsActive { get; set; }

    public bool IsDeleted { get; set; }

    public virtual User User { get; set; } = null!;
}
