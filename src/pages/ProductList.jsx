import { useContext } from "react";
import "./ProductList.css";
import { DataContext } from "../context/DataContext";
import { ProductCard } from "../components/ProductCard";
import { Filters } from "../components/Filters";

export const ProductList = () => {
  const { dataState } = useContext(DataContext);
  return (
    <>
      <div className="productlist-container-layout">
        <div className="productlist-filter">
          <Filters />
        </div>

        <div className="productlist-container">
          <h1 className="productlist-header">All Products</h1>
          <div className="productlist-products">
            {dataState?.products && <ProductCard data={dataState?.products} />}
          </div>
        </div>
      </div>
    </>
  );
};
