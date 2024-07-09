while (true)
{
    await Task.Delay(2000);
    HttpClient client = new HttpClient();
    var responseMessage = await client.GetAsync("https://localhost:7076/health-check");

    if (responseMessage.IsSuccessStatusCode)
    {
        var response = await responseMessage.Content.ReadAsStringAsync();
        Console.WriteLine(response);
    }
}