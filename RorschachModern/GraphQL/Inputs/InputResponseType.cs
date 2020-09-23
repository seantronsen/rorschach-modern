using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HotChocolate.Types;
using RorschachModern.Database.Inputs;

namespace RorschachModern.GraphQL.Inputs
{
    public class InputResponseType : InputObjectType<InputResponse>
    {
        protected override void Configure(IInputObjectTypeDescriptor<InputResponse> descriptor)
        {
            base.Configure(descriptor);
            descriptor.Field(x => x.QuestionID).Name("questionId").Type<IdType>();
            descriptor.Field(x => x.Text).Name("text").Type<StringType>();
        }
    }
}
