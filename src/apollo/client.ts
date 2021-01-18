import { ApolloClient, HttpLink } from "@apollo/client";
import { cache } from "./cache";

export const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: "http://localhost:4000",
  }),
});
