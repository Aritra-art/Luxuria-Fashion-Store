import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { CheckboxCard } from "./CheckboxCard";

export const SizeFilters = () => {
  const { dataState } = useContext(DataContext);

  const sizeArr =
    dataState?.products &&
    dataState?.products?.reduce(
      (acc, { size }) => (acc.includes(size) ? acc : [...acc, size]),
      []
    );

  return <>{sizeArr && <CheckboxCard data={sizeArr} />}</>;
};
