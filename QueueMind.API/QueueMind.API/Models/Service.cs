using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QueueMind.API.Models
{
    [Table("service")]
    public class Service
    {
        [Key]
        public int id_service { get; set; }
        public string name { get; set; }
        public int priority_level { get; set; }
    }
}
