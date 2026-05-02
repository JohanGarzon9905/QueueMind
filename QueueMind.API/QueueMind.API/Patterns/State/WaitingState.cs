using QueueMind.API.Models;

namespace QueueMind.API.Patterns.State
{
    public class WaitingState : ITurnState
    {
        public string HandleNext(Turn turn) => "called";
        public string HandleCancel(Turn turn) => "cancelled";
    }
}
