using DependencyInjectionGrup2.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DependencyInjectionGrup2.Abstractions;

[Route("api/[controller]")]
[ApiController]
public abstract class ApiController : ControllerBase
{
    public readonly IProductService _productService;
    public ApiController(IProductService productService)
    {
        _productService = productService;
    }
}
