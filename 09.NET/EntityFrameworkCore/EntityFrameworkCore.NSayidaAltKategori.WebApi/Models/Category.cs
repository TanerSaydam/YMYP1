namespace EntityFrameworkCore.NSayidaAltKategori.WebApi.Models;

public sealed class Category
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public int? MainCategoryId { get; set; }
    public Category? MainCategory { get; set; }
}


public class Example
{
    public void CreateCategory()
    {
        List<Category> categories = new List<Category>();
        Category categoryElektronik = new()
        {
            Id = 1,
            Name = "Elektronik",
            MainCategoryId = null
        };
        categories.Add(categoryElektronik);


        Category categoryTelevizyon = new()
        {
            Id = 2,
            Name = "Televizyon",
            MainCategoryId = 1 //Elektronik
        };
        categories.Add(categoryTelevizyon);

        Category categorySamsung = new()
        {
            Id = 3,
            Name = "Samsung",
            MainCategoryId = 2 //Televizyon
        };
        categories.Add(categoryTelevizyon);

        Category categoryBilgisayar = new()
        {
            Id = 4,
            Name = "Bilgisayar",
            MainCategoryId = 1 //Elektronik
        };
        categories.Add(categoryTelevizyon);
    }
}