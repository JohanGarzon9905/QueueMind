namespace QueueMind.API.Patterns.Strategy
{
    public class PriorityAssignment : IAssignmentStrategy
    {
        public int Assign(List<int> operators)
        {
            return operators.First();
        }
    }
}
