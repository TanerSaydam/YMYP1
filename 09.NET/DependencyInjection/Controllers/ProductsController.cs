using DependencyInjection.Repostories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DependencyInjection.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly IProductRepository _repository;
    public ProductsController(IProductRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public IActionResult Add()
    {
        _repository.Add();

        return NoContent();
    }

    [HttpGet]
    public IActionResult Update()
    {
        _repository.Update();

        return NoContent();
    }

    [HttpGet]
    public IActionResult Delete()
    {
        _repository.Delete();

        return NoContent();
    }
}
