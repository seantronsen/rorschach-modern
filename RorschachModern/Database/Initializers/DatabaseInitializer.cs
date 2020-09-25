using System;
using System.Collections.Generic;
using System.IO;
using Microsoft.EntityFrameworkCore;
using RorschachModern.Database.Models;

namespace RorschachModern.Database.Initializers
{
    public static class DatabaseInitializer
    {
        public static async void Initialize()
        {
            await using var rorschachContext = new RorschachContext();
            await rorschachContext.Database.EnsureDeletedAsync();
            await rorschachContext.Database.EnsureCreatedAsync();
            if (await rorschachContext.BlotCards.AnyAsync()) return;

            var fileNames = Directory.GetFiles(@"Static\Images\", "*.jpeg", SearchOption.AllDirectories);
            var counter = 1;
            foreach (var path in fileNames)
            {
                Console.WriteLine(path);
                var holderCard = new BlotCard()
                {
                    CardNumeral = BlotCardInitializer.GetCardNumeral(path),
                    CommonPerceptions = BlotCardInitializer.GetCommonPerceptions(path),
                    FamiliarName = BlotCardInitializer.GetCardFamiliarName(path),
                    Image = Static.Utils.ImageFileToByteArray(path),
                    OrderNumber = counter
                };
                await rorschachContext.BlotCards.AddAsync(holderCard);
                await rorschachContext.SaveChangesAsync();
                counter++;
            }

            List<BlotCard> blotCards = await rorschachContext.BlotCards.ToListAsync();

            string multipleChoice = "Please one option from the list below that best describes the ink blot that appeared. ";
            string openEnded =
                "In your own words, please provide a description of the ink blot that appeared in the window. Before you begin, understand that there is no right or wrong perception.";
            List<Question> questions = new List<Question>() {
                new Question () {
                Type = "TEXT",
                BlotCard = blotCards.Find (x => x.OrderNumber == 1),
                Prompt = openEnded,

                },
                new Question () {
                Type = "SELECTION",
                BlotCard = blotCards.Find (x => x.OrderNumber == 1),
                Choices = new List<Choice> () {
                new Choice () { Text = " An army or navy emblem", HrScore = 3 },
                new Choice () { Text = " Crumbling cliffs", HrScore = 9 },
                new Choice () { Text = " A bat", HrScore = 2 },
                new Choice () { Text = " Nothing at all", HrScore = 10 },
                new Choice () { Text = " Two people", HrScore = 1 },
                new Choice () { Text = " A pelvis", HrScore = 3 },
                new Choice () { Text = " An X-ray picture", HrScore = 7 },
                new Choice () { Text = " Pincers of a crab", HrScore = 4 },
                new Choice () { Text = " A dirty mess", HrScore = 9 },
                new Choice () { Text = " Part of my body", HrScore = 6 },
                },
                Prompt = multipleChoice,
                },

                new Question () {
                Type = "TEXT",
                BlotCard = blotCards.Find (x => x.OrderNumber == 2),
                Prompt = openEnded,

                },

                new Question () {
                Type = "SELECTION",
                BlotCard = blotCards.Find (x => x.OrderNumber == 2),
                Choices = new List<Choice> () {
                new Choice () { Text = "A bug somebody stepped on", HrScore = 8 },
                new Choice () { Text = "Nothing at all", HrScore = 10 },
                new Choice () { Text = "Two scottie dogs", HrScore = 2 },
                new Choice () { Text = "Little faces on the sides", HrScore = 4 },
                new Choice () { Text = "A bloody spinal column", HrScore = 6 },
                new Choice () { Text = "A white top", HrScore = 5 },
                new Choice () { Text = "A bursting bomb", HrScore = 8 },
                new Choice () { Text = "Two elephants", HrScore = 2 },
                new Choice () { Text = "Two clowns", HrScore = 1 },
                new Choice () { Text = "Black and red ink", HrScore = 9 },

                },
                Prompt = multipleChoice,
                },

                new Question () {
                Type = "TEXT",
                BlotCard = blotCards.Find (x => x.OrderNumber == 3),
                Prompt = openEnded,

                },

                //card 3 mc

                new Question () {
                Type = "SELECTION",
                BlotCard = blotCards.Find (x => x.OrderNumber == 3),
                Choices = new List<Choice> () {
                new Choice () { Text = "Two birds fighting", HrScore = 2 },
                new Choice () { Text = "Meat in a butcher shop", HrScore = 8 },
                new Choice () { Text = "Two men pulling something apart", HrScore = 1 },
                new Choice () { Text = "Part of my body", HrScore = 6 },
                new Choice () { Text = "Just colored blots", HrScore = 9 },
                new Choice () { Text = "A colored butterfly", HrScore = 3 },
                new Choice () { Text = "Spots of blood and paint", HrScore = 8 },
                new Choice () { Text = "Monkeys hanging by their tails", HrScore = 2 },
                new Choice () { Text = "A red bow-tie", HrScore = 3 },
                new Choice () { Text = "Nothing at all", HrScore = 10 },

                },
                Prompt = multipleChoice,
                },

                new Question () {
                Type = "TEXT",
                BlotCard = blotCards.Find (x => x.OrderNumber == 4),
                Prompt = openEnded,

                },

                new Question () {
                Type = "SELECTION",
                BlotCard = blotCards.Find (x => x.OrderNumber == 4),
                Choices = new List<Choice> () {
                new Choice () { Text = "Head of animal", HrScore = 4 },
                new Choice () { Text = "Lungs and chest", HrScore = 6 },
                new Choice () { Text = "A nasty, dirty mess", HrScore = 9 },
                new Choice () { Text = "A pair of boots", HrScore = 4 },
                new Choice () { Text = "A burnt mass", HrScore = 9 },
                new Choice () { Text = "Nothing at all", HrScore = 10 },
                new Choice () { Text = "A giant in a fur coat", HrScore = 1 },
                new Choice () { Text = "An animal skin", HrScore = 3 },
                new Choice () { Text = "A big gorilla", HrScore = 2 },
                new Choice () { Text = "An X-ray picture", HrScore = 7 },

                },
                Prompt = multipleChoice,
                },

                new Question () {
                Type = "TEXT",
                BlotCard = blotCards.Find (x => x.OrderNumber == 5),
                Prompt = openEnded,

                },

                new Question () {
                Type = "SELECTION",
                BlotCard = blotCards.Find (x => x.OrderNumber == 5),
                Choices = new List<Choice> () {
                new Choice () { Text = "A bird's beak", HrScore = 4 },
                new Choice () { Text = "Something squashed", HrScore = 9 },
                new Choice () { Text = "A ballet dancer", HrScore = 1 },
                new Choice () { Text = "Nothing at all", HrScore = 10 },
                new Choice () { Text = "A map", HrScore = 7 },
                new Choice () { Text = "Sugar tongs", HrScore = 4 },
                new Choice () { Text = "A moth", HrScore = 2 },
                new Choice () { Text = "Shoulders", HrScore = 6 },
                new Choice () { Text = "Smoke", HrScore = 7 },
                new Choice () { Text = "A rabbit's head", HrScore = 4 },

                },
                Prompt = multipleChoice,
                },

                new Question () {
                Type = "TEXT",
                BlotCard = blotCards.Find (x => x.OrderNumber == 6),
                Prompt = openEnded,

                },

                new Question () {
                Type = "SELECTION",
                BlotCard = blotCards.Find (x => x.OrderNumber == 6),
                Choices = new List<Choice> () {
                new Choice () { Text = "Two kings' heads crowns", HrScore = 3 },
                new Choice () { Text = "An x-ray picture", HrScore = 7 },
                new Choice () { Text = "Sexual organs", HrScore = 6 },
                new Choice () { Text = "A totem pole", HrScore = 3 },
                new Choice () { Text = "A fur rug", HrScore = 3 },
                new Choice () { Text = "Mud and water", HrScore = 9 },
                new Choice () { Text = "A polished post", HrScore = 4 },
                new Choice () { Text = "Nothing at all", HrScore = 10 },
                new Choice () { Text = "A turtle", HrScore = 2 },
                new Choice () { Text = "A landslide", HrScore = 9 },

                },
                Prompt = multipleChoice,
                },

                new Question () {
                Type = "TEXT",
                BlotCard = blotCards.Find (x => x.OrderNumber == 7),
                Prompt = openEnded,

                },

                new Question () {
                Type = "SELECTION",
                BlotCard = blotCards.Find (x => x.OrderNumber == 7),
                Choices = new List<Choice> () {
                new Choice () { Text = "Smoke or clouds", HrScore = 7 },
                new Choice () { Text = "Two women talking", HrScore = 1 },
                new Choice () { Text = "Part of my body", HrScore = 6 },
                new Choice () { Text = "Animals or animal heads", HrScore = 2 },
                new Choice () { Text = "Nothing at all", HrScore = 10 },
                new Choice () { Text = "A white chandelier", HrScore = 5 },
                new Choice () { Text = "Burning fragments", HrScore = 9 },
                new Choice () { Text = "Lambs's tail", HrScore = 4 },
                new Choice () { Text = "An X-ray picture", HrScore = 7 },
                new Choice () { Text = "Bookends", HrScore = 3 },

                },
                Prompt = multipleChoice,
                },

                new Question () {
                Type = "TEXT",
                BlotCard = blotCards.Find (x => x.OrderNumber == 8),
                Prompt = openEnded,

                },

                new Question () {
                Type = "SELECTION",
                BlotCard = blotCards.Find (x => x.OrderNumber == 8),
                Choices = new List<Choice> () {
                new Choice () { Text = "An orange or pink butterfly", HrScore = 3 },
                new Choice () { Text = "Shoulders, lungs, and stomach", HrScore = 6 },
                new Choice () { Text = "Nothing at all", HrScore = 10 },
                new Choice () { Text = "Just colors", HrScore = 9 },
                new Choice () { Text = "An emblem", HrScore = 3 },
                new Choice () { Text = "A pretty flower", HrScore = 3 },
                new Choice () { Text = "Heaven and Hell", HrScore = 8 },
                new Choice () { Text = "Two blue cushions", HrScore = 3 },
                new Choice () { Text = "Two bears climbing", HrScore = 2 },
                new Choice () { Text = "Colored Clouds", HrScore = 7 },

                },
                Prompt = multipleChoice,
                },

                new Question () {
                Type = "TEXT",
                BlotCard = blotCards.Find (x => x.OrderNumber == 9),
                Prompt = openEnded,

                },

                new Question () {
                Type = "SELECTION",
                BlotCard = blotCards.Find (x => x.OrderNumber == 9),
                Choices = new List<Choice> () {
                new Choice () { Text = "Sea horses", HrScore = 3 },
                new Choice () { Text = "Just split paint", HrScore = 9 },
                new Choice () { Text = "Flowers", HrScore = 3 },
                new Choice () { Text = "Parts of the body", HrScore = 6 },
                new Choice () { Text = "Smoke, flames, or an explosion", HrScore = 8 },
                new Choice () { Text = "Deer or horns of a deer", HrScore = 2 },
                new Choice () { Text = "Nothing at all", HrScore = 10 },
                new Choice () { Text = "Two witches ", HrScore = 1 },
                new Choice () { Text = "Bloody clouds", HrScore = 8 },
                new Choice () { Text = "A candle", HrScore = 3 },

                },
                Prompt = multipleChoice,
                },

                new Question () {
                Type = "TEXT",
                BlotCard = blotCards.Find (x => x.OrderNumber == 10),
                Prompt = openEnded,

                },

                new Question () {
                Type = "SELECTION",
                BlotCard = blotCards.Find (x => x.OrderNumber == 10),
                Choices = new List<Choice> () {
                new Choice () { Text = "Two people", HrScore = 1 },
                new Choice () { Text = "Split paint", HrScore = 8 },
                new Choice () { Text = "A Chinese print", HrScore = 3 },
                new Choice () { Text = "An x-ray picture", HrScore = 7 },
                new Choice () { Text = "Just colored ink spots", HrScore = 9 },
                new Choice () { Text = "Spider, caterpillars, crabs and insects", HrScore = 2 },
                new Choice () { Text = "Parts of my insides", HrScore = 6 },
                new Choice () { Text = "A colored chart or map", HrScore = 3 },
                new Choice () { Text = "Nothing at all", HrScore = 10 },
                new Choice () { Text = "A flower garden", HrScore = 3 },

                },
                Prompt = multipleChoice,
                },

            };

            var holderSurvey = new Survey()
            {
                Name = "Hybrid Rorschach Test",
                Purpose = "The purpose of the test is to collect data from the sample in the form of a survey for future analysis.",
                Description = "Add general data here later for render calls",
                Questions = questions
            };
            await rorschachContext.Surveys.AddAsync(holderSurvey);
            await rorschachContext.SaveChangesAsync();
            Console.WriteLine("Completed");
        }

    }
}