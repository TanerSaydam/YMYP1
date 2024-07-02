namespace QuizServer.Infrastructure.Options;
public class Jwt
{
    public string Issuer { get; set; } = default!;
    public string Audience { get; set; } = string.Empty;
    public string SecretKey { get; set; } = default!;
}
