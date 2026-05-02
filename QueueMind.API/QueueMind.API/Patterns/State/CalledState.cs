using QueueMind.API.Models;

namespace QueueMind.API.Patterns.State
{
    public class CalledState : ITurnState
    {
        public string HandleNext(Turn turn) => "in_attention";
        public string HandleCancel(Turn turn) => "cancelled";
    }
}
