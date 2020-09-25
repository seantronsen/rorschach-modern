using System.Linq;
using System.Threading.Tasks;
using HotChocolate;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;
using RorschachModern.Database;
using RorschachModern.Database.Models;

namespace RorschachModern.GraphQL.Entities
{
    public class ChoiceType : ObjectType<Choice>
    {
        protected override void Configure(IObjectTypeDescriptor<Choice> descriptor)
        {
            base.Configure(descriptor);

            descriptor.Field(x => x.ID).Name("id").Type<IdType>();
            descriptor.Field(x => x.QuestionID).Ignore().Name("questionId");
            descriptor.Field(x => x.Text).Name("text").Type<StringType>();
            descriptor.Field(x => x.HrScore).Name("hrScore").Type<IntType>();
            descriptor.Field<ChoiceType>(x => ResolveQuestionAsync(default, default)).Name("question").Type<QuestionType>();
        }

        public async Task<Question> ResolveQuestionAsync( [Parent] Choice choice, [Service] RorschachContext rorschachContext )
        {
            return await rorschachContext.Questions.Where(x => x.ID == choice.QuestionID).FirstAsync();
        }
    }
}
