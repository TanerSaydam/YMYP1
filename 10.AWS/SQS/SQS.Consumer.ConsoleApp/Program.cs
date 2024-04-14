using Amazon.SQS;
using Amazon.SQS.Model;

var sqsClient = new AmazonSQSClient();

var queueUrlResponse = await sqsClient.GetQueueUrlAsync("customers");

var receiveMessageRequest = new ReceiveMessageRequest
{
    QueueUrl = queueUrlResponse.QueueUrl,
    AttributeNames = new List<string>() { "All"},
    MessageAttributeNames = new List<string>() { "All" }
};

var cts = new CancellationTokenSource();

while (!cts.IsCancellationRequested)
{
    var response = await sqsClient.ReceiveMessageAsync(receiveMessageRequest);
    foreach (var message in response.Messages)
    {
        //Mail gönder
        //SMS gönder

        try
        {
            Console.WriteLine($"Message Id: {message.MessageId}");
            Console.WriteLine($"Message body: {message.Body}");

            await sqsClient.DeleteMessageAsync(queueUrlResponse.QueueUrl, message.ReceiptHandle);
        }
        catch (Exception ex)
        {

        }
    }

    await Task.Delay(100);
}