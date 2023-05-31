import { useContext } from "react";
import "./AppliedFilters.css";
import { FilterContext } from "../context/FilterContext";

export const AppliedFilters = () => {
  const { filterState, dispatchFilter } = useContext(FilterContext);
  console.log(filterState?.categoryFilter);
  return (
    <div style={{ marginBottom: "20px" }}>
      {filterState?.categoryFilter &&
        filterState?.categoryFilter?.length > 0 &&
        filterState?.categoryFilter?.map((category) => {
          return (
            <span className="applied-category-filter">
              {category}
              <span
                style={{ padding: "0px 4px", fontWeight: "bold" }}
                onClick={() =>
                  dispatchFilter({
                    type: "SET_CATEGORY_FILTER",
                    payload: category,
                  })
                }
              >
                X
              </span>
            </span>
          );
        })}
    </div>
  );
};
