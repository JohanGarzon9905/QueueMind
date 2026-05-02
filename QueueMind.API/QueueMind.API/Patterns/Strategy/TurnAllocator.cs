namespace QueueMind.API.Patterns.Strategy
{
    public class TurnAllocator
    {
        private IAssignmentStrategy _strategy;

        public void SetStrategy(IAssignmentStrategy strategy)
        {
            _strategy = strategy;
        }

        public int Allocate(List<int> operators)
        {
            return _strategy.Assign(operators);
        }
    }
}
