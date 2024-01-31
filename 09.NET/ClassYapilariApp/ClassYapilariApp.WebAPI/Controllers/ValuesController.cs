using ClassYapilariApp.WebAPI.DTOs;
using ClassYapilariApp.WebAPI.Models;
using ClassYapilariApp.WebAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace ClassYapilariApp.WebAPI.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class ValuesController : ControllerBase
{
    private readonly ProductService productService;

    public ValuesController()
    {
        productService = new();
    }

    [HttpPost]
    public IActionResult Add(AddProductDto request)
    {
        var result = productService.Add(request);

        if(result.IsSuccess == false)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var result = productService.GetAll();
        return StatusCode(result.StatusCode, result);
    }

    [HttpGet]
    public IActionResult Selling(Guid productId, int quantity)
    {                
        var result = productService.Selling(productId, quantity);

        return StatusCode(result.StatusCode, result);
    }

    [HttpGet]
    public IActionResult AddStock(Guid productId, int quantity)
    {        
        var result = productService.AddStock(productId, quantity);

        return StatusCode(result.StatusCode, result);
    }

    [HttpGet]
    public IActionResult GetProductForReport()
    {
        var result = productService.GetProductListForReport();
        return StatusCode(result.StatusCode, result);
    }
}
