namespace QueueMind.API.Patterns.Strategy
{
    public class TurnAllocator
    {
        private readonly IAssignmentStrategy _strategy;

        public TurnAllocator(IAssignmentStrategy strategy)
        {
            _strategy = strategy;
        }
    }
}
