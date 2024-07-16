using Business.Abstract;
using Business.Aspects.Secured;
using Business.Repositories.UserRepository;
using Business.ValidationRules.FluentValidation;
using Core.Aspects.Validation;
using Core.Utilities.Business;
using Core.Utilities.Hashing;
using Core.Utilities.Result.Abstract;
using Core.Utilities.Result.Concrete;
using Core.Utilities.Security.JWT;
using Entities.Concrete;
using Entities.Dtos;

namespace Business.Authentication;
public class AuthManager : IAuthService
{
    private readonly IUserService _userService;
    private readonly ITokenHandler _tokenHandler;

    public AuthManager(IUserService userService, ITokenHandler tokenHandler)
    {
        _userService = userService;
        _tokenHandler = tokenHandler;
    }

    public async Task<IDataResult<Token>> Login(LoginAuthDto loginDto)
    {
        var user = await _userService.GetByEmail(loginDto.Email);
        if (user == null)
            return new ErrorDataResult<Token>("Kullanıcı maili sistemde bulunamadı!");

        //if (!user.IsConfirm)
        //    return new ErrorDataResult<Token>("Kullanıcı maili onaylanmamış!");

        var result = HashingHelper.VerifyPasswordHash(loginDto.Password, user.PasswordHash, user.PasswordSalt);
        List<OperationClaim> operationClaims = await _userService.GetUserOperationClaims(user.Id);

        if (result)
        {
            Token token = new();
            token = _tokenHandler.CreateToken(user, operationClaims);
            return new SuccessDataResult<Token>(token);
        }
        return new ErrorDataResult<Token>("Kullanıcı maili ya da şifre bilgisi yanlış");
    }

    [ValidationAspect(typeof(AuthValidator))]
    public async Task<IResult> Register(RegisterAuthDto registerDto)
    {
        IResult result = BusinessRules.Run(
            await CheckIfEmailExists(registerDto.Email),
            CheckIfImageExtesionsAllow(registerDto.Image.FileName),
            CheckIfImageSizeIsLessThanOneMb(registerDto.Image.Length)
            );

        if (result != null)
        {
            return result;
        }

        await _userService.Add(registerDto);
        return new SuccessResult("Kullanıcı kaydı başarıyla tamamlandı");
    }

    private async Task<IResult> CheckIfEmailExists(string email)
    {
        var list = await _userService.GetByEmail(email);
        if (list != null)
        {
            return new ErrorResult("Bu mail adresi daha önce kullanılmış");
        }
        return new SuccessResult();
    }

    private IResult CheckIfImageSizeIsLessThanOneMb(long imgSize)
    {
        decimal imgMbSize = Convert.ToDecimal(imgSize * 0.000001);
        if (imgMbSize > 1)
        {
            return new ErrorResult("Yüklediğiniz resmi boyutu en fazla 1mb olmalıdır");
        }
        return new SuccessResult();
    }

    private IResult CheckIfImageExtesionsAllow(string fileName)
    {
        var ext = fileName.Substring(fileName.LastIndexOf('.'));
        var extension = ext.ToLower();
        List<string> AllowFileExtensions = new List<string> { ".jpg", ".jpeg", ".gif", ".png" };
        if (!AllowFileExtensions.Contains(extension))
        {
            return new ErrorResult("Eklediğiniz resim .jpg, .jpeg, .gif, .png türlerinden biri olmalıdır!");
        }
        return new SuccessResult();
    }
}
