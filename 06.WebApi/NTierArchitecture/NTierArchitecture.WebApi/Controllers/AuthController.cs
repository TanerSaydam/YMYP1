using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using NTierArchitecture.WebApi.DTOs;
using NTierArchitecture.WebApi.Exceptions;
using NTierArchitecture.WebApi.Models;
using NTierArchitecture.WebApi.Services;

namespace NTierArchitecture.WebApi.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public sealed class AuthController : ControllerBase
{
    private readonly IValidator<RegisterDto> _registerDtoValidator;

    public AuthController(IValidator<RegisterDto> registerDtoValidator)
    {
        _registerDtoValidator = registerDtoValidator;
    }

    [HttpPost]
    public IActionResult Register(RegisterDto request)
    {
        #region İş Kuralları
        var result = _registerDtoValidator.Validate(request);
        if (!result.IsValid)
        {
            throw new ValidationException(result.Errors[0].ErrorMessage);
        }
        #endregion

        #region Password Hashleme
            byte[] PasswordHash;
            byte[] PasswordSalt;

            PasswordService.CreatePassword(request.Password, out PasswordHash, out PasswordSalt);
        #endregion


        #region User Nesnesi Oluşturma
            User user = new()
            {
                Email = request.Email,
                LastName = request.LastName,
                PasswordHash = PasswordHash,
                Name = request.Name,
                PasswordSalt = PasswordSalt
            };
        #endregion

        return Ok(new {Message = "Kullanıcı kaydı başarıyla tamamlandı!"});

    }
}
