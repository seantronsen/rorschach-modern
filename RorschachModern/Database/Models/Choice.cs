using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RorschachModern.Database.Models
{
    public class Choice
    {

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public int QuestionID { get; set; }
        public string Text { get; set; }
        public virtual Question Question { get; set; }



    }
}
