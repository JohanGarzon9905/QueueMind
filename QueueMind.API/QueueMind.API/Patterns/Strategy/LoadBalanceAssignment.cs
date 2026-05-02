namespace QueueMind.API.Patterns.Strategy
{
    public class LoadBalanceAssignment : IAssignmentStrategy
    {
        public int Assign(List<int> operators)
        {
            return operators.Last();
        }
    }
}
