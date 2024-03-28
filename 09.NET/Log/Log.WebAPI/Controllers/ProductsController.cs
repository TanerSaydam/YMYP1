using Log.WebAPI.Context;
using Log.WebAPI.DTOs;
using Log.WebAPI.Filters;
using Log.WebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using System.Security.Claims;
using System.Text.Json;

namespace Log.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public sealed class ProductsController(ApplicationDbContext context): ControllerBase
{
    [HttpPost]
    [LogFilter]
    public IActionResult Create(ProductDto request)
    {        
        Product product = new()
        {
            Name = request.Name,
            Price = request.Price
        };      

        context.Add(product);
        context.SaveChanges();

        return Ok();
    }

    [HttpGet]
    public IActionResult Update(int id, string name, decimal price)
    {
        Product? product = context.Products.Find(id);
        if (product is not null)
        {
            product.Name = name;
            product.Price = price;

            context.SaveChanges();
        }
        return NoContent();
    }

    [HttpGet]
    public IActionResult DeleteByıd(int id)
    {
        Product? product = context.Products.Find(id);
        if(product is not null)
        {
            context.Remove(product);
            context.SaveChanges();
        }        
        return NoContent();
    }

    [HttpGet]
    public IActionResult GetAll()
    {        
        return Ok(context.Products.ToList());
    }
}
