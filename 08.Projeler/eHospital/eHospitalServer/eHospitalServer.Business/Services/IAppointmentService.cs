using eHospitalServer.Entities.DTOs;
using eHospitalServer.Entities.Models;
using TS.Result;

namespace eHospitalServer.Business.Services;
public interface IAppointmentService
{
    Task<Result<string>> CreateAsync(CreateAppointmentDto request, CancellationToken cancellationToken);
    Task<Result<string>> CompleteAsync(CompleteAppointmentDto request, CancellationToken cancellationToken);
    Task<Result<List<Appointment>>> GetAllByDoctorIdAsync(Guid doctorId, CancellationToken cancellationToken);

    Task<Result<User?>> FindPatientByIdentityNumberAsync(FindPatientDto request, CancellationToken cancellationToken);

    Task<Result<List<User>>> GetAllDoctorsAsync(CancellationToken cancellationToken);
}
