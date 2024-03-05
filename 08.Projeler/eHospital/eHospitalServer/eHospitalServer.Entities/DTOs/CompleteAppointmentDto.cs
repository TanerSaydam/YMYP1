namespace eHospitalServer.Entities.DTOs;
public sealed record CompleteAppointmentDto(
    Guid AppointmentId,
    string EpicrisisReport);
