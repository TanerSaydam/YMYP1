using EntityFrameworkCore.RepositoryPattern.WebApi.Models;
using EntityFrameworkCore.RepositoryPattern.WebApi.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkCore.RepositoryPattern.WebApi.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public sealed class OrdersController(OrderRepository orderRepository) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        List<Order> orders = await orderRepository.GetAllAsync();

        return Ok(orders);
    }
}
