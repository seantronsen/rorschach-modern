using HotChocolate.Types;
using RorschachModern.Database.Inputs;
using RorschachModern.GraphQL.Entities;

namespace RorschachModern.GraphQL.Inputs
{
    public class InputParticipantSubmissionType : InputObjectType<InputParticipantSubmission> 
    {
        protected override void Configure(IInputObjectTypeDescriptor<InputParticipantSubmission> descriptor)
        {
            base.Configure(descriptor);
            descriptor.Field(x => x.ID)
                .Name("id")
                .Type<IntType>();
            descriptor.Field(x => x.Responses)
                .Name("responses")
                .Type<ListType<InputResponseType>>();
                // .Type<ListType<InputResponseType>>();
        }
    }
}


// may need a generic specifieer