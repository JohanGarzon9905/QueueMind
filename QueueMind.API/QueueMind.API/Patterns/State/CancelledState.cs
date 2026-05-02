using QueueMind.API.Models;

namespace QueueMind.API.Patterns.State
{
    public class CancelledState : ITurnState
    {
        public string HandleNext(Turn turn)
        {
            throw new Exception("El turno ya fue cancelado");
        }

        public string HandleCancel(Turn turn)
        {
            return "cancelled";
        }
    }
}
