using EntityFrameworkCore.RepositoryPattern.WebApi.Context;
using EntityFrameworkCore.RepositoryPattern.WebApi.Models;
using EntityFrameworkCore.RepositoryPattern.WebApi.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace EntityFrameworkCore.RepositoryPattern.WebApi.Controllers;

[Route("api/[controller]/[Action]")]
[ApiController]
public sealed class UsersController(UserRepository userRepository) : ControllerBase
{
    [HttpGet]
    public IActionResult Add(string name)
    {
        User user = new()
        {
            Name = name,
        };

        userRepository.Add(user);

        return Ok(user.Id);
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        List<User> users = await userRepository.GetAllAsync();

        return Ok(users);
    }
}

