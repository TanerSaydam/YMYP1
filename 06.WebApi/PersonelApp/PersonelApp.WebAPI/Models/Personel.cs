namespace PersonelApp.WebAPI.Models;

public class Personel
{
    //public string FirstName; //değişken
    public int Id { get; set; }
    public string FirstName { get; set; } = string.Empty; //"" //property
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Avatar { get; set; } = string.Empty;
}
