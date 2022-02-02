export interface IMovieTranding {
  adult?: boolean;
  releas_date?: string;
  title?: string;
  video?: boolean;
  backdrop_path?: string;
  first_air_date?: string;
  id?: number;
  media_type?: string;
  name?: string;
  original_title?: string;
  origin_country?: Array<string>;
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  vote_average?: number;
  vote_count?: number;
}

export interface IMovie {
  id: number;
  overview: string | null;
  original_title: string | null;
  title: string | null;
  backdrop_path: string;
  poster_path: string;
  vote_count: number | null;
  release_date: string;
}

export interface IMovies {
  results: IMovieTranding[];
}
