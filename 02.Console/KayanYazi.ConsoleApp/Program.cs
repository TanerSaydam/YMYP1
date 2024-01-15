namespace KayanYazi.ConsoleApp;

internal class Program
{
    static async Task Main(string[] args)
    {
        string text = "Hello, My name is TS AI! How can I help you today?";
        string dialog = "";

        foreach (var letter in text.ToCharArray())
        {
            dialog += letter;

            await Task.Delay(20);
            Console.Clear();
            Console.WriteLine(dialog);
        }

        string message = Console.ReadLine();

        text = "Ooo, I am sorry. I am just a program. I cannot do that!";
        dialog = "";

        foreach (var letter in text.ToCharArray())
        {
            dialog += letter;

            await Task.Delay(50);
            Console.Clear();
            Console.WriteLine(dialog);
        }

        Console.ReadLine();
    }
}
