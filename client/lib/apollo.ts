import { ApolloClient, InMemoryCache } from "@apollo/client";
import { request } from "../utils/request";

const client = new ApolloClient({
  uri: `https://api.themoviedb.org/3/${request.fetchTopNowPlaying}`,
  cache: new InMemoryCache(),
});

export default client;
