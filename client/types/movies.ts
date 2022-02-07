export interface IMovie {
  id: number;
  overview: string | null;
  original_title: string | null;
  title: string | null;
  backdrop_path: string;
  poster_path: string;
  vote_count: number | null;
  vote_average: number | null;
  popularity: number;
  release_date: string;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IProductCompany {
  name: string;
  id: number;
  logo_path: string | null;
  origin_coutry: string;
}

export interface IProductCountry {
  iso_3166_1: string;
  name: string;
}

export interface IDetails {
  backdrop_path: string | null;
  budget: number;
  genres: IGenre[];
  homepage: string | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string | null;
  poster_path: string | null;
  production_companies: IProductCompany[];
  production_countries: IProductCountry[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  status: string;
  tagline: string | null;
  title: string;
  vote_count: number;
  vote_average: number;
  popularity: number;
}

export interface IResponse {
  page?: number | undefined;
  results: IMovie[];
  total_pages?: number;
  total_results?: number;
}

export interface IMoviesHome {
  nowPlaying: IResponse;
}

export interface IMoviesPopular {
  trendingMovies: IResponse;
}

export interface IMoviesTop {
  topMovies: IResponse;
}

export interface IMovieSearch {
  searchMovies: IResponse;
}
