using QueueMind.API.Models;

namespace QueueMind.API.Patterns.Observer
{
    public class TurnManager
    {
        private List<IObserver> _observers = new();

        public void Attach(IObserver observer)
        {
            _observers.Add(observer);
        }

        public void Notify(Turn turn)
        {
            foreach (var obs in _observers)
            {
                obs.Update(turn);
            }
        }
    }
}
