using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Newsletter.MVC.Controllers;
public class HomeController : Controller
{   
    public IActionResult Index()
    {        
        return View();
    }   
}
