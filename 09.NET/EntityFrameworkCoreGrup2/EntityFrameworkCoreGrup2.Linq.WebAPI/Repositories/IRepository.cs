namespace EntityFrameworkCoreGrup2.Linq.WebAPI.Repositories;

public interface IRepository<T>    
{
    void Create(T entity);
    void Update(T entity);  
    List<T> GetAll();
}
