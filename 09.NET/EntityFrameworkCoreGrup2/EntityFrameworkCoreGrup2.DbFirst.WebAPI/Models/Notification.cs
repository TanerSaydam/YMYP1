using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirst.WebAPI.Models;

public partial class Notification
{
    public Guid Id { get; set; }

    public Guid UserId { get; set; }

    public string Title { get; set; } = null!;

    public string Message { get; set; } = null!;

    public DateTime DateCreated { get; set; }

    public string Action { get; set; } = null!;

    public string Link { get; set; } = null!;

    public bool IsActive { get; set; }

    public bool IsDeleted { get; set; }
}
