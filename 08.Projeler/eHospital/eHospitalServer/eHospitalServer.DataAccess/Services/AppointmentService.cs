using AutoMapper;
using eHospitalServer.Business.Services;
using eHospitalServer.DataAccess.Extensions;
using eHospitalServer.Entities.DTOs;
using eHospitalServer.Entities.Enums;
using eHospitalServer.Entities.Models;
using eHospitalServer.Entities.Repositories;
using GenericRepository;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations.Operations;
using TS.Result;

namespace eHospitalServer.DataAccess.Services;
internal sealed class AppointmentService(
    UserManager<User> userManager,
    IAppointmentRepository appointmentRepository,
    IUnitOfWork unitOfWork,
    IUserService userService,
    IMapper mapper) : IAppointmentService
{
    public async Task<Result<string>> CompleteAsync(CompleteAppointmentDto request, CancellationToken cancellationToken)
    {
        Appointment? appointment = 
            await appointmentRepository
            .GetByExpressionWithTrackingAsync(p => p.Id == request.AppointmentId, cancellationToken);

        if(appointment is null)
        {
            return Result<string>.Failure("Appointment not found");
        }

        if (appointment.IsItFinished)
        {
            return Result<string>.Failure("Appointment already finish. You cannot close again");
        }

        appointment.EpicrisisReport = request.EpicrisisReport;
        appointment.IsItFinished = true;

        await unitOfWork.SaveChangesAsync(cancellationToken);

        return Result<string>.Succeed("Appointment is completed");

    }

    public async Task<Result<string>> CreateAsync(CreateAppointmentDto request, CancellationToken cancellationToken)
    {
        User? doctor = await userManager.Users.Include(p=> p.DoctorDetail).FirstOrDefaultAsync(p=> p.Id == request.DoctorId);
        if(doctor is null || doctor.UserType is not UserType.Doctor)
        {
            return Result<string>.Failure("Doctor not found");
        }

        string day = request.StartDate.ToString("dddd");

        if(!doctor.DoctorDetail!.WorkingDays.Contains(day))
        {
            return Result<string>.Failure("Doctor is not working that day");
        }

        IQueryable<Appointment> appointments =
                 appointmentRepository
                .GetWhere(p => p.DoctorId == request.DoctorId);

        DateTime startDate = DateTime.SpecifyKind(request.StartDate, DateTimeKind.Utc);
        DateTime endDate = DateTime.SpecifyKind(request.EndDate, DateTimeKind.Utc);

        bool isDoctorHaveAppointment = true;

        isDoctorHaveAppointment = await appointments
            .AnyAsync(p =>                        
                        ((p.StartDate < endDate && p.StartDate >= startDate) || // Mevcut randevunun bitişi, diğer randevunun başlangıcıyla çakışıyor
                        (p.EndDate > startDate && p.EndDate <= endDate) || // Mevcut randevunun başlangıcı, diğer randevunun bitişiyle çakışıyor
                        (p.StartDate >= startDate && p.EndDate <= endDate) || // Mevcut randevu, diğer randevu içinde tamamen
                        (p.StartDate <= startDate && p.EndDate >= endDate)), // Mevcut randevu, diğer randevuyu tamamen kapsıyor
                        cancellationToken);

        if (isDoctorHaveAppointment)
        {
            return Result<string>.Failure("Doctor is not available in that time");
        }

        Appointment appointment = mapper.Map<Appointment>(request);

        if (request.PatientId is null)
        {
            CreatePatientDto createPatientDto = new(
                request.FirstName,
                request.LastName,
                request.IdentityNumber,
                request.FullAddress,
                request.Email,
                request.PhoneNumber,
                request.DateOfBirth,
                request.BloodType);

           var createPatientResponse = await userService.CreatePatientAsync(createPatientDto, cancellationToken);

            appointment.PatientId = createPatientResponse.Data;
        }        

        await appointmentRepository.AddAsync(appointment, cancellationToken);
        await unitOfWork.SaveChangesAsync(cancellationToken);

        return Result<string>.Succeed("Create appointment is succedded");
    }

    public async Task<Result<string>> DeleteByIdAsync(Guid id, CancellationToken cancellationToken)
    {
        Appointment? appointment = await appointmentRepository.GetByExpressionAsync(p => p.Id == id, cancellationToken);
        if(appointment is null)
        {
            return Result<string>.Failure("Appointment not found");
        }

        appointmentRepository.Delete(appointment);
        await unitOfWork.SaveChangesAsync(cancellationToken);

        return Result<string>.Succeed("Appointment delete is successful");
    }

    public async Task<Result<User?>> FindPatientByIdentityNumberAsync(FindPatientDto request, CancellationToken cancellationToken)
    {
        User? user =
            await userManager
            .FindByIdentityNumber(request.IdentityNumber, cancellationToken);

        return Result<User?>.Succeed(user);
    }

    public async Task<Result<List<Appointment>>> GetAllByDoctorIdAsync(Guid doctorId, CancellationToken cancellationToken)
    {
        List<Appointment> appointments = 
            await appointmentRepository
            .GetWhere(p=> p.DoctorId == doctorId)
            .Include(p=> p.Doctor)
            .Include(p=> p.Patient)
            .OrderBy(p=> p.StartDate).ToListAsync();

        return Result<List<Appointment>>.Succeed(appointments);
    }

    public async Task<Result<List<User>>> GetAllDoctorsAsync(CancellationToken cancellationToken)
    {
        var doctors =
            await userManager
            .Users
            .Where(p => p.UserType == UserType.Doctor)
            .Include(p => p.DoctorDetail)
            .OrderBy(p => p.FirstName)
            .ToListAsync(cancellationToken);

        return Result<List<User>>.Succeed(doctors);
    }
}
