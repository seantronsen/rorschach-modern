using HotChocolate.Types;
using RorschachModern.GraphQL.Entities;

namespace RorschachModern.GraphQL.Schema
{
    public class RorschachQueryType : ObjectType<RorschachQuery>
    {
        protected override void Configure(IObjectTypeDescriptor<RorschachQuery> descriptor)
        {
            base.Configure(descriptor);


            descriptor.Field(x => x.GetBlotCards(default))
                .Type<ListType<BlotCardType>>();
            descriptor.Field(x => x.GetBlotCard(default, default))
                .Argument("id", a => a.Type<NonNullType<IdType>>())
                .Name("blotCardById")
                .Type<BlotCardType>();



            descriptor.Field(x => x.GetParticipants(default))
                .Type<ListType<ParticipantType>>();
            descriptor.Field(x => x.GetParticipant(default, default))
                .Argument("id", a => a.Type<NonNullType<IdType>>())
                .Name("participantById")
                .Type<ParticipantType>();




            descriptor.Field(x => x.GetSurveys(default))
                .Type<ListType<SurveyType>>();
            descriptor.Field(x => x.GetSurvey(default, default))
                .Argument("id", a => a.Type<NonNullType<IdType>>())
                .Name("surveyById")
                .Type<SurveyType>();




            descriptor.Field(x => x.GetChoices(default))
                .Type<ListType<ChoiceType>>();
            descriptor.Field(x => x.GetChoice(default, default))
                .Argument("id", a => a.Type<NonNullType<IdType>>())
                .Name("choiceById")
                .Type<ChoiceType>();




            descriptor.Field(x => x.GetQuestions(default))
                .Type<ListType<QuestionType>>();
            descriptor.Field(x => x.GetQuestion( default, default))
                .Argument("id", a => a.Type<NonNullType<IdType>>())
                .Name("questionById")
                .Type<QuestionType>();




            descriptor.Field(x => x.GetResponses(default))
                .Type<ListType<ResponseType>>();
            descriptor.Field(x => x.GetResponse(default, default))
                .Argument("id", a => a.Type<NonNullType<IdType>>())
                .Name("responseById")
                .Type<ResponseType>();

        }
    }





}
