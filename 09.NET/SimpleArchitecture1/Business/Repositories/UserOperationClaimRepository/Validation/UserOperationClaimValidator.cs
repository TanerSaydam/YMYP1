using Entities.Concrete;
using FluentValidation;

namespace Business.Repositories.UserOperationClaimRepository.Validation;
public class UserOperationClaimValidator : AbstractValidator<UserOperationClaim>
{
    public UserOperationClaimValidator()
    {
        RuleFor(p => p.UserId).Must(IsIdValid).WithMessage("Yetki ataması için kullanıcı seçimi yapmalısınız");
        RuleFor(p => p.OperationClaimId).Must(IsIdValid).WithMessage("Yetki ataması için yetki seçimi yapmalısınız");
    }

    private bool IsIdValid(int id)
    {
        if (id > 0 && id != null)
        {
            return true;
        }
        return false;
    }
}
