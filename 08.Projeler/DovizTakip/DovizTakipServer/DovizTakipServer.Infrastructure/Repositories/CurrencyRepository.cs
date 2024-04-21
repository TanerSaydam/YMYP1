using DovizTakipServer.Domain.Entities;
using DovizTakipServer.Domain.Repositories;
using DovizTakipServer.Infrastructure.Context;
using GenericRepository;

namespace DovizTakipServer.Infrastructure.Repositories;
internal sealed class CurrencyRepository : Repository<Currency, ApplicationDbContext>, ICurrencyRepository
{
    public CurrencyRepository(ApplicationDbContext context) : base(context)
    {
    }
}
