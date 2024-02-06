using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirst.WebAPI.Models;

public partial class Examination
{
    public Guid Id { get; set; }

    public Guid AppointmentId { get; set; }

    public Guid DepartmentId { get; set; }

    public Guid? DoctorId { get; set; }

    public Guid? NurseId { get; set; }

    public DateTime StartDate { get; set; }

    public DateTime EndDate { get; set; }

    public int ExaminationStatus { get; set; }

    public decimal Price { get; set; }

    public string Note { get; set; } = null!;

    public string Destination { get; set; } = null!;

    public string MedicineNote { get; set; } = null!;

    public int? PaymentType { get; set; }

    public bool IsPay { get; set; }

    public bool IsActive { get; set; }

    public bool IsDeleted { get; set; }

    public virtual Appointment Appointment { get; set; } = null!;

    public virtual Department Department { get; set; } = null!;

    public virtual User? Doctor { get; set; }

    public virtual ICollection<ExeminationAdditionalFee> ExeminationAdditionalFees { get; set; } = new List<ExeminationAdditionalFee>();

    public virtual ICollection<ExeminationAnswer> ExeminationAnswers { get; set; } = new List<ExeminationAnswer>();

    public virtual ICollection<ExeminationInventory> ExeminationInventories { get; set; } = new List<ExeminationInventory>();

    public virtual ICollection<ExeminationTreatmentPackage> ExeminationTreatmentPackages { get; set; } = new List<ExeminationTreatmentPackage>();

    public virtual User? Nurse { get; set; }

    public virtual VehicleMovement? VehicleMovement { get; set; }
}
