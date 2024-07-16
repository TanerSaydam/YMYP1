using Core.Utilities.Result.Abstract;
using Entities.Concrete;

namespace Business.Repositories.UserOperationClaimRepository;
public interface IUserOperationClaimService
{
    Task<IResult> Add(UserOperationClaim userOperationClaim);
    Task<IResult> Update(UserOperationClaim userOperationClaim);
    Task<IResult> Delete(UserOperationClaim userOperationClaim);
    Task<IDataResult<List<UserOperationClaim>>> GetList();
    Task<IDataResult<UserOperationClaim>> GetById(int id);
}
