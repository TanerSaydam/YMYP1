using Ardalis.Result;
using Microsoft.AspNetCore.Mvc;
using PermitRequestApp.Application.Features.ADUsers.GetAllUsers;
using PermitRequestApp.Application.Features.CumulativeLeaveRequests.GetAllCumulativeLeaveRequest;
using PermitRequestApp.Application.Features.LeaveRequests.GetAllLeaveRequestsByManagerId;
using PermitRequestApp.MVC.DTOs;

namespace PermitRequestApp.MVC.Controllers;
public class HomeController : Controller
{ 
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

    public async Task<IActionResult> LeaveRequests(Guid? managerId)
    {        
        HttpClient client = new();
        HttpResponseMessage message = await client.GetAsync("https://localhost:7088/api/ADUsers/GetAll");

        if (message.IsSuccessStatusCode)
        {
            Result<List<GetAllUserQueryResponse>>? response = await message.Content.ReadFromJsonAsync<Result<List<GetAllUserQueryResponse>>>();

            if (response is not null)
            {

                if(managerId is not null)
                {
                    HttpResponseMessage leaveRequestMessage = await client.PostAsJsonAsync("https://localhost:7088/api/LeaveRequests/GetAllByManagerId", new {managerId = managerId});

                    if(leaveRequestMessage.IsSuccessStatusCode)
                    {
                       var leaveRequestResponse = 
                            await leaveRequestMessage
                            .Content
                            .ReadFromJsonAsync<Result<List<GetAllLeaveRequestsByManagerIdQueryResponse>>>();

                        if(leaveRequestResponse is not null)
                        {
                            var newData = new LeaveRequestListDto(managerId, response.Value, leaveRequestResponse.Value);
                            return View(newData);
                        }
                    }
                }

                var data = new LeaveRequestListDto(managerId, response.Value, new());
                return View(data);
            }
        }

        return View(new LeaveRequestListDto(managerId, new(), new()));
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

    [HttpGet]
    public async Task<IActionResult> Answer(Guid id, bool isAccepted, Guid managerId)
    {  
        HttpClient client = new();
        var data = new
        {
            id = id,
            isAccepted = isAccepted
        };

        HttpResponseMessage message = await client.PostAsJsonAsync("https://localhost:7088/api/LeaveRequests/Answer", data);

        if (message.IsSuccessStatusCode)
        {
            Result<string>? response = await message.Content.ReadFromJsonAsync<Result<string>>();

            if (response is not null)
            {
                TempData["Message"] = response.Value;
            }
        }

        return RedirectToAction("LeaveRequests", new { managerId = managerId });
    }

    public async Task<IActionResult> CumulativeLeaveRequests()
    {
        HttpClient client = new();
        HttpResponseMessage message = await client.PostAsJsonAsync("https://localhost:7088/api/CumulativeLeaveRequests/GetAll", new {});

        if (message.IsSuccessStatusCode)
        {
            Result<List<GetAllCumulativeLeaveRequestQueryResponse>>? response = await message.Content.ReadFromJsonAsync<Result<List<GetAllCumulativeLeaveRequestQueryResponse>>>();

            if (response is not null)
            {               
                return View(response.Value);
            }
        }

        return View(new List<GetAllCumulativeLeaveRequestQueryResponse>());
    }
}
