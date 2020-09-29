using HotChocolate;

namespace RorschachModern.GraphQL.Misc
{
    public class GraphQLErrorFilter : IErrorFilter
    {
        public IError OnError(IError error)
        {
            return error.WithMessage(error.Exception.Message );
        }
    }
}
