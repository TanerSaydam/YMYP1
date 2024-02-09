using FluentValidation.Results;
using NTierArchitecture.Business.Validator;
using NTierArchitecture.DataAccess.Repositories;
using NTierArchitecture.Entities.DTOs;
using NTierArchitecture.Entities.Models;

namespace NTierArchitecture.Business;

public sealed class StudentManager(
    IStudentRepository studentRepository) : IStudentService
{
    public string Create(CreateStudentDto request)
    {
        CreateStudentDtoValidator validator = new();
        ValidationResult result = validator.Validate(request);
        if (!result.IsValid)
        {
            throw new Exception(string.Join(",", result.Errors));
        }

        bool isIdentityNumberExists = studentRepository.IsIdentityNumberExists(request.IdentityNumber);

        if(isIdentityNumberExists)
        {
            throw new Exception("TC numarası daha önce kaydedilmiş!");
        }

        Student student = new()
        {
            IdentityNumber = request.IdentityNumber,
            ClassRoomId = request.ClassRoomId,
            CreatedBy = "Admin",
            CreatedDate = DateTime.Now,
            FirstName = request.FirstName,
            LastName = request.LastName,
            StudentNumber = request.StudentNumber
        };

        studentRepository.Create(student);

        return "Kayıt işlemi başarıyla tamamlandı";
    }

    public string DeleteById(Guid id)
    {
        throw new NotImplementedException();
    }

    public List<Student> GetAll()
    {
        throw new NotImplementedException();
    }

    public string Update(UpdateStudentDto request)
    {
        throw new NotImplementedException();
    }
}