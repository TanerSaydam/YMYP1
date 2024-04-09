using FluentEmail.Core;
using FluentEmail.Core.Models;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newsletter.Domain.Entities;
using Newsletter.Domain.Repositories;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System.Text;
using System.Text.Json;

namespace Newsletter.Application.Services;
public sealed class BlogBackgroundService : BackgroundService
{
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        Console.WriteLine("Background service is working...");

        var factory = new ConnectionFactory { HostName = "localhost" };
        using var connection = factory.CreateConnection();
        using var channel = connection.CreateModel();

        channel.QueueDeclare(
            queue: "newsletter",
            exclusive: false,
            autoDelete: false,
            arguments: null
            );

        Console.WriteLine(" [*] Waiting for messages...");

        var consumer = new EventingBasicConsumer(channel);
        consumer.Received += (model, ea) =>
        {
            var body = ea.Body.ToArray();
            var message = Encoding.UTF8.GetString(body);
            BlogQueueResponseDto? response = JsonSerializer.Deserialize<BlogQueueResponseDto>(message);
            if (response is null)
            {
                Console.WriteLine("Response is empty or null");
            }

            var services = new ServiceCollection();
            var scoped = services.BuildServiceProvider();
            var blogRepository = scoped.GetRequiredService<IBlogRepository>();
            var fluentEmail = scoped.GetRequiredService<IFluentEmail>();

            Blog? blog = blogRepository.GetByExpression(p => p.Id == response!.BlogId);

            if (blog is null)
            {
                Console.WriteLine("Blog not found");
            }

            SendResponse sendResponse = fluentEmail
            .To(response!.Email)
            .Subject(blog!.Title)
            .Body(blog.Content, true)
            .Send();

            if (sendResponse.Successful)
            {
                Console.WriteLine($" [*] {response.Email} blogs sended");
            }
        };

        await Task.CompletedTask;
    }
}


public sealed record BlogQueueResponseDto(
    Guid BlogId,
    string Email);