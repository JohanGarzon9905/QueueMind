namespace QueueMind.API.Patterns.State
{
    public static class TurnStateFactory
    {
        public static ITurnState GetState(string status)
        {
            return status switch
            {
                "pending" => new WaitingState(),
                "called" => new CalledState(),
                "in_attention" => new InAttentionState(),
                "finished" => new FinishedState(),
                "cancelled" => new CancelledState(),
                _ => throw new Exception("Estado no válido")
            };
        }
    }
}
