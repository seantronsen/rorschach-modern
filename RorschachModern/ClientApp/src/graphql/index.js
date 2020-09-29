import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const uri = "/graphql";
export const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});
