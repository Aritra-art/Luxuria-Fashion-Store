import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { CheckboxCard } from "./CheckboxCard";
import { FilterContext } from "../context/FilterContext";

export const SizeFilters = () => {
  const { dataState } = useContext(DataContext);
  const { filterState, dispatchFilter } = useContext(FilterContext);

  const sizeArr =
    dataState?.products &&
    dataState?.products?.reduce(
      (acc, { size }) => (acc.includes(size) ? acc : [...acc, size]),
      []
    );

  return (
    <>
      {sizeArr &&
        sizeArr.map((size) => {
          return (
            <div key={size} style={{ padding: "4px" }}>
              <label>
                <input
                  type="checkbox"
                  checked={filterState?.sizeFilter?.includes(size)}
                  onChange={(e) =>
                    dispatchFilter({
                      type: "SET_SIZE_FILTER",
                      payload: size,
                    })
                  }
                />
                {size}
              </label>
            </div>
          );
        })}
    </>
  );
};
