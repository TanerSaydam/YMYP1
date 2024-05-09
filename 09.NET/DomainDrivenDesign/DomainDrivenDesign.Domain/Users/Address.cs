namespace DomainDrivenDesign.Domain.Users;

public sealed record Address(
    string Country,
    string City,
    string Town,
    string Street,
    string FullAddress);
