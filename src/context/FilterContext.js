import { createContext, useReducer } from "react";
import { filterReducer } from "../reducer/FilterReducer";
import { PriceRange } from "../utils/PriceRange";

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filterState, dispatchFilter] = useReducer(filterReducer, {
    priceRange: "",
  });
  console.log(filterState.priceRange);
  const value = { filterState, dispatchFilter };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
