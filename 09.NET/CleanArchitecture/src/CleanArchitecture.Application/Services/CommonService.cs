namespace CleanArchitecture.Application.Services;
internal static class CommonService
{
    public static string ReplaceAllTurkishCharacters(string value)
    {
        Dictionary<string, string> keys = new();

        keys.Add("Ğ", "G");
        keys.Add("ğ", "g");
        keys.Add("Ş", "S");
        keys.Add("ş", "s");
        keys.Add("İ", "I");
        keys.Add("ı", "i");
        keys.Add("Ü", "U");
        keys.Add("ü", "u");
        keys.Add("ö", "o");


        foreach (var item in keys)
        {
            value = value.Replace(item.Key, item.Value);
        }


        return value;
    }
}
