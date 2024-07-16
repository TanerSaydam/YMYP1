using Core.Utilities.Result.Abstract;
using Entities.Concrete;

namespace Business.Repositories.OperationClaimRepository;
public interface IOperationClaimService
{
    Task<IResult> Add(OperationClaim operationClaim);
    Task<IResult> Update(OperationClaim operationClaim);
    Task<IResult> Delete(OperationClaim operationClaim);
    Task<IDataResult<List<OperationClaim>>> GetList();
    Task<IDataResult<OperationClaim>> GetById(int id);
    Task<OperationClaim> GetByIdForUserService(int id);
}
