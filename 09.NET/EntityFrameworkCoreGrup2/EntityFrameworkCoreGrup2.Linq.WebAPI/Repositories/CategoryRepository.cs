using EntityFrameworkCoreGrup2.Linq.WebAPI.Context;

namespace EntityFrameworkCoreGrup2.Linq.WebAPI.Repositories;

public class CategoryRepository : Repository<Category>, ICategoryRepository
{
    public CategoryRepository(ApplicationDbContext context) : base(context)
    {
    }
}

public class A : B, IA
{
   
}

public class B
{
    public void Add()
    {
        throw new NotImplementedException();
    }
}

public interface IA
{
    void Add();
}
    
