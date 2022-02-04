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
  query Query($title: String!) {
    searchMovies(title: $title) {
      results {
        poster_path
        overview
        release_date
        id
        original_title
        original_language
        title
        backdrop_path
        vote_count
      }
    }
  }
`;

export const DETAIL_MOVIE = gql`
  query Query($id: Int) {
    detailsMovie(id: $id) {
      budget
      backdrop_path
      genres {
        id
        name
      }
      runtime
      revenue
      tagline
      status
      video
      title
      vote_count
      id
      original_language
      original_title
      overview
      poster_path
      homepage
      release_date
      production_countries {
        name
        iso_3166_1
      }
      production_companies {
        name
        logo_path
        id
        orogon_country
      }
    }
  }
`;
