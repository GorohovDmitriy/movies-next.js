import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query getMovies {
        data {
            results {
                video
            backdrop_path
            first_air_date
            genre_ids
            id
            media_type
            }
        }
    
  }
`;
