using AutoMapper;
using BookStoreServer.WebApi.Context;
using BookStoreServer.WebApi.Dtos;
using BookStoreServer.WebApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookStoreServer.WebApi.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class HomeController : Controller
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;

    public HomeController(AppDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpGet]
    public IActionResult Bestsellers()
    {
        var bestsellers = _context.Orders
            .Where(o => o.PaymentDate != null)
            .GroupBy(o => o.BookId)
            .Select(s => new
            {
                BookId = s.Key,
                TotalQuantity = s.Sum(o => o.Quantity)
            })
            .OrderByDescending(s => s.TotalQuantity)
            .Take(8)
            .ToList();

        var bestsellerBooks = new List<BookDto>();
        var processedBookIds = new HashSet<int>();

        foreach (var bestseller in bestsellers)
        {
            if (!processedBookIds.Contains(bestseller.BookId))
            {
                var book = _context.Books.Find(bestseller.BookId);
                if (book != null)
                {
                    var bookDto = new BookDto 
                    {
                        Id = book.Id,
                        Title = book.Title,
                        CoverImageUrl = book.CoverImageUrl,
                    };
                    var rating = _context.Orders 
                   .Where(p => p.BookId == book.Id && p.Raiting != null)
                   .Average(p => p.Raiting);

                    bookDto.Raiting = (short)(rating == null ? 0 : Convert.ToInt16(Math.Round((decimal)rating)));
                    bestsellerBooks.Add(bookDto);
                    processedBookIds.Add(bestseller.BookId);
                }
            }
        }
        return Ok(bestsellerBooks);
    }

    [HttpGet]
    public IActionResult GetNewBooks()
    {
        var response = _context.Books.OrderByDescending(p => p.CreateAt).Take(12).ToList();

        List<BookDto> books = new();
        foreach (var item in response)
        {
            BookDto bookDto = _mapper.Map<BookDto>(item);
            bookDto.Categories = _context.BookCategories.Where(p=> p.BookId == item.Id).Include(p=> p.Category).Select(s=> s.Category.Name).ToList();
            books.Add(bookDto);
        }

        return Ok(books);
    }

    [HttpGet]
    public IActionResult GetLastComments()
    {
        var response = _context.Orders
            .Where(p => p.Comment != null && p.Raiting != null)
            .OrderByDescending(p => p.CreatedAt)
            .Take(8)
            .ToList();

        return Ok(response);
    }
 }