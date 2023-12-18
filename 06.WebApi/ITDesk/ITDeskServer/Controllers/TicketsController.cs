using ITDeskServer.Abstractions;
using ITDeskServer.Context;
using ITDeskServer.DTOs;
using ITDeskServer.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
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

        AppUser? appUser = _context.Users.Where(p => p.Id == Guid.Parse(userId)).FirstOrDefault();

        if(appUser is null)
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
            AppUserId = Guid.Parse(userId),
            TicketId = ticket.Id,
            Content = request.Summary,
            CreatedDate = ticket.CreatedDate
        };
        
        _context.Tickets.Add(ticket);
        _context.TicketDetails.Add(ticketDetail);
        _context.SaveChanges();


        return NoContent();
    }

    [HttpGet("{ticketId}")]
    public IActionResult GetDetails(Guid ticketId)
    {
        var details = 
            _context.TicketDetails
            .Where(p=> p.TicketId == ticketId)
            .Include(p=> p.AppUser)
            .OrderBy(p=> p.CreatedDate).ToList();
        return Ok(details);
    }

    [HttpGet]
    public IActionResult GetById(Guid ticketId)
    {
        var details =
            _context.Tickets
            .Where(p => p.Id == ticketId)
            .Include(p => p.AppUser)
            .Include(p=> p.FileUrls)
            .FirstOrDefault();
        return Ok(details);
    }

    [HttpPost]
    public IActionResult AddDetailContent(TicketDetailDto request)
    {
        Ticket? ticket = 
            _context.Tickets
                .Where(p => p.Id == request.TicketId)               
                .FirstOrDefault();

        if(ticket is not null)
        {
            ticket.IsOpen = true;
        }


        TicketDetail ticketDetail = new()
        {
            AppUserId = request.AppUserId,
            Content = request.Content,
            CreatedDate = DateTime.Now,
            TicketId = request.TicketId
        };

        _context.Add(ticketDetail);
        _context.SaveChanges();

        return NoContent();
    }

    [HttpPost]    
    public IActionResult GetAll(GetAllTicketDto request)
    {
        string? userId = HttpContext.User.Claims.Where(p => p.Type == "UserId").Select(s => s.Value).FirstOrDefault();
        if (userId is null)
        {
            return BadRequest(new { Message = "Kullanıcı bulunmadı!" });
        }

        IQueryable<TicketResponseDto> tickets =
            _context.Tickets
            .Include(p=> p.AppUser)
            .Select(s => new TicketResponseDto
            {
                Id = s.Id,
                AppUserId = s.AppUserId,
                AppUser = s.AppUser,
                UserName = s.AppUser!.GetName(),
                CreatedDate = s.CreatedDate.ToString("o"),
                IsOpen = s.IsOpen,
                Subject = s.Subject
            })
            .AsQueryable();

        if (!request.Roles.Contains("Admin"))
        {
            tickets = tickets.Where(p => p.AppUserId == Guid.Parse(userId));
        }

        return Ok(tickets.ToList());
    }

    [HttpGet]
    public IActionResult CloseTicketByTicketId(Guid ticketId)
    {
        Ticket? ticket = _context.Tickets.Find(ticketId);
        if(ticket is not null)
        {
            ticket.IsOpen = false;
            _context.SaveChanges();
        }

        return NoContent();
    }
}
