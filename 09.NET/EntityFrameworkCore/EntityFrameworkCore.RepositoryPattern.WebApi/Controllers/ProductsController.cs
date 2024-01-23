using EntityFrameworkCore.RepositoryPattern.WebApi.Context;
using EntityFrameworkCore.RepositoryPattern.WebApi.Models;
using EntityFrameworkCore.RepositoryPattern.WebApi.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EntityFrameworkCore.RepositoryPattern.WebApi.Controllers;
[Route("api/[controller]/[Action]")]
[ApiController]
public sealed class ProductsController(IProductRepository productRepository) : ControllerBase
{
    [HttpGet]
    public IActionResult Add(string name)
    {   

        Product product = new()
        {
            Name = name,
        };

        productRepository.Add(product);        

        return Ok(product.Id);
    }
    

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        return Ok(await productRepository.GetAllAsync());
    }
}

