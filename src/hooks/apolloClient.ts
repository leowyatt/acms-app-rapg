import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://127.0.0.1:6010/graphql",
  credentials: "include",
  cache: new InMemoryCache(),
});

export default client;
