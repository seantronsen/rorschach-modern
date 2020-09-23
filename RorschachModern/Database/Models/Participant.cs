using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RorschachModern.Database.Models
{
    public class Participant
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public bool Honest { get; set; }
        public bool FirstAttempt { get; set; }
        public bool Consent { get; set; }
        public string Name { get; set; }
        public string AgeRange { get; set; }
        public string Occupation { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime? EndTime { get; set; }
        public string IpAddress { get; set; }


        public virtual ICollection<Response> Responses { get; set; }



    }
}
