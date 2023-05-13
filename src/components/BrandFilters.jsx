import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { CheckboxCard } from "./CheckboxCard";

export const BrandFilters = () => {
  const { dataState } = useContext(DataContext);

  const brandArr =
    dataState?.products &&
    dataState?.products
      ?.reduce(
        (acc, { brand }) => (acc.includes(brand) ? acc : [...acc, brand]),
        []
      )
      .sort();

  return <>{brandArr && <CheckboxCard data={brandArr} />}</>;
};
