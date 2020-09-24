using HotChocolate.Types;
using RorschachModern.Database.Inputs;

namespace RorschachModern.GraphQL.Inputs
{
    public class InputParticipantType : InputObjectType<InputParticipant>
    {
        protected override void Configure(IInputObjectTypeDescriptor<InputParticipant> descriptor)
        {
            base.Configure(descriptor);
            descriptor.Field(x => x.Honest).Name("honest").Type<BooleanType>();
            descriptor.Field(x => x.FirstAttempt).Name("firstAttempt").Type<BooleanType>();
            descriptor.Field(x => x.Consent).Name("consent").Type<BooleanType>();
            descriptor.Field(x => x.Name).Name("name").Type<StringType>();
            descriptor.Field(x => x.AgeRange).Name("ageRange").Type<StringType>();
            descriptor.Field(x => x.Occupation).Name("occupation").Type<StringType>();
        }
    }
}
