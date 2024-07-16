using Business.Repositories.OperationClaimRepository;
using Business.Repositories.UserOperationClaimRepository.Constans;
using Business.Repositories.UserOperationClaimRepository.Validation;
using Business.Repositories.UserRepository;
using Core.Aspects.Validation;
using Core.Utilities.Business;
using Core.Utilities.Result.Abstract;
using Core.Utilities.Result.Concrete;
using DataAccess.Repositories.UserOperationClaimRepository;
using Entities.Concrete;

namespace Business.Repositories.UserOperationClaimRepository;
public class UserOperationClaimManager : IUserOperationClaimService
{
    private readonly IUserOperationClaimDal _userOperationClaimDal;
    private readonly IOperationClaimService _operationClaimService;
    private readonly IUserService _userService;

    public UserOperationClaimManager(IUserOperationClaimDal userOperationClaimDal, IOperationClaimService operationClaimService, IUserService userService)
    {
        _userOperationClaimDal = userOperationClaimDal;
        _operationClaimService = operationClaimService;
        _userService = userService;
    }


    public async Task<IResult> Delete(UserOperationClaim userOperationClaim)
    {
        await _userOperationClaimDal.Delete(userOperationClaim);
        return new SuccessResult(UserOperationClaimMessages.Deleted);
    }

    public async Task<IDataResult<UserOperationClaim>> GetById(int id)
    {
        return new SuccessDataResult<UserOperationClaim>(await _userOperationClaimDal.Get(p => p.Id == id));
    }

    public async Task<IDataResult<List<UserOperationClaim>>> GetList()
    {
        return new SuccessDataResult<List<UserOperationClaim>>(await _userOperationClaimDal.GetAll());
    }

    [ValidationAspect(typeof(UserOperationClaimValidator))]
    public async Task<IResult> Update(UserOperationClaim userOperationClaim)
    {
        IResult result = BusinessRules.Run(
            await IsUserExist(userOperationClaim.UserId),
            await IsOperationClaimExist(userOperationClaim.OperationClaimId),
            await IsOperationSetExistForUpdate(userOperationClaim)
            );
        if (result != null)
        {
            return result;
        }

        await _userOperationClaimDal.Update(userOperationClaim);
        return new SuccessResult(UserOperationClaimMessages.Updated);
    }

    [ValidationAspect(typeof(UserOperationClaimValidator))]
    public async Task<IResult> Add(UserOperationClaim userOperationClaim)
    {
        IResult result = BusinessRules.Run(
            await IsUserExist(userOperationClaim.UserId),
            await IsOperationClaimExist(userOperationClaim.OperationClaimId),
            await IsOperationSetExistForAdd(userOperationClaim)
            );
        if (result != null)
        {
            return result;
        }

        await _userOperationClaimDal.Add(userOperationClaim);
        return new SuccessResult(UserOperationClaimMessages.Added);
    }

    public async Task<IResult> IsUserExist(int userId)
    {
        var result = await _userService.GetByIdForAuth(userId);
        if (result == null)
        {
            return new ErrorResult(UserOperationClaimMessages.UserNotExist);
        }
        return new SuccessResult();
    }

    public async Task<IResult> IsOperationClaimExist(int operationClaimId)
    {
        var result = await _operationClaimService.GetByIdForUserService(operationClaimId);
        if (result == null)
        {
            return new ErrorResult(UserOperationClaimMessages.OperationClaimNotExist);
        }
        return new SuccessResult();
    }

    public async Task<IResult> IsOperationSetExistForAdd(UserOperationClaim userOperationClaim)
    {
        var result = await _userOperationClaimDal.Get(p => p.UserId == userOperationClaim.UserId && p.OperationClaimId == userOperationClaim.OperationClaimId);
        if (result != null)
        {
            return new ErrorResult(UserOperationClaimMessages.OperationClaimSetExist);
        }
        return new SuccessResult();
    }

    private async Task<IResult> IsOperationSetExistForUpdate(UserOperationClaim userOperationClaim)
    {
        var currentUserOperationClaim = await _userOperationClaimDal.Get(p => p.Id == userOperationClaim.Id);
        if (currentUserOperationClaim.UserId != userOperationClaim.UserId || currentUserOperationClaim.OperationClaimId != userOperationClaim.OperationClaimId)
        {
            var result = await _userOperationClaimDal.Get(p => p.UserId == userOperationClaim.UserId && p.OperationClaimId == userOperationClaim.OperationClaimId);
            if (result != null)
            {
                return new ErrorResult(UserOperationClaimMessages.OperationClaimSetExist);
            }
        }
        return new SuccessResult();
    }
}
