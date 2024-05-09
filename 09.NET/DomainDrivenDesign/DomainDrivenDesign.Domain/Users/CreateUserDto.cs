namespace DomainDrivenDesign.Domain.Users;

public sealed record CreateUserDto(
    string FullName, 
    string Email, 
    string Password, 
    string Country, 
    string City, 
    string Town, 
    string Street, 
    string FullAddress);
