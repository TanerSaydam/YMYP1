using BookStoreServer.WebApi.Models;
using Iyzipay.Model;

namespace BookStoreServer.WebApi.Dtos;

public sealed record PaymentDto(    
    List<Book> Books,
    Buyer Buyer,
    Address ShippingAddress,
    Address BillingAddress,
    PaymentCard PaymentCard,
    int? UserId = null);