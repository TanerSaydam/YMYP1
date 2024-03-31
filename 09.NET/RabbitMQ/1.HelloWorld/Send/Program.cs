using RabbitMQ.Client;
using System.Text;

var factory = new ConnectionFactory { HostName = "localhost" };
using var connection = factory.CreateConnection();
using var channel = connection.CreateModel();

channel.QueueDeclare(
    queue: "hello",
    durable: false, //rabbitmq kapandığında hayatta kal
    exclusive: false, //özel kuyruk oluştur
    autoDelete: false, //bağlı consume yoksa kuyruğu sil
    arguments: null); //özel argümanlar

const string message = "Hello World!";
var body = Encoding.UTF8.GetBytes(message);

channel.BasicPublish(
    exchange: string.Empty, //direct/topic/fonut ve headers
    routingKey: "hello", //bağlanacağımız kuyruk adı
    basicProperties: null, // temel özellikler
    body: body); //göndereceğimiz message

Console.WriteLine($" [x] Send {message}");

Console.WriteLine($" Press [enter] to exit.");

Console.ReadLine();
