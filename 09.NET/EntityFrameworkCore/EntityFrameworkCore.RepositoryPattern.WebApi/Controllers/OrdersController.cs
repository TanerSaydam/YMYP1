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
    public IActionResult GetAll()
    {
        List<Order> orders = orderRepository.GetAll();

        return Ok(orders);
    }
}
