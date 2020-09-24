using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RorschachModern.Database.Models
{
    public class Survey
    {


        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Purpose { get; set; }


        public ICollection<Question> Questions { get; set; }
    }
}
