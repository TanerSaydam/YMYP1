using BookStoreServer.WebApi.Context;
using BookStoreServer.WebApi.ValueObjects;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookStoreServer.WebApi.Models;

public sealed class Order
{
    public int Id { get; set; }
    public string OrderNumber { get; set; } //16 hane ve unique olacak TNR2023000000001

    [ForeignKey("Book")]
    public int BookId { get; set; }

    public Book Book { get; set; }
    public int Quantity { get; set; }

    public int? UserId { get; set; }

    public Money Price { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime PaymentDate { get; set; }
    public string PaymentType { get; set; }
    public string PaymentNumber { get; set; }

    public string Comment { get; set; }
    public short? Raiting { get; set; }

    public static string GetNewOrderNumber()
    {
        string initialLetter = "TNR";
        string year = DateTime.Now.Year.ToString();
        string newOrderNumber = initialLetter + year;

        AppDbContext context = new();
        var lastOrder = context.Orders.OrderByDescending(o => o.Id).FirstOrDefault();
        string currentOrderNumber = lastOrder?.OrderNumber;

        if (currentOrderNumber != null)
        {
            string currentYear = currentOrderNumber.Substring(3, 4);
            int startIndex = (currentYear == year) ? 7 : 0;
            GenerateUniqueOrderNumber(context, ref newOrderNumber, currentOrderNumber.Substring(startIndex));
        }
        else
        {
            newOrderNumber += "000000001";
        }

        return newOrderNumber;
    }

    private static void GenerateUniqueOrderNumber(AppDbContext context, ref string newOrderNumber, string currentOrderNumStr)
    {
        int currentOrderNumberInt = int.TryParse(currentOrderNumStr, out var num) ? num : 0;
        bool isOrderNumberUnique = false;

        while (!isOrderNumberUnique)
        {
            currentOrderNumberInt++;
            newOrderNumber += currentOrderNumberInt.ToString("D9");
            string checkOrderNumber = newOrderNumber;
            var order = context.Orders.FirstOrDefault(o => o.OrderNumber == checkOrderNumber);
            if (order == null)
            {
                isOrderNumberUnique = true;
            }
        }
    }
}