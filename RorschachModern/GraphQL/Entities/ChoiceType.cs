using HotChocolate.Types;
using RorschachModern.Database.Models;

namespace RorschachModern.GraphQL.Entities
{
    public class ChoiceType : ObjectType<Choice>
    {
        protected override void Configure(IObjectTypeDescriptor<Choice> descriptor)
        {
            base.Configure(descriptor);

            descriptor.Field(x => x.ID).Name("id").Type<IdType>();
            descriptor.Field(x => x.QuestionID).Name("questionId").Ignore();
            descriptor.Field(x => x.Text).Name("text").Type<StringType>();
            descriptor.Field(x => x.Text).Name("hrScore").Type<IntType>();
            descriptor.Field(x => x.Question).Name("question").Type<QuestionType>();
        }
    }
}
