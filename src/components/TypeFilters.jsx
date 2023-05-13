import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { CheckboxCard } from "./CheckboxCard";

export const TypeFilters = () => {
  const { dataState } = useContext(DataContext);

  const types =
    dataState?.types &&
    dataState?.types?.reduce(
      (acc, { type }) => (acc.includes(type) ? acc : [...acc, type]),
      []
    );
  return <>{types && <CheckboxCard data={types} />}</>;
};
