import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

export const SortOptions = () => {
  const { filterState, dispatchFilter } = useContext(FilterContext);
  return (
    <>
      <select
        style={{
          padding: "3px 6px",
          letterSpacing: "1.5px",
          fontSize: "1rem",
          cursor: "pointer",
          outline: "none",
        }}
        value={filterState?.sortPriceFilter}
        onChange={(e) => {
          dispatchFilter({
            type: "SET_SORT_PRICE",
            payload: e.target.value,
          });
        }}
      >
        <option value="" disabled>
          Sort By Price
        </option>
        <option value="htl">High to Low</option>
        <option value="lth">Low to High</option>
      </select>
    </>
  );
};
