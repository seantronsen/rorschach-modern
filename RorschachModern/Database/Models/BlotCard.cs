using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace RorschachModern.Database.Models
{
    public class BlotCard
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public byte[] Image { get; set; }
        public string CardNumeral { get; set; }
        public string FamiliarName { get; set; }
        public string CommonPerceptions { get; set; }

        public virtual ICollection<Question> Questions { get; set; }


    }
}
