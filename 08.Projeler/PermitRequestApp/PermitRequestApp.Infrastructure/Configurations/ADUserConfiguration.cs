using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PermitRequestApp.Domain.ADUsers;

namespace PermitRequestApp.Infrastructure.Configurations;
internal sealed class ADUserConfiguration : IEntityTypeConfiguration<ADUser>
{
    public void Configure(EntityTypeBuilder<ADUser> builder)
    {
        builder.ToTable("ADUsers");

        List<ADUser> users = new()
        {
            ADUser.CreateSeedData(
                id: Guid.Parse("e21cd525-031c-4364-b173-4150a4e18c37"),
                firstName: "Münir",
                lastName: "Özkul",
                email: "munir.ozkul@negzel.net",
                userType: UserType.Manager,
                managerId: null),
            ADUser.CreateSeedData(
                id :Guid.Parse("59fb152a-2d59-435d-8fc1-cbc35c0f1d82"),
                firstName : "Şener",
                lastName : "Şen",
                email : "sener.sen@negzel.net",
                userType : UserType.WhiteCollarEmployee,
                managerId : Guid.Parse("e21cd525-031c-4364-b173-4150a4e18c37")),
            ADUser.CreateSeedData(
                id : Guid.Parse("23591451-1cf1-46a5-907a-ee3e52abe394"),
                firstName : "Kemal",
                lastName : "Sunal",
                email : "kemal.sunal@negzel.net",
                userType : UserType.BlueCollarEmployee,
                managerId : Guid.Parse("59fb152a-2d59-435d-8fc1-cbc35c0f1d82"))
        };

        builder.HasData(users);
    }
}
