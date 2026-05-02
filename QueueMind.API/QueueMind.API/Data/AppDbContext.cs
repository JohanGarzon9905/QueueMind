using Microsoft.EntityFrameworkCore;
using QueueMind.API.Models;

namespace QueueMind.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Service> Services { get; set; }
        public DbSet<Turn> Turns { get; set; }
    }
}
