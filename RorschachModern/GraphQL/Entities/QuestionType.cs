using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HotChocolate;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;
using RorschachModern.Database;
using RorschachModern.Database.Models;

namespace RorschachModern.GraphQL.Entities
{
    public class QuestionType : ObjectType<Question>
    {
        protected override void Configure( IObjectTypeDescriptor<Question> descriptor )
        {

            base.Configure(descriptor);

            descriptor.Field(x => x.ID).Name("id").Type<IdType>();
            descriptor.Field(x => x.SurveyID).Name("surveyId").Ignore();
            descriptor.Field(x => x.BlotCardID).Name("blotCardId").Ignore();
            descriptor.Field(x => x.Prompt).Name("prompt").Type<StringType>();
            descriptor.Field(x => x.Type).Name("type").Type<StringType>();
            descriptor.Field(x => x.BlotCard).Name("blotCard").Type<BlotCardType>();
            descriptor.Field(x => x.Survey).Name("survey").Type<SurveyType>();
            descriptor.Field(b => ResolveChoicesAsync(default, default))
                .Name("choices")
                .Type<ListType<ChoiceType>>();
            descriptor.Field(x => ResolveResponsesAsync(default, default))
                .Name("responses")
                .Type<ListType<ResponseType>>();

        }


        public async Task<IReadOnlyList<Response>> ResolveResponsesAsync( [Parent] Question question, [Service] RorschachContext rorschachContext )
        {
            return await rorschachContext.Responses.Where(x => x.QuestionID == question.ID).ToListAsync();
        }



        public async Task<IReadOnlyList<Choice>> ResolveChoicesAsync( [Parent] Question question, [Service] RorschachContext rorschachContext )
        {
            return await rorschachContext.Choices.Where(x => x.QuestionID == question.ID).ToListAsync();
        }
    }
}
