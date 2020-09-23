using HotChocolate.Types;
using RorschachModern.GraphQL.Entities;
using RorschachModern.GraphQL.Inputs;

namespace RorschachModern.GraphQL.Schema
{
    public class RorschachMutationType: ObjectType<RorschachMutation>
    {
        protected override void Configure(IObjectTypeDescriptor<RorschachMutation> descriptor)
        {
            base.Configure(descriptor);

            descriptor.Field(x => x.CreateParticipant(default, default, default))
                .Argument("participant", x => x.Type<NonNullType<InputParticipantType>>())
                .Name("createParticipant")
                .Type<ParticipantType>();


            descriptor.Field(x => x.CreateParticipantSubmission(default, default))
                .Argument("participantSubmission", x => x.Type<NonNullType<InputParticipantSubmissionType>>())
                .Name("createParticipantSubmission")
                .Type<ParticipantType>();

        }
    }
}
