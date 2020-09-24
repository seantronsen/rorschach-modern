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
    public class ParticipantType : ObjectType<Participant>
    {
        protected override void Configure(IObjectTypeDescriptor<Participant> descriptor)
        {
            base.Configure(descriptor);
            descriptor.Field(x => x.ID).Name("id").Type<IdType>();
            descriptor.Field(x => x.Honest).Name("honest").Type<BooleanType>();
            descriptor.Field(x => x.FirstAttempt).Name("firstAttempt").Type<BooleanType>();
            descriptor.Field(x => x.Consent).Name("consent").Type<BooleanType>();
            descriptor.Field(x => x.Name).Name("name").Type<StringType>();
            descriptor.Field(x => x.AgeRange).Name("ageRange").Type<StringType>();
            descriptor.Field(x => x.Occupation).Name("occupation").Type<StringType>();
            descriptor.Field(x => x.StartTime).Name("startTime").Type<DateTimeType>();
            descriptor.Field(x => x.EndTime).Name("endTime").Type<DateTimeType>();
            descriptor.Field(x => x.IpAddress).Name("ipAddress").Type<StringType>();
            descriptor.Field(x => ResolveResponses(default, default))
                .Name("responses").Type<ListType<ResponseType>>();
        }

        public async Task<IReadOnlyList<Response>> ResolveResponses([Parent] Participant participant,
            [Service] RorschachContext rorschachContext)
        {
            return await rorschachContext.Responses
                .Where(x => x.ParticipantID == participant.ID)
                .ToListAsync();
        }
    }
}
