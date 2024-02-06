using System;
using System.Collections.Generic;

namespace EntityFrameworkCoreGrup2.DbFirst.WebAPI.Models;

public partial class Appointment
{
    public Guid Id { get; set; }

    public Guid PatientId { get; set; }

    public Guid? DoctorId { get; set; }

    public Guid? NurseId { get; set; }

    public Guid? DepartmentId { get; set; }

    public DateTime StartDate { get; set; }

    public DateTime EndDate { get; set; }

    public string Note { get; set; } = null!;

    public int AppointmentStatus { get; set; }

    public int AppointmentType { get; set; }

    public decimal Price { get; set; }

    public bool IsActive { get; set; }

    public bool IsDeleted { get; set; }

    public virtual ICollection<AppointmentTreatmentPackage> AppointmentTreatmentPackages { get; set; } = new List<AppointmentTreatmentPackage>();

    public virtual Department? Department { get; set; }

    public virtual User? Doctor { get; set; }

    public virtual ICollection<Examination> Examinations { get; set; } = new List<Examination>();

    public virtual User? Nurse { get; set; }

    public virtual User Patient { get; set; } = null!;
}
