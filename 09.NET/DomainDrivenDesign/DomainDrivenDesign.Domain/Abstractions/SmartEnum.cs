using System.Reflection;

namespace DomainDrivenDesign.Domain.Abstractions;

public abstract class SmartEnum<TEnum>
    where TEnum : SmartEnum<TEnum>
{
    private static readonly Dictionary<int, TEnum> Enumerations = CreateEnumeration();
    public int Value { get; protected init; }
    public string Name { get; protected init; }
    private static Dictionary<int, TEnum> CreateEnumeration()
    {
        var enumerationType = typeof(TEnum);

        var fieldsForType = enumerationType
            .GetFields(
                BindingFlags.Public |
                BindingFlags.Static |
                BindingFlags.FlattenHierarchy)
            .Where(info => enumerationType.IsAssignableFrom(info.FieldType))
            .Select(info => (TEnum)info.GetValue(default)!);

        return fieldsForType.ToDictionary(x => x!.Value);

    }

    protected SmartEnum(string name, int value)
    {
        Name = name;
        Value = value;
    }

    public static TEnum? FromValue(int value)
    {
        return Enumerations.TryGetValue(value,
            out TEnum? enumeration) ? enumeration : default;
    }

    public static TEnum? FromName(string name)
    {
        return Enumerations.Values.SingleOrDefault(p => p.Name == name);
    }
}
