import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { FilterContext } from "../context/FilterContext";

export const CategoryFilters = () => {
  const { dataState } = useContext(DataContext);
  const { filterState, dispatchFilter } = useContext(FilterContext);

  const categories =
    dataState?.categories &&
    dataState?.categories?.reduce(
      (acc, { categoryName }) =>
        acc.includes(categoryName) ? acc : [...acc, categoryName],
      []
    );
  return (
    <>
      {categories &&
        categories?.map((category) => {
          return (
            <div key={category} style={{ padding: "4px" }}>
              <label>
                <input
                  type="checkbox"
                  checked={filterState?.categoryArr?.includes(category)}
                  onChange={() =>
                    dispatchFilter({
                      type: "SET_CATEGORY_FILTER",
                      payload: category,
                    })
                  }
                />
                {category}
              </label>
            </div>
          );
        })}
    </>
  );
};
