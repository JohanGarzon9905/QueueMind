using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QueueMind.API.Models
{
    [Table("user")]
    public class User
    {
        [Key]
        public int id_user { get; set; }
        public string name { get; set; }
        public string role { get; set; }
    }
}
