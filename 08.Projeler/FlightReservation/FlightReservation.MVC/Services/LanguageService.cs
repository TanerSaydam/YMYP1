using Azure.Core;
using Microsoft.Extensions.Localization;
using System.Reflection;

namespace FlightReservation.MVC.Services;

public class SharedResource
{
    //16:00 görüşelim
}
public class LanguageService
{
    private readonly IStringLocalizer _localizer;

    public LanguageService(IStringLocalizerFactory factory)
    {
        var type = typeof(SharedResource);
        var assemblyName = new AssemblyName(type.GetTypeInfo().Assembly.FullName ?? "");
        _localizer = factory.Create(nameof(SharedResource), assemblyName.Name ?? "");
    } 
    
    public LocalizedString Getkey(string key)
    {
        return _localizer[key];
    }

    public string GetCurrentLanguage(HttpRequest request)
    {
        var languageCookie = request.Cookies[".AspNetCore.Culture"];
        if (languageCookie is not null)
        {
            string[] result = languageCookie.Split("=");
            return result[2];
        }
        else
        {
           return "en-US";
        }
   }
}
