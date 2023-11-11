using AutoMapper;
using BookStoreServer.WebApi.Context;
using BookStoreServer.WebApi.Dtos;
using BookStoreServer.WebApi.Services;
using Microsoft.AspNetCore.Mvc;
using UserModel = BookStoreServer.WebApi.Models.User;
namespace BookStoreServer.WebApi.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public sealed class AuthController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;
    public AuthController(AppDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost]
    public IActionResult Register(RegisterDto request)
    {
        //UserModel user = new()
        //{
        //    Email = request.Email,
        //    Lastname = request.Lastname,
        //    Name = request.Name,
        //    Password = request.Password,
        //    Username = request.Username,
        //};

        UserModel user = _mapper.Map<UserModel>(request);

        _context.Add(user);
        _context.SaveChanges();

        return Ok(new {Message = "Kayıt işlemi başarıyla tamamlandı"});
    }

    [HttpPost]
    public IActionResult Login(LoginDto request)
    {
        UserModel user = _context.Users.Where(p=> p.Username == request.UsernameOrEmail || p.Email == request.UsernameOrEmail).FirstOrDefault();

        if(user is null)
        {
            return BadRequest(new { Message = "Kullanıcı bulunmadı!" });
        }

        if(user.Password != request.Password)
        {
            return BadRequest(new { Message = "Şifre yanlış!" });
        }

        string token = JwtService.CreatToken(user);

        return Ok(new LoginResponseDto(Token: token, UserId: user.Id, UserName: user.GetName()));
    }
}
