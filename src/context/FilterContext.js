import { createContext, useReducer } from "react";
import { filterReducer } from "../reducer/FilterReducer";
export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filterState, dispatchFilter] = useReducer(filterReducer, {
    priceRange: 10000,
    searchFilter: "",
    categoryFilter: [],
    typeFilter: [],
    sizeFilter: [],
    brandFilter: [],
    ratingFilter: "",
    sortPriceFilter: "",
  });
  console.log(filterState.searchFilter);
  const value = { filterState, dispatchFilter };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
