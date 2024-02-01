using ClassYapilariApp.WebAPI.DTOs;
using ClassYapilariApp.WebAPI.Models;
using ClassYapilariApp.WebAPI.Utilities;

namespace ClassYapilariApp.WebAPI.Services;

public class ProductService
{
    public static List<Product> products = new();

    public Result<List<Product>> GetAll()
    {
        return products;
    }

    public Result<Guid> Add(AddProductDto request)
    {
        Product product = new(
            name: request.Name,
            quantity: request.Quantity,
            price: request.Price);

        products.Add(product);

        return "Ürün ekleme işlemi başarılı";
    }

    public Result<Guid> Selling(Guid productId, int quantity)
    {
        Product? product = products.FirstOrDefault(p => p.Id == productId);
        if (product is null)
        {
            return (500, "Ürün bulunamadı!");
        }

        product.Quantity -= quantity;

        if (product.Quantity < 0)
        {
            product.Quantity += quantity;

            string errorMessage = product.Name + " ürün stoku satıştan sonra eskiye düşeceği için satış iptal edildi. Stok ekleyip satışı tekrar yapın!";
            return (500, errorMessage);
        }

        return "Satış işlemi başarıyla tamamlandı";
    }

    public Result<Guid> AddStock(Guid productId, int quantity)
    {
        Product? product = products.FirstOrDefault(p => p.Id == productId);
        if (product is null)
        {
            return (500,"Ürün bulunamadı!");
        }


        product.Quantity += quantity;

        return "Ürün adedi başarıyla güncellendi";
    }

    public Result<List<ProdutReportListDto>> GetProductListForReport()
    {
        var reportList = products.Select(s => new ProdutReportListDto()
        {
            ProductName = s.Name,
            ProductQuantity = s.Quantity
        }).ToList();
        
        return reportList;
    }
}
