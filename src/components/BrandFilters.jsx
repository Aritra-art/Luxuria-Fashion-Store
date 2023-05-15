import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { CheckboxCard } from "./CheckboxCard";
import { FilterContext } from "../context/FilterContext";

export const BrandFilters = () => {
  const { dataState } = useContext(DataContext);
  const { filterState, dispatchFilter } = useContext(FilterContext);

  const brandArr =
    dataState?.products &&
    dataState?.products
      ?.reduce(
        (acc, { brand }) => (acc.includes(brand) ? acc : [...acc, brand]),
        []
      )
      .sort();

  return (
    <>
      {brandArr &&
        brandArr.map((brand) => {
          return (
            <div key={brand} style={{ padding: "4px" }}>
              <label>
                <input
                  type="checkbox"
                  checked={filterState?.brandFilter?.includes(brand)}
                  onChange={(e) =>
                    dispatchFilter({
                      type: "SET_BRAND_FILTER",
                      payload: brand,
                    })
                  }
                />
                {brand}
              </label>
            </div>
          );
        })}
    </>
  );
};
