using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QueueMind.API.Models
{
    [Table("turn")]
    public class Turn
    {
        [Key]
        public int id_turn { get; set; }
        public int id_user { get; set; }
        public int id_service { get; set; }
        public string status { get; set; }
        public DateTime created_at { get; set; }
        public DateTime? called_at { get; set; }
        public DateTime? finished_at { get; set; }
    }
}
