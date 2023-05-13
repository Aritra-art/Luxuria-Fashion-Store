import { BrandFilters } from "./BrandFilters";
import { CategoryFilters } from "./CategoryFilters";
import "./Filters.css";
import { PriceFilters } from "./PriceFilters";
import { RatingFilters } from "./RatingFilters";
import { SizeFilters } from "./SizeFilters";
import { TypeFilters } from "./TypeFilters";

export const Filters = () => {
  return (
    <div className="filter-container">
      <div className="filter-nav">
        <p className="filter-header">Filters</p>
        <button className="filter-clear-btn">Clear</button>
      </div>
      <div className="filter-content">
        <p className="price-slider-header">Price</p>
        <input type="range" className="price-slider" />
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
