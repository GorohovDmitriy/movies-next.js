import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://movie-app-next.herokuapp.com/",
  cache: new InMemoryCache(),
});

export default client;
