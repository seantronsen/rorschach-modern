using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HotChocolate;
using Microsoft.EntityFrameworkCore;
using RorschachModern.Database;
using RorschachModern.Database.Models;

namespace RorschachModern.GraphQL.Schema
{
    public class RorschachQuery
    {
        public async Task<IReadOnlyList<BlotCard>> GetBlotCards([Service] RorschachContext rorschachContext)
        {
            return await rorschachContext.
                BlotCards
                .OrderBy(x => x.ID)
                .ToListAsync();
        }
        public BlotCard GetBlotCard([Service] RorschachContext rorschachContext, int ID) => rorschachContext.BlotCards.First(x => x.ID == ID);
        public async Task<IReadOnlyList<Participant>> GetParticipants( [Service] RorschachContext rorschachContext )
        {
            return await rorschachContext.
                Participants
                .OrderBy(x => x.ID)
                .ToListAsync();
        }



        public Participant GetParticipant( [Service] RorschachContext rorschachContext, int ID ) => rorschachContext.Participants.First(x => x.ID == ID);




        public async Task<IReadOnlyList<Question>> GetQuestions( [Service] RorschachContext rorschachContext )
        {
            return await rorschachContext.
                Questions
                .OrderBy(x => x.ID)
                .ToListAsync();
        }


        public Question GetQuestion( [Service] RorschachContext rorschachContext, int ID ) => rorschachContext.Questions.First(x => x.ID == ID);







        public async Task<IReadOnlyList<Choice>> GetChoices( [Service] RorschachContext rorschachContext )
        {
            return await rorschachContext.
                Choices
                .OrderBy(x => x.ID)
                .ToListAsync();
        }


        public Choice GetChoice( [Service] RorschachContext rorschachContext, int ID ) => rorschachContext.Choices.First(x => x.ID == ID);







        public async Task<IReadOnlyList<Survey>> GetSurveys( [Service] RorschachContext rorschachContext )
        {
            return await rorschachContext.
                Surveys
                .OrderBy(x => x.ID)
                .ToListAsync();
        }


        public Survey GetSurvey ( [Service] RorschachContext rorschachContext, int ID ) => rorschachContext.Surveys.First(x => x.ID == ID);







        public async Task<IReadOnlyList<Response>> GetResponses( [Service] RorschachContext rorschachContext )
        {
            return await rorschachContext.
                Responses
                .OrderBy(x => x.ID)
                .ToListAsync();
        }


        public Response GetResponse( [Service] RorschachContext rorschachContext, int ID ) => rorschachContext.Responses.First(x => x.ID == ID);










    }
}
