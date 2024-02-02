using DependencyInjectionGrup2.Abstractions;
using Microsoft.AspNetCore.Mvc;

namespace DependencyInjectionGrup2.Controllers;

public class ValuesController : ApiController
{
    public ValuesController(IProductService productService) : base(productService)
    {
    }
    [HttpGet]
    public IActionResult Get()
    {
        //IProductService _productService =  new EfProductService(); 
        _productService.Save();


        return NoContent();
    }
}

public interface IProductService
{   
    void Save();
}

public class EfProductService : IProductService
{
    public EfProductService()
    {
        
    }
    public void Save()
    {
        //kayıt işlemleri
    }
}

public class ElasticSearchProductService : IProductService
{
    public ElasticSearchProductService()
    {
        
    }
    public void Save()
    {
        //kayıt işlemleri
    }
}