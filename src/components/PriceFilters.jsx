import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

export const PriceFilters = () => {
  const { filterState, dispatchFilter } = useContext(FilterContext);
  const priceFilterStyle = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  };

  const priceLabelStyle = {
    margin: "4px 0px",
  };
  const sortArr = [
    { labelName: "Low-to-high", value: "lth" },
    { labelName: "High-to-Low", value: "htl" },
  ];
  return (
    <div style={priceFilterStyle}>
      {sortArr.map(({ labelName, value }) => (
        <label style={priceLabelStyle} key={value}>
          <input
            name="pricefilter"
            type="radio"
            value={value}
            checked={filterState?.sortPriceFilter === value}
            onChange={(e) =>
              dispatchFilter({
                type: "SET_SORT_PRICE",
                payload: e.target.value,
              })
            }
          />
          {labelName}
        </label>
      ))}
    </div>
  );
};
