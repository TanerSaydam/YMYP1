using DependencyInjectionGrup2.Abstractions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DependencyInjectionGrup2.Controllers;

public class ProductsController : ApiController
{
    public ProductsController(IProductService productService) : base(productService)
    {
    }

    [HttpGet]
    public IActionResult Get2()
    {
        //IProductService _productService =  new EfProductService(); 
        _productService.Save();


        return NoContent();
    }
}
