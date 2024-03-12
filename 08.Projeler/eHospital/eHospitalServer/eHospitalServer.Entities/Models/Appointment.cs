namespace eHospitalServer.Entities.Models;
public sealed class Appointment 
{
    public Appointment()
    {
        Id = Guid.NewGuid();
    }
    public Guid Id { get; set; }
    public Guid DoctorId { get; set; }
    public User? Doctor { get; set; }

    public Guid PatientId { get; set; }
    public User? Patient { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string EpicrisisReport { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public bool IsItFinished { get; set; }
}
