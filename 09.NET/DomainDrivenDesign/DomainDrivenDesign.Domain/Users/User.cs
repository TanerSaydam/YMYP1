using DomainDrivenDesign.Domain.Abstractions;
using DomainDrivenDesign.Domain.Shared;

namespace DomainDrivenDesign.Domain.Users;

public sealed class User : Entity
{
    private User(Name fullName, Email email, Password password, Address address)
    {
        FullName = fullName;
        Email = email;
        Password = password;
        Address = address;
    }
    public Name FullName { get; private set; }
    public Email Email { get; private set; }
    public Password Password { get; private set; }
    public Address Address { get; private set; }

    public static User CreateUser(string fullName, string email, string password, string country,string city, string town, string street, string fullAddress)
    {
        //iş kuralları
        User user = new(
            fullName: new(fullName),
            email: new(email),
            password: new(password),
            address: new(country, city, town, street, fullAddress));

        return user;
    }

    public void ChangeFullName(string fullName)
    {
        FullName = new(fullName);
    }
}
