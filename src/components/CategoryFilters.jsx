import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { CheckboxCard } from "./CheckboxCard";

export const CategoryFilters = () => {
  const { dataState } = useContext(DataContext);

  const categories =
    dataState?.categories &&
    dataState?.categories?.reduce(
      (acc, { categoryName }) =>
        acc.includes(categoryName) ? acc : [...acc, categoryName],
      []
    );
  return <>{categories && <CheckboxCard data={categories} />}</>;
};
