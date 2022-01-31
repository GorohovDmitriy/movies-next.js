import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}&language=ru-RU`,
    cache: new InMemoryCache()
})

export default client