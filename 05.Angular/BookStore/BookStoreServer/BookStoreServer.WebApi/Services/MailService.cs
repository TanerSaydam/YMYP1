using BookStoreServer.WebApi.Options;
using BookStoreServer.WebApi.Utilities;
using GenericEmailService;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace BookStoreServer.WebApi.Services;

public static class MailService
{
    public static async Task<string> SendEmailAsync(string email, string subject, string body)
    {
        var emailSettings = ServiceTool.ServiceProvider.GetRequiredService<IOptions<EmailSettings>>();
        

        EmailConfigurations configurations = new(
            Smtp: emailSettings.Value.SMTP,
            Password: emailSettings.Value.Password,
            Port: emailSettings.Value.Port,
            SSL: emailSettings.Value.SSL,
            Html: true);

        List<string> emails = new() { email };

        EmailModel<Stream> model = new(
                Configurations: configurations,
                FromEmail: emailSettings.Value.Email,
                ToEmails: emails,
                Subject: subject,
                Body: body,
                Attachments: null);

        string response  = await EmailService.SendEmailWithMailKitAsync(model);
        return response;
    }
}
