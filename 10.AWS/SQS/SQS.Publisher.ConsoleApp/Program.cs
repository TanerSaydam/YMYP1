using Amazon.SQS;
using Amazon.SQS.Model;
using System.Text.Json;

//string accessKey = string.Empty;
//string secretKey = string.Empty;
var region = Amazon.RegionEndpoint.EUWest3;

var sqsClient = new AmazonSQSClient();

var customer = new
{
    FirstName = "Taner",
    LastName = "Saydam",
    Age = 35
};

Console.WriteLine(" [*] Starting sending queue message...");

var queueUrlResponse = await sqsClient.GetQueueUrlAsync("customers");

var sendMessageRequest = new SendMessageRequest
{
    QueueUrl = queueUrlResponse.QueueUrl,
    MessageBody = JsonSerializer.Serialize(customer),
    MessageAttributes = new Dictionary<string, MessageAttributeValue>
    {
        {
            "MessageType", new MessageAttributeValue
            {
                DataType = "String",
                StringValue = "Customer"
            }
        }
    }
};

SendMessageResponse response = await sqsClient.SendMessageAsync(sendMessageRequest);

Console.WriteLine(" [*] Send queue message is completed...");
Console.Read();