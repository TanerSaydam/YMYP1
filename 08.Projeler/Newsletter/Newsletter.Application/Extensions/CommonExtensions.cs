namespace Newsletter.Application.Extensions;
public static class CommonExtensions
{
    public static string ConvertTitleToUrl(this string str)
    {
        Dictionary<string, string> characters = new()
        {

            { "ü","u" },
            { "ş", "s" },
            { "ı", "i" },
            { "ö", "o" },
            { "ç", "c" },
            { "ğ", "g" },
            { "#", "sharp" },
            { "?", "" }
        };


        string url = str.ToLower();
        
        foreach (var c in characters)
        {
            url = url.Replace(c.Key, c.Value);
        }

        var urls = url.Split(" ");
        url = string.Join("-", urls);

        return url;
    }
}
