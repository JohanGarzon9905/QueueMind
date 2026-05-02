using QueueMind.API.Models;

namespace QueueMind.API.Patterns.Observer
{
    public class NotificationService : IObserver
    {
        public void Update(Turn turn)
        {
            Console.WriteLine($"Notificando turno {turn.id_turn}");
        }
    }
}
