using eHospitalServer.Entities.Enums;
using System.ComponentModel.DataAnnotations.Schema;

namespace eHospitalServer.Entities.Models;

public sealed class DoctorDetail
{
    public DoctorDetail()
    {
        Id = Guid.NewGuid();
    }
    public Guid Id { get; set; }
    public Specialty Specialty { get; set; } = Specialty.Acil;
    public List<string> WorkingDays { get; set; } = new();
    public decimal AppointmentPrice { get; set; }
    public string SpecialtyName => Specialty.ToString();
}
