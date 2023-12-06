using ITDeskServer.Abstractions;
using ITDeskServer.Context;
using ITDeskServer.DTOs;
using ITDeskServer.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ITDeskServer.Controllers;

public class TicketsController : ApiController
{
    private readonly ApplicationDbContext _context;

    public TicketsController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public IActionResult Add([FromForm] TicketAddDto request)
    {
        string? userId = HttpContext.User.Claims.Where(p=> p.Type == "UserId").Select(s=> s.Value).FirstOrDefault();

        if(userId is null)
        {
            return BadRequest(new { Message = "Kullanıcı bulunmadı!" });
        }       
        
        Ticket ticket = new()
        {
            Id = Guid.NewGuid(),
            CreatedDate = DateTime.Now,
            AppUserId = Guid.Parse(userId),
            IsOpen = true,
            Subject = request.Subject,
        };       

        if(request.Files is not null)
        {
            ticket.FileUrls = new();

            foreach (var file in request.Files)
            {
                string fileFormat = file.FileName.Substring(file.FileName.LastIndexOf('.'));
                string fileName = Guid.NewGuid().ToString() + fileFormat;
                using (var stream = System.IO.File.Create(@"C:\YMYP1\06.WebApi\ITDesk\ITDeskClient\src\assets\files\" + fileName))
                {
                    file.CopyTo(stream);
                }

                TicketFile ticketFile = new()
                {
                    Id = Guid.NewGuid(),
                    TicketId = ticket.Id,
                    FileUrl = fileName
                };
                
                ticket.FileUrls.Add(ticketFile);
            }            
        }

        TicketDetail ticketDetail = new()
        {
            Id = Guid.NewGuid(),
            UserId = Guid.Parse(userId),
            TicketId = ticket.Id,
            Content = request.Summary,
            CreatedDate = ticket.CreatedDate
        };
        
        _context.Add(ticket);
        _context.Add(ticketDetail);
        _context.SaveChanges();


        return NoContent();
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        string? userId = HttpContext.User.Claims.Where(p => p.Type == "UserId").Select(s => s.Value).FirstOrDefault();
        if (userId is null)
        {
            return BadRequest(new { Message = "Kullanıcı bulunmadı!" });
        }

        List<TicketResponseDto> tickets = 
            _context.Tickets
            .Where(p=> p.AppUserId == Guid.Parse(userId))
            .Select(s=> new TicketResponseDto(s.Id, s.Subject, s.CreatedDate,s.IsOpen))
            .ToList();

        return Ok(tickets);
    }
}
