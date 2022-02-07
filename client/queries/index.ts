import { gql } from "@apollo/client";

export const TRENDING_MOVIES = gql`
  query Query($page: Int) {
    trendingMovies(page: $page) {
      page
      results {
        poster_path
        overview
        release_date
        id
        original_title
        original_language
        title
        backdrop_path
        popularity
        vote_count
        vote_average
      }
    }
  }
`;
export const TOP_MOVIES = gql`
  query Query($page: Int) {
    topMovies(page: $page) {
      page
      total_pages
      total_results
      results {
        poster_path
        overview
        release_date
        id
        original_title
        original_language
        title
        backdrop_path
        popularity
        vote_count
        vote_average
      }
    }
  }
`;
export const NOW_PLAYING = gql`
  query Query($page: Int) {
    nowPlaying(page: $page) {
      page
      total_pages
      total_results
      results {
        poster_path
        overview
        release_date
        id
        original_title
        original_language
        title
        backdrop_path
        popularity
        vote_count
        vote_average
      }
    }
  }
`;
export const SEARCH_MOVIES = gql`
  query Query($title: String!, $page: Int) {
    searchMovies(title: $title, page: $page) {
      page
      total_pages
      total_results
      results {
        poster_path
        overview
        release_date
        id
        original_title
        original_language
        title
        backdrop_path
        popularity
        vote_count
        vote_average
      }
    }
  }
`;

export const DETAIL_MOVIE = gql`
  query DetailsMovie($id: Int) {
    detailsMovie(id: $id) {
      backdrop_path
      budget
      genres {
        name
        id
      }
      homepage
      id
      original_language
      original_title
      overview
      poster_path
      production_companies {
        origin_country
        logo_path
        id
        name
      }
      production_countries {
        iso_3166_1
        name
      }
      release_date
      revenue
      runtime
      status
      tagline
      title
      video
      vote_count
      vote_average
      popularity
    }
  }
`;
