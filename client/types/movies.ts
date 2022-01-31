export interface IMovieTranding {
  adult?: boolean;
  releas_date?: string;
  title?: string;
  video?: boolean;
  backdrop_path?: string;
  first_air_date?: string;
  genre_ids?: Array<number>;
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

export interface IMovies {
  results: IMovieTranding[];
}
