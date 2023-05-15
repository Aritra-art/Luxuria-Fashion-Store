import { useContext } from "react";
import "./ProductList.css";
import { DataContext } from "../context/DataContext";
import { ProductCard } from "../components/ProductCard";
import { Filters } from "../components/Filters";
import { FilterContext } from "../context/FilterContext";

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
  console.log(filterState?.categoryFilter);
  return (
    <>
      <div className="productlist-container-layout">
        <div className="productlist-filter">
          <Filters />
        </div>

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
