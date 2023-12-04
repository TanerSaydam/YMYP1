using FluentValidation.Results;
using ITDeskServer.DTOs;
using ITDeskServer.Models;
using ITDeskServer.Services;
using ITDeskServer.Validator;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace ITDeskServer.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class AuthController(
    UserManager<AppUser> userManager, 
    SignInManager<AppUser> signInManager,
    JwtService jwtService) : ControllerBase
{    
    [HttpPost]
    public async Task<IActionResult> Login(LoginDto request, CancellationToken cancellationToken)
    {
        LoginValidator validator = new();
        ValidationResult validationResult = validator.Validate(request);

        if (!validationResult.IsValid)
        {            
            return StatusCode(422,validationResult.Errors.Select(s=> s.ErrorMessage));
        }

        AppUser? appUser = await userManager.FindByNameAsync(request.UserNameOrEmail);
        if (appUser is null)
        {
            appUser = await userManager.FindByEmailAsync(request.UserNameOrEmail);
            if(appUser is null)
            {
                return BadRequest(new { Message = "Kullanıcı bulunamadı!" });
            }
        }       

        var result = await signInManager.CheckPasswordSignInAsync(appUser, request.Password, true);

        if (result.IsLockedOut)
        {
            TimeSpan? timeSpan = appUser.LockoutEnd - DateTime.UtcNow;
            if (timeSpan is not null)
                return BadRequest(new
                {
                    Message = $"Kullanıcınız 3 kere yanlış şifre girşinden dolayı {Math.Ceiling(timeSpan.Value.TotalMinutes)} dakika kitlenmiştir"
                });
            else
                return BadRequest(new { Message = $"Kullanıcınız 3 kere yanlış şifre girşinden dolayı 15 dakika kitlenmiştir" });
        }

        if (result.IsNotAllowed)
        {
            return BadRequest(new { Message = "Mail adresiniz onaylı değil!" });
        }

        if (!result.Succeeded)
        {
            return BadRequest(new { Message = "Şifreniz yanlış" });
        }

        string token = jwtService.CreateToken(appUser, request.RememberMe);
        return Ok(new {AccessToken = token});
    }
}