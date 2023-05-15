import { useContext } from "react";
import "./ProductList.css";
import { DataContext } from "../context/DataContext";
import { ProductCard } from "../components/ProductCard";
import { Filters } from "../components/Filters";
import { FilterContext } from "../context/FilterContext";
import { PropagateLoader } from "react-spinners";

export const ProductList = () => {
  const { dataState } = useContext(DataContext);
  const { filterState } = useContext(FilterContext);
  let filteredArr = dataState?.products && dataState?.products;
  filteredArr = filteredArr.filter(
    ({ discountPercentage, price }) =>
      Number(price - Math.round((discountPercentage / 100) * price)) <=
      Number(filterState?.priceRange)
  );

  if (filterState?.typeFilter?.length > 0) {
    filteredArr = filteredArr.filter(({ type }) =>
      filterState?.typeFilter?.includes(type)
    );
  }
  if (filterState?.categoryFilter?.length > 0) {
    filteredArr = filteredArr.filter(({ category }) =>
      filterState?.categoryFilter?.includes(category)
    );
  }
  if (filterState?.sizeFilter?.length > 0) {
    filteredArr = filteredArr.filter(({ size }) =>
      filterState?.sizeFilter?.includes(size)
    );
  }
  if (filterState?.brandFilter?.length > 0) {
    filteredArr = filteredArr.filter(({ brand }) =>
      filterState?.brandFilter?.includes(brand)
    );
  }
  if (filterState?.ratingFilter?.length > 0) {
    filteredArr = filteredArr.filter(
      ({ rating }) => Number(rating) >= Number(filterState?.ratingFilter)
    );
  }
  if (filterState?.sortPriceFilter?.length > 0) {
    if (filterState?.sortPriceFilter === "lth") {
      filteredArr = [...filteredArr].sort(
        (a, b) =>
          a?.price -
          Math.round((a?.discountPercentage / 100) * a?.price) -
          b?.price -
          Math.round((b?.discountPercentage / 100) * b?.price)
      );
    } else if (filterState?.sortPriceFilter === "htl") {
      filteredArr = [...filteredArr].sort(
        (a, b) =>
          b?.price -
          Math.round((b?.discountPercentage / 100) * b?.price) -
          a?.price -
          Math.round((a?.discountPercentage / 100) * a?.price)
      );
    }
  }
  return (
    <>
      <div className="productlist-container-layout">
        {dataState?.isLoading && (
          <div style={{ paddingTop: "200px", paddingBottom: "50px" }}>
            <PropagateLoader
              cssOverride={{
                left: "50%",
                position: "absolute",
              }}
            />
          </div>
        )}

        {!dataState?.isLoading && (
          <div className="productlist-filter">
            <Filters />
          </div>
        )}

        <div className="productlist-container">
          <h1 className="productlist-header">
            All Products
            <small className="productlist-length">[{filteredArr.length}]</small>
          </h1>
          <div className="productlist-products">
            {dataState?.products && <ProductCard data={filteredArr} />}
          </div>
        </div>
      </div>
    </>
  );
};
