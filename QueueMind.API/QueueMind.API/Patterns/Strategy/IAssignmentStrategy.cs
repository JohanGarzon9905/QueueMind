namespace QueueMind.API.Patterns.Strategy
{
    public interface IAssignmentStrategy
    {
        int Assign(List<int> operators);
    }
}
