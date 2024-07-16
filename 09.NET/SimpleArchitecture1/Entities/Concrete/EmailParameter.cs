namespace Entities.Concrete;

public class EmailParameter
{
    public int Id { get; set; }
    public string Smtp { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public int Port { get; set; }
    public bool SSL { get; set; }
    public bool Html { get; set; }
}
