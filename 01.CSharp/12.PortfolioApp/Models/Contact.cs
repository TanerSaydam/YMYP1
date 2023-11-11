using System;
using System.Collections.Generic;

namespace _12.PortfolioApp.Models;

public partial class Contact
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Subject { get; set; } = null!;

    public string Content { get; set; } = null!;

    public DateTime Date { get; set; }

    public bool IsCompleted { get; set; }
}
