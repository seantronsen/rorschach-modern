using System.Linq;
using System.Threading.Tasks;
using HotChocolate;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;
using RorschachModern.Database;
using RorschachModern.Database.Models;

namespace RorschachModern.GraphQL.Entities
{
    public class ResponseType : ObjectType<Response>
    {
        protected override void Configure(IObjectTypeDescriptor<Response> descriptor)
        {
            base.Configure(descriptor);


            descriptor.Field(x => x.ID).Name("id").Type<IdType>();
            descriptor.Field(x => x.ParticipantID).Name("participantId").Ignore();
            descriptor.Field(x => x.QuestionID).Name("questionId").Ignore();
            descriptor.Field(x => x.Text).Name("text").Type<StringType>();
            descriptor.Field<ResponseType>(x => ResolveParticipantAsync(default, default)).Name("participant").Type<ParticipantType>();
            descriptor.Field<ResponseType>(x => ResolveQuestionAsync(default, default)).Name("question").Type<QuestionType>();
        }


        public async Task<Participant> ResolveParticipantAsync( [Parent] Response response, [Service] RorschachContext rorschachContext )
        {
            return await rorschachContext.Participants.Where(x => x.ID == response.ParticipantID).FirstAsync();
        }


        public async Task<Question> ResolveQuestionAsync( [Parent] Response response, [Service] RorschachContext rorschachContext )
        {
            return await rorschachContext.Questions.Where(x => x.ID == response.QuestionID).FirstAsync();
        }



    }






}
