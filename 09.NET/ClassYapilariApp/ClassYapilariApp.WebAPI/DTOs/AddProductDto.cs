namespace ClassYapilariApp.WebAPI.DTOs;

public class AddProductDto
{
    public string Name { get; set; } = string.Empty;
    public int Quantity { get; set; }
    public decimal Price { get; set; }
}
