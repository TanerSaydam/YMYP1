using GenericRepository;
using Newsletter.Domain.Entities;
using Newsletter.Domain.Repositories;
using Newsletter.Infrastructure.Context;

namespace Newsletter.Infrastructure.Repositories;
internal sealed class BlogRepository : Repository<Blog, ApplicationDbContext>, IBlogRepository
{
    public BlogRepository(ApplicationDbContext context) : base(context)
    {
    }
}
