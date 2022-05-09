using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RorschachModern.Database.Models;

namespace RorschachModern.Database
{
    public class RorschachContext : DbContext
    {
        public DbSet<BlotCard> BlotCards { get; set; }
        public DbSet<Response> Responses { get; set; }
        public DbSet<Participant> Participants { get; set; }
        public DbSet<Choice> Choices { get; set; }
        public DbSet<Survey> Surveys { get; set; }
        public DbSet<Question> Questions { get; set; }
        protected override void OnConfiguring( DbContextOptionsBuilder options )
        {
            /*
            Please note that this server is no longer active. Additionally, this project was developed early on in my programming carreer, so please 
            excuse the verbatim connection string (a bit of a security issue) that exists where ENV variables should have been used.
            -- Sean Tronsen
            */
            options.UseSqlServer("Server=tcp:tronsen-development.database.windows.net,1433;Initial Catalog=rorschach;Persist Security Info=False;" +
                                 "User ID=phantom_root;Password=Scheise125;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;");
        }
    }
}
