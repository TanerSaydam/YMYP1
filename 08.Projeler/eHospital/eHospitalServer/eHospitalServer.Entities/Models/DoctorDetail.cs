namespace eHospitalServer.Entities.Models;

public sealed class DoctorDetail
{
    public Guid UserId { get; set; }
    public string Specialty { get; set; } = string.Empty;
    public List<string> WorkingDays { get; set; } = new();
}
