import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

export const RatingFilters = () => {
  const { filterState, dispatchFilter } = useContext(FilterContext);
  const ratingStyle = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  };

  const ratingLabelStyle = {
    margin: "4px 0px",
  };
  const ratingArr = [4, 3, 2, 1];
  return (
    <div
      style={ratingStyle}
      value={filterState.ratingFilter}
      onChange={(e) => {
        dispatchFilter({
          type: "SET_RATING_FILTER",
          payload: e.target.value,
        });
      }}
    >
      {ratingArr.map((rating) => {
        return (
          <label style={ratingLabelStyle} key={rating}>
            <input type="radio" name="ratingfilter" value={rating} />
            {rating} {rating === 1 ? "star" : "stars"} and above
          </label>
        );
      })}
    </div>
  );
};
