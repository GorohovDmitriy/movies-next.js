import { gql } from "@apollo/client";

export const TRENDING_MOVIES = gql`
  query Query {
    trendingMovies {
      results {
        poster_path
        title
        backdrop_path
        vote_count
        overview
        release_date
        id
        original_title
      }
      page
      total_pages
      total_results
    }
  }
`;
export const TOP_MOVIES = gql`
  query Query {
    topMovies {
      results {
        poster_path
        title
        backdrop_path
        vote_count
        overview
        release_date
        id
        original_title
      }
      page
      total_pages
      total_results
    }
  }
`;
export const NOW_PLAYING = gql`
  query Query {
    nowPlaying {
      results {
        id
        overview
        original_title
        title
        backdrop_path
        poster_path
        vote_count
        release_date
      }
      page
      total_pages
      total_results
    }
  }
`;
export const SEARCH_MOVIES = gql`
  query SearchMovies($title: String) {
    searchMovies(title: $title) {
      results {
        title
        original_title
      }
      page
      total_pages
      total_results
    }
  }
`;
