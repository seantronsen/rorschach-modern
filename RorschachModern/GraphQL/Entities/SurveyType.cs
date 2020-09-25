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
    public class SurveyType : ObjectType<Survey>
    {
        protected override void Configure( IObjectTypeDescriptor<Survey> descriptor )
        {
            base.Configure(descriptor);

            descriptor.Field(x => x.ID).Name("id").Type<IdType>();
            descriptor.Field(x => x.Name).Type<StringType>();
            descriptor.Field(x => x.Description).Type<StringType>();
            descriptor.Field(x => x.Purpose).Type<StringType>();
            descriptor.Field<SurveyType>(x => ResolveQuestions(default, default)).Name("questions").Type<ListType<QuestionType>>();

        }

        public async Task<IReadOnlyList<Question>> ResolveQuestions( [Parent] Survey survey, [Service] RorschachContext rorschachContext )
        {
            return await rorschachContext.Questions.Where(x => x.SurveyID == survey.ID).ToListAsync();
        }
    }
}
