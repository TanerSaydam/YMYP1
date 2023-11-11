using System;
using System.Collections.Generic;

namespace _12.PortfolioApp.Models;

public partial class User
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? PhoneNumber { get; set; }

    public string AboutMe { get; set; } = null!;
    public string ShortAboutMe { get; set; } = null!;

    public string Password { get; set; } = null!;
}
