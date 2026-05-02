using QueueMind.API.Models;

namespace QueueMind.API.Patterns.Observer
{
    public class DisplayBoard : IObserver
    {
        public void Update(Turn turn)
        {
            Console.WriteLine($"Mostrar turno {turn.id_turn}");
        }
    }
}
