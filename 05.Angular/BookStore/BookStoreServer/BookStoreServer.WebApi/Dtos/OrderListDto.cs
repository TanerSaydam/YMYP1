using BookStoreServer.WebApi.Models;
using BookStoreServer.WebApi.ValueObjects;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookStoreServer.WebApi.Dtos;

public sealed record OrderListDto
{
    public int Id { get; set; }
    public string OrderNumber { get; set; }
    public Book Book { get; set; }
    public int Quantity { get; set; }
    public Money Price { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime PaymentDate { get; set; }
    public string PaymentType { get; set; }
    public string PaymentNumber { get; set; }
    public List<OrderStatus> OrderStatuses { get; set; }
    public string Comment { get; set; }
    public short? Raiting { get; set; }
};