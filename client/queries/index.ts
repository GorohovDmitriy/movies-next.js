import { gql } from "@apollo/client";

export const TRENDING_MOVIES = gql`
  query Query {
    trendingMovies {
      results {
        id
        title
        poster_path
        original_title
      }
    }
  }
`;
export const TOP_MOVIES = gql`
  query Query {
    topMovies {
      results {
        id
        title
        poster_path
        original_title
      }
    }
  }
`;
