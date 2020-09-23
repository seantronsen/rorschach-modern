using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using RorschachModern.Database;
using RorschachModern.Database.Models;

namespace RorschachModern.Services
{
    public class RandomService : IHostedService, IDisposable
    {

        private readonly ILogger<RandomService> _logger;
        private Timer _timer;


        public RandomService( ILogger<RandomService> logger )
        {
            _logger = logger;
        }

        public void Dispose()
        {
            using var db = new RorschachContext();
            foreach (var dbSurvey in db.Surveys)
            {
                db.Surveys.Remove(dbSurvey);
            }
            _timer.Dispose();
        }


        public Task StartAsync( CancellationToken cancellationToken )
        {
            _timer = new Timer(OverloadDatabase, null, 100, 100);
            return Task.CompletedTask;
        }

#pragma warning disable CS8632 // The annotation for nullable reference types should only be used in code within a '#nullable' annotations context.
        private static void OverloadDatabase( object? state )
#pragma warning restore CS8632 // The annotation for nullable reference types should only be used in code within a '#nullable' annotations context.
        {
            using var db = new RorschachContext();
            db.Add(new Survey()
            {
                Name = "The super awesome rorschach survey",
                Description = "this is a description ",
                Purpose = "Purposeful"
            });
            db.SaveChanges();
            Console.WriteLine("DB Entity Added.");

        }

        public Task StopAsync( CancellationToken cancellationToken )
        {
            _timer?.Dispose();
            return Task.CompletedTask;


        }




    }
}
