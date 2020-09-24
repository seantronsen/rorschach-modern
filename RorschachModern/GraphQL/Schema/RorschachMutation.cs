using System;
using System.Linq;
using System.Threading.Tasks;
using HotChocolate;
using HotChocolate.Resolvers;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using RorschachModern.Database;
using RorschachModern.Database.Inputs;
using RorschachModern.Database.Models;
using RorschachModern.Static;

namespace RorschachModern.GraphQL.Schema
{
    public class RorschachMutation
    {
        // Note that only the necessary mutations will be created as a preventative measure for the web application
        // Given that there is no need for user's to be able to input new cards, choices, questions, etc. 
        // the only inputs that will be available are for the insertion of new participants as well as the insertion of their respective responses
        // Note that participants that have already taken the exam and mention this explicitly will be denied and that participants that have taken the test 
        // on a device with an IP already in the system will be put on a timed wait-list (15 minutes)

        public async Task<Participant> CreateParticipant( [Service] RorschachContext rorschachContext,
            [Service] IResolverContext context, [Service] IHttpContextAccessor clientHttpContext
            )
        {
            InputParticipant input = context.Argument<InputParticipant>("participant");
            var participant = new Participant()
            {
                Honest = input.Honest,
                FirstAttempt = input.FirstAttempt,
                Consent = input.Consent,
                Name = string.IsNullOrEmpty(input.Name) ? "ANONYMOUS" : input.Name.ToUpper(),
                AgeRange = input.AgeRange,
                Occupation = input.Occupation,
                StartTime = DateTime.UtcNow,
                EndTime = null,
                IpAddress = clientHttpContext.HttpContext.Connection.RemoteIpAddress.ToString()
            };
            await rorschachContext.Participants.AddAsync(participant);
            await rorschachContext.SaveChangesAsync();
            return participant;
        }

        public async Task<Participant> CreateParticipantSubmission( [Service] RorschachContext rorschachContext,
            [Service] IResolverContext resolverContext)
        {
            InputParticipantSubmission input =
                resolverContext.Argument<InputParticipantSubmission>("participantSubmission");
            if (input == null) throw new Exception("Error: Participant submission object was null. Data cannot be processed as a result.");


            Participant participant = await rorschachContext.Participants.Where(x => x.ID == input.ID).FirstOrDefaultAsync(x => x == null);
            if (participant == null) throw new Exception("Error: Participant identified in the submission could not be found within the data source. ");
            if (input.Responses.Count != RorschachSurveyProperties.GetTotalQuestions()) throw new Exception($"Error: An incorrect number of responses were submitted for processed. " +
                $"The correct number to use is {RorschachSurveyProperties.GetTotalQuestions()}.");


            participant.Responses = input.Responses;
            await rorschachContext.SaveChangesAsync();
            return participant;
        }
    }
}
