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
            descriptor.Field<QuestionType>(x => ResolveBlotCardAsync(default, default)).Name("blotCard").Type<BlotCardType>();
            descriptor.Field<QuestionType>(x => ResolveSurveyAsync(default, default)).Name("survey").Type<SurveyType>();
            descriptor.Field<QuestionType>(b => ResolveChoicesAsync(default, default)).Name("choices").Type<ListType<ChoiceType>>();
            descriptor.Field<QuestionType>(x => ResolveResponsesAsync(default, default)).Name("responses").Type<ListType<ResponseType>>();

        }



        public async Task<BlotCard> ResolveBlotCardAsync( [Parent] Question question, [Service] RorschachContext rorschachContext )
        {
            return await rorschachContext.BlotCards.Where(x => x.ID== question.BlotCardID). FirstAsync();
        }
        public async Task<Survey> ResolveSurveyAsync( [Parent] Question question, [Service] RorschachContext rorschachContext )
        {
            return await rorschachContext.Surveys.Where(x => x.ID == question.SurveyID).FirstAsync();
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
