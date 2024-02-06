using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirst.WebAPI.Models;

public partial class User
{
    public Guid Id { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string? IdentityNumber { get; set; }

    public DateOnly DateOfBirth { get; set; }

    public int UserTypeId { get; set; }

    public bool IsActive { get; set; }

    public bool IsDeleted { get; set; }

    public Guid? BranchId { get; set; }

    public string ProfileImageUrl { get; set; } = null!;

    public string? UserName { get; set; }

    public string? NormalizedUserName { get; set; }

    public string? Email { get; set; }

    public string? NormalizedEmail { get; set; }

    public bool EmailConfirmed { get; set; }

    public string? PasswordHash { get; set; }

    public string? SecurityStamp { get; set; }

    public string? ConcurrencyStamp { get; set; }

    public string? PhoneNumber { get; set; }

    public bool PhoneNumberConfirmed { get; set; }

    public bool TwoFactorEnabled { get; set; }

    public DateTimeOffset? LockoutEnd { get; set; }

    public bool LockoutEnabled { get; set; }

    public int AccessFailedCount { get; set; }

    public virtual ICollection<Appointment> AppointmentDoctors { get; set; } = new List<Appointment>();

    public virtual ICollection<Appointment> AppointmentNurses { get; set; } = new List<Appointment>();

    public virtual ICollection<Appointment> AppointmentPatients { get; set; } = new List<Appointment>();

    public virtual Branch? Branch { get; set; }

    public virtual ICollection<Examination> ExaminationDoctors { get; set; } = new List<Examination>();

    public virtual ICollection<Examination> ExaminationNurses { get; set; } = new List<Examination>();

    public virtual ICollection<ExeminationAnswer> ExeminationAnswers { get; set; } = new List<ExeminationAnswer>();

    public virtual ICollection<NotificationToken> NotificationTokens { get; set; } = new List<NotificationToken>();

    public virtual UserType UserType { get; set; } = null!;

    public virtual ICollection<Department> Departments { get; set; } = new List<Department>();

    public virtual ICollection<MainRole> MainRoles { get; set; } = new List<MainRole>();
}
