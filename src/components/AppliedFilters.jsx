import { useContext } from "react";
import "./AppliedFilters.css";
import { FilterContext } from "../context/FilterContext";

export const AppliedFilters = ({ filterArr, type }) => {
  const { dispatchFilter } = useContext(FilterContext);
  return (
    <div style={{ marginBottom: "20px" }}>
      {filterArr &&
        filterArr?.length > 0 &&
        filterArr?.map((filter) => {
          return (
            <span className="applied-category-filter" key={filter}>
              {filter}
              <span
                style={{ padding: "0px 4px", fontWeight: "bold" }}
                onClick={() =>
                  dispatchFilter({
                    type: type,
                    payload: filter,
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
