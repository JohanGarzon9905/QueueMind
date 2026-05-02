using QueueMind.API.Models;
using System.Security.Cryptography;

namespace QueueMind.API.Patterns.Observer
{
    public interface IObserver
    {
        void Update(Turn turn);
    }
}
