import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  }),
  cache: new InMemoryCache(),
});
