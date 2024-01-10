using EntityFrameworkCore.Relational.WebApi.Context;
using EntityFrameworkCore.Relational.WebApi.DTOs;
using EntityFrameworkCore.Relational.WebApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.ObjectModel;

namespace EntityFrameworkCore.Relational.WebApi.Controllers;
[Route("api/[controller]")]
[ApiController]
public sealed class ValuesController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ValuesController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost("Add")]
    public IActionResult Add(CreateProductDto request)
    {
        Product? product = _context.Products.FirstOrDefault(p => p.Name == request.ProductName);

        if(product is not null)
        {
            return BadRequest(new { Message = "Bu ürün adı daha önce kullanılmış!" });
        }

        product = new()
        {
            Id = Guid.NewGuid(),
            Name = request.ProductName,            
        };

        AdditionalProduct additionalProduct = new()
        {
           
            Description = request.ProductDescription,
            Price = request.ProductPrice
        };

        product.AdditionalProduct = additionalProduct;


        Category? category = _context.Categories.FirstOrDefault(p => p.Name == request.CategoryName);

        if (category is null)
        {
            category = new()
            {
                Id = Guid.NewGuid(),
                Name = request.CategoryName,
            };

            product.Category = category;
        }
        else
        {
            product.CategoryId = category.Id;
        }

        _context.Add(product);
        _context.SaveChanges();

        return Ok(new {Id =  product.Id});
    }

    [HttpGet("GetAll")]
    public IActionResult GetAll()
    {
        List<Product> products =
            _context.Products
            .Include(p => p.Category)
            .ToList();       

        //List<Product> products = (from p in _context.Products
        //                          join ad in _context.AdditionalProducts on p.Id equals ad.ProductId
        //                          join c in _context.Categories on p.CategoryId equals c.Id
        //                          select new Product()
        //                          {
        //                              Id = p.Id,
        //                              AdditionalProduct = ad,
        //                              CategoryId = p.CategoryId,
        //                              Category = c,
        //                              Name = p.Name
        //                          }).ToList();

        return Ok(products);
    }
}
