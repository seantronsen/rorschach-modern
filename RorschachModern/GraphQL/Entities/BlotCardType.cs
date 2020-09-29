using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HotChocolate;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;
using RorschachModern.Static;
using RorschachModern.Database;
using RorschachModern.Database.Models;

namespace RorschachModern.GraphQL.Entities

{
    public class BlotCardType : ObjectType<BlotCard>
    {

        protected override void Configure(IObjectTypeDescriptor<BlotCard> descriptor)
        {
            base.Configure(descriptor);

            descriptor.Field(b => b.ID).Name("id").Type<IdType>();
            descriptor.Field("image").Type<StringType>().Resolver(ctx => ResolveImage(ctx.Parent<BlotCard>()));
            descriptor.Field(b => b.CardNumeral).Name("cardNumeral").Type<StringType>();
            descriptor.Field(b => b.FamiliarName).Name("familiarName").Type<StringType>();
            descriptor.Field(b => b.CommonPerceptions).Name("commonPerceptions").Type<StringType>();
            descriptor.Field<BlotCardType>(b => ResolveQuestions(default, default)).Name("questions").Type<ListType<QuestionType>>();



        }




        public string ResolveImage( BlotCard blotCard)
        {
            return Utils.ImageByteArrayToBase64String(blotCard.Image);
        }

        public async Task<IReadOnlyList<Question>> ResolveQuestions([Parent] BlotCard blotCard, [Service] RorschachContext rorschachContext)
        {
            return await rorschachContext.Questions.Where(q => q.BlotCardID == blotCard.ID).OrderByDescending(x => x.Type).ToListAsync();
        }








    }
}
