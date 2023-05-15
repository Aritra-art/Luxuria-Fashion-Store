import { createContext, useReducer } from "react";
import { filterReducer } from "../reducer/FilterReducer";
export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filterState, dispatchFilter] = useReducer(filterReducer, {
    priceRange: 10000,
    categoryFilter: [],
    typeFilter: [],
  });
  console.log(filterState.categoryFilter);
  const value = { filterState, dispatchFilter };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
