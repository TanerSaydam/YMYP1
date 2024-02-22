using Ardalis.Result;
using Microsoft.AspNetCore.Mvc;
using PermitRequestApp.Application.Features.ADUsers.GetAllUsers;
using PermitRequestApp.MVC.DTOs;
using PermitRequestApp.MVC.Models;
using System.Diagnostics;

namespace PermitRequestApp.MVC.Controllers;
public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public async Task<IActionResult> Index()
    {
        HttpClient client = new();
        HttpResponseMessage message = await client.GetAsync("https://localhost:7088/api/ADUsers/GetAll");

        if (message.IsSuccessStatusCode)
        {
            Result<List<GetAllUserQueryResponse>>? response = await message.Content.ReadFromJsonAsync<Result<List<GetAllUserQueryResponse>>>();

            if(response is not null)
            {
                return View(response.Value);
            }
        }

        return View(new List<GetAllUsersQuery>());
    }

    [HttpPost]
    public async Task<IActionResult> Save(PermitRequestDTO request)
    {

        HttpClient client = new();
        HttpResponseMessage message = await client.PostAsJsonAsync("https://localhost:7088/api/LeaveRequests/Create", request);

        if (message.IsSuccessStatusCode)
        {
            Result<string>? response = await message.Content.ReadFromJsonAsync<Result<string>>();

            if(response is not null)
            {
                TempData["Message"] = response.Value;
            }
        }

        return RedirectToAction("Index");
    }
}
