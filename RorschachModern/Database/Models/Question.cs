using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RorschachModern.Database.Models
{
    public class Question
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public int SurveyID { get; set; }
        public int BlotCardID { get; set; }
        public string Prompt { get; set; }
        public string Type { get; set; }
        
        public virtual BlotCard BlotCard { get; set; }
        public virtual ICollection<Choice> Choices { get; set; }

        public virtual ICollection<Response> Responses { get; set; }
        public virtual Survey Survey { get; set; }

    }
}
