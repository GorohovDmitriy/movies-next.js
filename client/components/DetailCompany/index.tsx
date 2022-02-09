import { FC } from "react";
import { IProductCompany } from "../../types/movies";

interface DetailsCompanyProps {
  company: IProductCompany;
}

const DetailCompany: FC<DetailsCompanyProps> = ({ company }) => (
  <>
    <li>{company.name}</li>
    <li>{company.origin_country}</li>
  </>
);

export default DetailCompany;
