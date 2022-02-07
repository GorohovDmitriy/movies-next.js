import { FC } from "react";
import { IProductCompany } from "../../types/movies";

interface DetailsCompanyProps {
  company: IProductCompany;
}

const DetailCompany: FC<DetailsCompanyProps> = ({ company }) => (
  <>
    <li>{company.name}</li>
    <li>{company.origin_coutry}</li>
  </>
);

export default DetailCompany;
