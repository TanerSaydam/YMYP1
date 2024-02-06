using System;
using System.Collections.Generic;
using EntityFrameworkCoreGrup2.DbFirst.WebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkCoreGrup2.DbFirst.WebAPI.Context;

public partial class EmoHomeDbContext : DbContext
{
    public EmoHomeDbContext()
    {
    }

    public EmoHomeDbContext(DbContextOptions<EmoHomeDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Appointment> Appointments { get; set; }

    public virtual DbSet<AppointmentTreatmentPackage> AppointmentTreatmentPackages { get; set; }

    public virtual DbSet<Branch> Branches { get; set; }

    public virtual DbSet<Department> Departments { get; set; }

    public virtual DbSet<Examination> Examinations { get; set; }

    public virtual DbSet<ExeminationAdditionalFee> ExeminationAdditionalFees { get; set; }

    public virtual DbSet<ExeminationAnswer> ExeminationAnswers { get; set; }

    public virtual DbSet<ExeminationInventory> ExeminationInventories { get; set; }

    public virtual DbSet<ExeminationTreatmentPackage> ExeminationTreatmentPackages { get; set; }

    public virtual DbSet<Inventory> Inventories { get; set; }

    public virtual DbSet<MainRole> MainRoles { get; set; }

    public virtual DbSet<MainRoleDetail> MainRoleDetails { get; set; }

    public virtual DbSet<Notification> Notifications { get; set; }

    public virtual DbSet<NotificationToken> NotificationTokens { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<TreatmentPackage> TreatmentPackages { get; set; }

    public virtual DbSet<TreatmentPackageInventory> TreatmentPackageInventories { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<UserType> UserTypes { get; set; }

    public virtual DbSet<Vehicle> Vehicles { get; set; }

    public virtual DbSet<VehicleMovement> VehicleMovements { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Name=ConnectionStrings:SqlServer");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Appointment>(entity =>
        {
            entity.HasIndex(e => e.DepartmentId, "IX_Appointments_DepartmentId");

            entity.HasIndex(e => e.DoctorId, "IX_Appointments_DoctorId");

            entity.HasIndex(e => e.NurseId, "IX_Appointments_NurseId");

            entity.HasIndex(e => e.PatientId, "IX_Appointments_PatientId");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Price).HasColumnType("money");

            entity.HasOne(d => d.Department).WithMany(p => p.Appointments).HasForeignKey(d => d.DepartmentId);

            entity.HasOne(d => d.Doctor).WithMany(p => p.AppointmentDoctors).HasForeignKey(d => d.DoctorId);

            entity.HasOne(d => d.Nurse).WithMany(p => p.AppointmentNurses).HasForeignKey(d => d.NurseId);

            entity.HasOne(d => d.Patient).WithMany(p => p.AppointmentPatients).HasForeignKey(d => d.PatientId);
        });

        modelBuilder.Entity<AppointmentTreatmentPackage>(entity =>
        {
            entity.HasKey(e => new { e.AppointmentId, e.TreatmentPackageId });

            entity.HasIndex(e => e.TreatmentPackageId, "IX_AppointmentTreatmentPackages_TreatmentPackageId");

            entity.HasOne(d => d.Appointment).WithMany(p => p.AppointmentTreatmentPackages).HasForeignKey(d => d.AppointmentId);

            entity.HasOne(d => d.TreatmentPackage).WithMany(p => p.AppointmentTreatmentPackages).HasForeignKey(d => d.TreatmentPackageId);
        });

        modelBuilder.Entity<Branch>(entity =>
        {
            entity.Property(e => e.Id).ValueGeneratedNever();
        });

        modelBuilder.Entity<Department>(entity =>
        {
            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasMany(d => d.Users).WithMany(p => p.Departments)
                .UsingEntity<Dictionary<string, object>>(
                    "DepartmentUser",
                    r => r.HasOne<User>().WithMany().HasForeignKey("UserId"),
                    l => l.HasOne<Department>().WithMany().HasForeignKey("DepartmentId"),
                    j =>
                    {
                        j.HasKey("DepartmentId", "UserId");
                        j.ToTable("DepartmentUser");
                        j.HasIndex(new[] { "UserId" }, "IX_DepartmentUser_UserId");
                    });
        });

        modelBuilder.Entity<Examination>(entity =>
        {
            entity.HasIndex(e => e.AppointmentId, "IX_Examinations_AppointmentId");

            entity.HasIndex(e => e.DepartmentId, "IX_Examinations_DepartmentId");

            entity.HasIndex(e => e.DoctorId, "IX_Examinations_DoctorId");

            entity.HasIndex(e => e.NurseId, "IX_Examinations_NurseId");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Price).HasColumnType("money");

            entity.HasOne(d => d.Appointment).WithMany(p => p.Examinations).HasForeignKey(d => d.AppointmentId);

            entity.HasOne(d => d.Department).WithMany(p => p.Examinations).HasForeignKey(d => d.DepartmentId);

            entity.HasOne(d => d.Doctor).WithMany(p => p.ExaminationDoctors).HasForeignKey(d => d.DoctorId);

            entity.HasOne(d => d.Nurse).WithMany(p => p.ExaminationNurses).HasForeignKey(d => d.NurseId);
        });

        modelBuilder.Entity<ExeminationAdditionalFee>(entity =>
        {
            entity.HasIndex(e => e.ExaminationId, "IX_ExeminationAdditionalFees_ExaminationId");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Price).HasColumnType("money");

            entity.HasOne(d => d.Examination).WithMany(p => p.ExeminationAdditionalFees).HasForeignKey(d => d.ExaminationId);
        });

        modelBuilder.Entity<ExeminationAnswer>(entity =>
        {
            entity.HasKey(e => new { e.UserId, e.ExaminationId });

            entity.HasIndex(e => e.ExaminationId, "IX_ExeminationAnswers_ExaminationId");

            entity.HasOne(d => d.Examination).WithMany(p => p.ExeminationAnswers)
                .HasForeignKey(d => d.ExaminationId)
                .OnDelete(DeleteBehavior.ClientSetNull);

            entity.HasOne(d => d.User).WithMany(p => p.ExeminationAnswers).HasForeignKey(d => d.UserId);
        });

        modelBuilder.Entity<ExeminationInventory>(entity =>
        {
            entity.HasKey(e => new { e.InventoryId, e.ExaminationId });

            entity.HasIndex(e => e.ExaminationId, "IX_ExeminationInventories_ExaminationId");

            entity.Property(e => e.Price).HasColumnType("money");

            entity.HasOne(d => d.Examination).WithMany(p => p.ExeminationInventories).HasForeignKey(d => d.ExaminationId);

            entity.HasOne(d => d.Inventory).WithMany(p => p.ExeminationInventories).HasForeignKey(d => d.InventoryId);
        });

        modelBuilder.Entity<ExeminationTreatmentPackage>(entity =>
        {
            entity.HasKey(e => new { e.ExaminationId, e.TreatmentPackageId });

            entity.HasIndex(e => e.TreatmentPackageId, "IX_ExeminationTreatmentPackages_TreatmentPackageId");

            entity.Property(e => e.Price).HasColumnType("money");

            entity.HasOne(d => d.Examination).WithMany(p => p.ExeminationTreatmentPackages).HasForeignKey(d => d.ExaminationId);

            entity.HasOne(d => d.TreatmentPackage).WithMany(p => p.ExeminationTreatmentPackages).HasForeignKey(d => d.TreatmentPackageId);
        });

        modelBuilder.Entity<Inventory>(entity =>
        {
            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Price).HasColumnType("money");
            entity.Property(e => e.UnitType)
                .HasMaxLength(100)
                .HasColumnName("Unit_Type");
            entity.Property(e => e.UnitValue)
                .HasColumnType("money")
                .HasColumnName("Unit_Value");
        });

        modelBuilder.Entity<MainRole>(entity =>
        {
            entity.Property(e => e.Id).ValueGeneratedNever();
        });

        modelBuilder.Entity<MainRoleDetail>(entity =>
        {
            entity.HasKey(e => new { e.RoleId, e.MainRoleId });

            entity.ToTable("MainRoleDetail");

            entity.HasOne(d => d.Role).WithMany(p => p.MainRoleDetails).HasForeignKey(d => d.RoleId);
        });

        modelBuilder.Entity<Notification>(entity =>
        {
            entity.Property(e => e.Id).ValueGeneratedNever();
        });

        modelBuilder.Entity<NotificationToken>(entity =>
        {
            entity.HasIndex(e => e.UserId, "IX_NotificationTokens_UserId");

            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasOne(d => d.User).WithMany(p => p.NotificationTokens).HasForeignKey(d => d.UserId);
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.Property(e => e.Id).ValueGeneratedNever();
        });

        modelBuilder.Entity<TreatmentPackage>(entity =>
        {
            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Price).HasColumnType("money");
        });

        modelBuilder.Entity<TreatmentPackageInventory>(entity =>
        {
            entity.HasKey(e => new { e.InventoryId, e.TreatmentPackageId });

            entity.HasIndex(e => e.TreatmentPackageId, "IX_TreatmentPackageInventories_TreatmentPackageId");

            entity.Property(e => e.Price).HasColumnType("money");
            entity.Property(e => e.UnitValue).HasColumnType("money");

            entity.HasOne(d => d.Inventory).WithMany(p => p.TreatmentPackageInventories).HasForeignKey(d => d.InventoryId);

            entity.HasOne(d => d.TreatmentPackage).WithMany(p => p.TreatmentPackageInventories).HasForeignKey(d => d.TreatmentPackageId);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasIndex(e => e.BranchId, "IX_Users_BranchId");

            entity.HasIndex(e => e.UserTypeId, "IX_Users_UserTypeId");

            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasOne(d => d.Branch).WithMany(p => p.Users).HasForeignKey(d => d.BranchId);

            entity.HasOne(d => d.UserType).WithMany(p => p.Users).HasForeignKey(d => d.UserTypeId);

            entity.HasMany(d => d.MainRoles).WithMany(p => p.Users)
                .UsingEntity<Dictionary<string, object>>(
                    "UserRole",
                    r => r.HasOne<MainRole>().WithMany().HasForeignKey("MainRoleId"),
                    l => l.HasOne<User>().WithMany().HasForeignKey("UserId"),
                    j =>
                    {
                        j.HasKey("UserId", "MainRoleId");
                        j.ToTable("UserRole");
                        j.HasIndex(new[] { "MainRoleId" }, "IX_UserRole_MainRoleId");
                    });
        });

        modelBuilder.Entity<Vehicle>(entity =>
        {
            entity.HasIndex(e => e.BranchId, "IX_Vehicles_BranchId");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.PricePerKm).HasColumnType("money");

            entity.HasOne(d => d.Branch).WithMany(p => p.Vehicles).HasForeignKey(d => d.BranchId);
        });

        modelBuilder.Entity<VehicleMovement>(entity =>
        {
            entity.HasKey(e => new { e.VehicleId, e.ExaminationId });

            entity.HasIndex(e => e.ExaminationId, "IX_VehicleMovements_ExaminationId").IsUnique();

            entity.Property(e => e.PricePerKm).HasColumnType("money");

            entity.HasOne(d => d.Examination).WithOne(p => p.VehicleMovement).HasForeignKey<VehicleMovement>(d => d.ExaminationId);

            entity.HasOne(d => d.Vehicle).WithMany(p => p.VehicleMovements).HasForeignKey(d => d.VehicleId);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
