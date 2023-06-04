import { useContext } from "react";
import { BrandFilters } from "./BrandFilters";
import { CategoryFilters } from "./CategoryFilters";
import "./Filters.css";
import { PriceFilters } from "./PriceFilters";
import { RatingFilters } from "./RatingFilters";
import { SizeFilters } from "./SizeFilters";
import { TypeFilters } from "./TypeFilters";
import { FilterContext } from "../context/FilterContext";
import { DataContext } from "../context/DataContext";

export const Filters = () => {
  const { filterState, dispatchFilter } = useContext(FilterContext);
  const { dataState } = useContext(DataContext);
  const priceArr =
    dataState?.products &&
    dataState?.products?.reduce((acc, { discountPercentage, price }) => {
      const actualPrice = Number(
        price - Math.round((discountPercentage / 100) * price)
      );
      return [...acc, Number(actualPrice)];
    }, []);
  const maxPrice = Number.isInteger(Math.max(...priceArr))
    ? Math.max(...priceArr)
    : 0;
  const minPrice = Number.isInteger(Math.min(...priceArr))
    ? Math.min(...priceArr)
    : 0;

  return (
    <div className="filter-container">
      <div className="filter-nav">
        <p className="filter-header">Filters</p>
        <button
          className="filter-clear-btn"
          onClick={() =>
            dispatchFilter({ type: "CLEAR_ALL_FILTERS", payload: "" })
          }
        >
          Clear
        </button>
      </div>
      <div className="filter-content">
        <p className="price-slider-header">Price</p>
        <input
          type="range"
          className="price-slider"
          max={maxPrice}
          min={minPrice}
          value={filterState?.priceRange}
          onChange={(e) =>
            dispatchFilter({
              type: "SET_PRICE_RANGE",
              payload: e.target.value,
            })
          }
        />
        <div className="price-slider-content">
          <div>{minPrice}</div>
          <div>{maxPrice}</div>
        </div>

        <p className="price-slider-header">Categories</p>
        <CategoryFilters />
        <p className="price-slider-header">Types</p>
        <TypeFilters />
        <p className="price-slider-header">Sizes</p>
        <SizeFilters />
        <p className="price-slider-header">Brands</p>
        <BrandFilters />
        <p className="price-slider-header">Rating</p>
        <RatingFilters />
        <p className="price-slider-header">Sort by Price</p>
        <PriceFilters />
      </div>
    </div>
  );
};
