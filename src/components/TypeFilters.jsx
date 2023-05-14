import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { CheckboxCard } from "./CheckboxCard";
import { FilterContext } from "../context/FilterContext";

export const TypeFilters = () => {
  const { dataState } = useContext(DataContext);
  const { filterState, dispatchFilter } = useContext(FilterContext);

  const types =
    dataState?.types &&
    dataState?.types?.reduce(
      (acc, { type }) => (acc.includes(type) ? acc : [...acc, type]),
      []
    );
  return (
    <>
      {types &&
        types?.map((type) => {
          return (
            <div key={type} style={{ padding: "4px" }}>
              <label>
                <input
                  type="checkbox"
                  checked={filterState?.typeFilter?.includes(type)}
                  onChange={(e) =>
                    dispatchFilter({
                      type: "SET_TYPE_FILTER",
                      payload: type,
                    })
                  }
                />
                {type}
              </label>
            </div>
          );
        })}
    </>
  );
};
