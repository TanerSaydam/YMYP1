using eHospitalServer.Business.Services;
using eHospitalServer.Entities.DTOs;
using eHospitalServer.Entities.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using TS.Result;

namespace eHospitalServer.DataAccess.Services;
internal class AuthService(
    UserManager<User> userManager,
    SignInManager<User> signInManager,
    JwtProvider jwtProvider
    ): IAuthService
{
    public async Task<Result<string>> ConfirmVerificationEmail(int emailConfirmCode, CancellationToken cancellationToken)
    {
        User? user = await userManager.Users.Where(p=> p.EmailConfirmCode == emailConfirmCode).FirstOrDefaultAsync(cancellationToken);
        if (user is null)
        {
            return Result<string>.Failure(500, "Email confirm code is not available");
        }

        if (user.EmailConfirmed)
        {
            return Result<string>.Failure(500, "User email already confirmed");
        }

        user.EmailConfirmed = true;
        await userManager.UpdateAsync(user);

        return Result<string>.Succeed("Email verification is succeed");
    }

    public async Task<Result<LoginResponseDto>> GetTokenByRefreshTokenAsync(string refreshToken, CancellationToken cancellationToken)
    {
        User? user = await userManager.Users.Where(p => p.RefreshToken == refreshToken).FirstOrDefaultAsync(cancellationToken);

        if (user is null)
        {
            return (500, "Refresh token unavailable");
        }

        var loginResponse = await jwtProvider.CreateToken(user, false);


        return loginResponse;
    }

    public async Task<Result<LoginResponseDto>> LoginAsync(LoginRequestDto request, CancellationToken cancellationToken)
    {
        string emailOrUserName = request.EmailOrUserName.ToUpper();
        User? user = await userManager.Users
            .FirstOrDefaultAsync(p => 
            p.NormalizedUserName == emailOrUserName || 
            p.NormalizedEmail == emailOrUserName, 
            cancellationToken);

        if(user is null)
        {
            return (500, "User not found");
        }

        SignInResult signInResult = await signInManager.CheckPasswordSignInAsync(user, request.Password, true);

        if (signInResult.IsLockedOut)
        {
            TimeSpan? timeSpan = user.LockoutEnd - DateTime.UtcNow;
            if (timeSpan is not null)
                return (500, $"Your user has been locked for {Math.Ceiling(timeSpan.Value.TotalMinutes)} minutes due to entering the wrong password 3 times.");
            else
                return (500, "Your user has been locked out for 5 minutes due to entering the wrong password 3 times.");
        }

        if (signInResult.IsNotAllowed)
        {
            return (500, "Your e-mail address is not confirmed");
        }

        if (!signInResult.Succeeded)
        {
            return (500, "Your password is wrong");
        }

        var loginResponse = await jwtProvider.CreateToken(user, request.RememberMe);        


        return loginResponse;
    }

    public async Task<Result<string>> SendConfirmEmailAsync(string email, CancellationToken cancellationToken)
    {
        User? user = await userManager.FindByEmailAsync(email);
        if (user is null)
        {
            return Result<string>.Failure(500, "User cannot be found");
        }

        if (user.EmailConfirmed)
        {
            return Result<string>.Failure(500, "User email already confirmed");
        }

        var dif = DateTime.UtcNow - user.EmailConfirmCodeSendDate;


        if (dif.TotalMinutes < 3)
        {
            return Result<string>.Failure(500, "Verification mail is send every 3 minutes.");
        }

        user.EmailConfirmCodeSendDate = DateTime.UtcNow;

        await userManager.UpdateAsync(user);

        #region Send Mail Verification
        string subject = "Verification Mail";
        string body = CreateConfirmEmailBody(user.EmailConfirmCode.ToString());

        var stringEmailResponse = await EmailHelper.SendEmailAsync(user.Email ?? "", subject, body);
        #endregion

        return Result<string>.Succeed("Verification mail is sent successfully");
    }

    private string CreateConfirmEmailBody(string emailConfirmCode)
    {
        string body = @"
<!DOCTYPE html>
<html lang=""en"">
<head>
    <meta charset=""UTF-8"">
    <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
    <title>Email Confirmation Code</title>
    <style>
        /* Stil özellikleri */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            text-align: center;
            justify-content: center;
            align-items: center;
        }
        .confirmation-code {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            margin-left: 50px;
        }
        .digit-container {
            display: flex;
            width: auto; /* Kutu genişliğini artır */
            height: auto;
            border: 2px solid #007bff;
            border-radius: 10px;
            margin-right: 10px;
            font-size: 55px;
            font-weight: bold;
            color: #007bff;
            text-align: center;
            inherit: text-align;
        }
    </style>
</head>
<body>
    <div class=""container"">
        <h2 style=""color: #007bff;"">Email Confirmation Code</h2>
        <p>Please use the following code to confirm your email:</p>
        <div class=""confirmation-code"">
            <!-- Her bir rakam için ayrı bir kutu oluşturuluyor -->
            <div class=""digit-container""> <div style=""padding-right: 20px; padding-left: 20px; ""> " + emailConfirmCode[0] + @" </div></div>
            <div class=""digit-container""> <div style=""padding-right: 20px; padding-left: 20px; ""> " + emailConfirmCode[1] + @" </div></div>
            <div class=""digit-container""> <div style=""padding-right: 20px; padding-left: 20px; ""> " + emailConfirmCode[2] + @" </div></div>
            <div class=""digit-container""> <div style=""padding-right: 20px; padding-left: 20px; ""> " + emailConfirmCode[3] + @" </div></div>
            <div class=""digit-container""> <div style=""padding-right: 20px; padding-left: 20px; ""> " + emailConfirmCode[4] + @" </div></div>
            <div class=""digit-container""> <div style=""padding-right: 20px; padding-left: 20px; ""> " + emailConfirmCode[5] + @" </div></div>
        </div>
        <p style=""margin-top: 20px;"">This code will expire in 10 minutes.</p>
    </div>
</body>
</html>
";

        return body;
    }
}


//Şifremi unuttum işleminde şifremi unuttum maili gidecek
//Şifremi unuttum için 6 haneli unique bir kod üretecek
//Kod 5 dakika geçerli olacak
//2 defa kullanılamaycak