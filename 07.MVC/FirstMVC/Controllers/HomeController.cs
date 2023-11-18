using FirstMVC.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace FirstMVC.Controllers;
public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        List<Product> products = new();

        Product product1 = new();
        product1.Name = "Domates";
        product1.Description = "Yerli Domates";
        product1.Price = 100m;
        product1.Quantity = 1;

        products.Add(product1);

        Product product2 = new()
        {
            Name = "Biber",
            Description = "Kars Biberi",
            Price = 50m,
            Quantity = 2
        };
        products.Add(product2);

        Product product3 = new()
        {
            Name = "Salça",
            Description = "Yerli Salça",
            Price = 50m,
            Quantity = 2
        };
        products.Add(product3);

        return View(products);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
