HashSet<int> numbers = new();

for (int i = 0; i < 10; i++)
{
    numbers.Add(i);
}

for (int i = 0; i < 10; i++)
{
    numbers.Add(i);
}

foreach (var item in numbers)
{
    Console.WriteLine(item);
}