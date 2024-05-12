using DomainDrivenDesign.Domain.Abstractions;
using DomainDrivenDesign.Domain.Shared;

namespace DomainDrivenDesign.Domain.Users;

public sealed class User : Entity
{
    private User()
    {

    }
    private User(Name fullName, Email email, Password password, Address address, EmailConfirmCode emailConfirmCode)
    {
        FullName = fullName;
        Email = email;
        Password = password;
        Address = address;
        EmailConfirmCode = emailConfirmCode;
    }
    public Name FullName { get; private set; }
    public Email Email { get; private set; }
    public Password Password { get; private set; }
    public Address Address { get; private set; }
    public EmailConfirmCode EmailConfirmCode { get; private set; }

    public static User CreateUser(string fullName, string email, string password, string country, string city, string town, string street, string fullAddress, string emailConfirmCode)
    {
        //iş kuralları
        User user = new(
            fullName: new(fullName),
            email: new(email),
            password: new(password),
            address: new(country, city, town, street, fullAddress),
            emailConfirmCode: new(emailConfirmCode));

        return user;
    }

    public void ChangeFullName(string fullName)
    {
        FullName = new(fullName);
    }
}

public sealed record EmailConfirmCode(string Value);
