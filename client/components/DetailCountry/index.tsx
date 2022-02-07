import { FC } from "react";
import { IProductCountry } from "../../types/movies";

interface DetailCountryProps {
  country: IProductCountry;
}

const DetailCountry: FC<DetailCountryProps> = ({ country }) => (
  <>
    <li>{country.iso_3166_1}</li>
    <li>{country.name}</li>
  </>
);

export default DetailCountry;
