using System;
using System.Collections.Generic;
using _12.PortfolioApp.Models;
using Microsoft.EntityFrameworkCore;

namespace _12.PortfolioApp.Context;

public partial class AppDbContext : DbContext
{    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Data Source=DESKTOP-3BJ5GK9\\SQLEXPRESS;Initial Catalog=PortfolioDb;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False");
    public virtual DbSet<Ability> Abilities { get; set; }

    public virtual DbSet<Blog> Blogs { get; set; }

    public virtual DbSet<Contact> Contacts { get; set; }

    public virtual DbSet<Experience> Experiences { get; set; }

    public virtual DbSet<Hastag> Hastags { get; set; }

    public virtual DbSet<SocialMedia> SocialMedias { get; set; }

    public virtual DbSet<User> Users { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Ability>(entity =>
        {
            entity.Property(e => e.ImageUrl).IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Blog>(entity =>
        {
            entity.Property(e => e.Content).IsUnicode(false);
            entity.Property(e => e.CoverImageUrl).IsUnicode(false);
            entity.Property(e => e.Date).HasColumnType("datetime");
            entity.Property(e => e.Title)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Contact>(entity =>
        {
            entity.Property(e => e.Content).IsUnicode(false);
            entity.Property(e => e.Date).HasColumnType("datetime");
            entity.Property(e => e.Email)
                .HasMaxLength(150)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(150)
                .IsUnicode(false);
            entity.Property(e => e.Subject)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Experience>(entity =>
        {
            entity.Property(e => e.City).IsUnicode(false);
            entity.Property(e => e.CompanyName)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.Description).IsUnicode(false);
            entity.Property(e => e.LeavingDate).HasColumnType("date");
            entity.Property(e => e.Profession)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.StartingDate).HasColumnType("date");
        });

        modelBuilder.Entity<Hastag>(entity =>
        {
            entity.Property(e => e.Tag)
                .HasMaxLength(150)
                .IsUnicode(false);

            entity.HasOne(d => d.Blog).WithMany(p => p.Hastags)
                .HasForeignKey(d => d.BlogId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Hastags_Blogs");
        });

        modelBuilder.Entity<SocialMedia>(entity =>
        {
            entity.Property(e => e.Icon)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Link).IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.Property(e => e.AboutMe).IsUnicode(false);
            entity.Property(e => e.Email)
                .HasMaxLength(150)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(150)
                .IsUnicode(false);
            entity.Property(e => e.Password)
                .HasMaxLength(6)
                .IsUnicode(false);
            entity.Property(e => e.PhoneNumber)
                .HasMaxLength(16)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
