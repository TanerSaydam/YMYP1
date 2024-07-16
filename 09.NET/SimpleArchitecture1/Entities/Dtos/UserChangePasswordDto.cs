namespace Entities.Dtos;

public class UserChangePasswordDto
{
    public int UserId { get; set; }
    public string CurrentPassword { get; set; }
    public string NewPassword { get; set; }
}
