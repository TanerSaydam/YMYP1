using GenericEmailService;

namespace eHospitalServer.Business.Services;
public static class EmailHelper
{
    public static async Task<string> SendEmailAsync(string email, string subject, string body)
    {
        EmailConfigurations emailConfigurations = new(
                "smtp.office365.com",
                "Parola1!",
                587,
                false,
                true);

        EmailModel<Stream> emailModel = new(
            emailConfigurations,
        "iyzico1@outlook.com",
            new List<string> { email },
            subject,
            body,
            null);


        string emailSendResponse = await EmailService.SendEmailWithMailKitAsync(emailModel);

        return emailSendResponse;
    }
}
