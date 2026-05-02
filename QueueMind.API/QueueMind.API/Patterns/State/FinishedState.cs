using QueueMind.API.Models;

namespace QueueMind.API.Patterns.State
{
    public class FinishedState : ITurnState
    {
        public string HandleNext(Turn turn)
        {
            throw new Exception("El turno ya finalizó");
        }

        public string HandleCancel(Turn turn)
        {
            return "finished";
        }
    }
}
