using QueueMind.API.Models;

namespace QueueMind.API.Patterns.State
{
    public class InAttentionState : ITurnState
    {
        public string HandleNext(Turn turn) => "finished";
        public string HandleCancel(Turn turn) => "cancelled";
    }
}
