using EntityFrameworkCore.RepositoryPattern.WebApi.Models;

namespace EntityFrameworkCore.RepositoryPattern.WebApi.Repositories;

public class NewProductRepository
{
    public int Add(Product entity)
    {
        //MongoDbKayıt Kodları
        return entity.Id;
    }

    public Task<int> AddAsync(Product entity, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public void DeleteById(int id)
    {
        //MongoDbRemove Kodları
    }

    public List<Product> GetAll(CancellationToken cancellationToken = default)
    {
        //MongoDbList Kodları
        return new List<Product>();
    }

    public Task<List<Product>> GetAllAsync(CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }

    public int SaveChanges(CancellationToken cancellationToken = default)
    {
        return 0;
    }

    public void Update(Product entity)
    {
        //MongoDbUpdate Kodları
    }
}
