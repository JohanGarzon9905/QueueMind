using Microsoft.AspNetCore.Mvc;
using QueueMind.API.Services;

namespace QueueMind.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        private readonly KafkaProducerService _kafka;

        public TestController(KafkaProducerService kafka)
        {
            _kafka = kafka;
        }

        [HttpGet("log")]
        public async Task<IActionResult> SendLog()
        {
            await _kafka.SendLog("Log desde QueueMind API");
            return Ok("Log enviado a Kafka");
        }
    }
}