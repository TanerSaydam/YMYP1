namespace Portfolio.WebApi.Models;

public class MyInformation
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Lastname { get; set; }
    public string Email { get; set; }
    public string Description { get; set; }
}

public class MyInformationDto
{
    public string Name { get; set; }
    public string Lastname { get; set; }
    public string Email { get; set; }
    public string Description { get; set; }
}