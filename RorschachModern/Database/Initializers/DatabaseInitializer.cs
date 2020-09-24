using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using RorschachModern.Database.Models;

namespace RorschachModern.Database.Initializers
{
    public static class DatabaseInitializer
    {
        public static async void Initialize( )
        {
            await using var rorschachContext = new RorschachContext();
            await rorschachContext.Database.EnsureDeletedAsync();
            await rorschachContext.Database.EnsureCreatedAsync();
            if (await rorschachContext.BlotCards.AnyAsync()) return;

            var fileNames = Directory.GetFiles(@"Static\Images\", "*.jpeg", SearchOption.AllDirectories);
            foreach (var path in fileNames)
            {
                Console.WriteLine(path);
                var holderCard = new BlotCard()
                {
                    CardNumeral = BlotCardInitializer.GetCardNumeral(path),
                    CommonPerceptions = BlotCardInitializer.GetCommonPerceptions(path),
                    FamiliarName = BlotCardInitializer.GetCardFamiliarName(path),
                    Image = Static.Utils.ImageFileToByteArray(path),
                };
                await rorschachContext.BlotCards.AddAsync(holderCard);
                await rorschachContext.SaveChangesAsync();
            }
            Console.WriteLine("Completed");
        }

    

    }
}
