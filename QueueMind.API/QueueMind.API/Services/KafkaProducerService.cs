using Confluent.Kafka;

namespace QueueMind.API.Services
{
    public class KafkaProducerService
    {
        private readonly ProducerConfig _config;

        public KafkaProducerService()
        {
            _config = new ProducerConfig
            {
                BootstrapServers = "192.168.1.13:9092"
            };
        }

        public async Task SendLog(string message)
        {
            using var producer = new ProducerBuilder<Null, string>(_config).Build();

            await producer.ProduceAsync("logs-topic", new Message<Null, string>
            {
                Value = message
            });
        }
    }
}