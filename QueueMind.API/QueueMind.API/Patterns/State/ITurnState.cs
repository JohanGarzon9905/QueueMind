using QueueMind.API.Models;

namespace QueueMind.API.Patterns.State
{
    public interface ITurnState
    {
        string HandleNext(Turn turn);
        string HandleCancel(Turn turn);
    }
}
