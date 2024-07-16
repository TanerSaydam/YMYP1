using Core.DataAccess.EntityFramework;
using DataAccess.Context.EntityFramework;
using Entities.Concrete;

namespace DataAccess.Repositories.EmailParameterRepository;
public class EfEmailParameterDal : EfEntityRepositoryBase<EmailParameter, SimpleContextDb>, IEmailParameterDal
{
}
