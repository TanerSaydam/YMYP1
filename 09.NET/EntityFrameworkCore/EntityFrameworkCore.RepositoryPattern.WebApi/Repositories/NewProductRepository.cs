using EntityFrameworkCore.RepositoryPattern.WebApi.Models;

namespace EntityFrameworkCore.RepositoryPattern.WebApi.Repositories;

public class NewProductRepository : IProductRepository
{
    public int Add(Product entity)
    {
        //MongoDbKayıt Kodları
        return entity.Id;
    }

    public void DeleteById(int id)
    {
        //MongoDbRemove Kodları
    }

    public List<Product> GetAll()
    {
        //MongoDbList Kodları
        return new List<Product>();
    }

    public void Update(Product entity)
    {
        //MongoDbUpdate Kodları
    }
}
