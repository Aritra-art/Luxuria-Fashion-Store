import { useContext } from "react";
import "./ProductList.css";
import { DataContext } from "../context/DataContext";
import { ProductCard } from "../components/ProductCard";
import { Filters } from "../components/Filters";
import { FilterContext } from "../context/FilterContext";
import { PropagateLoader } from "react-spinners";
import { filteredArray } from "../utils/filteredArray";

export const ProductList = () => {
  const { dataState } = useContext(DataContext);
  const { filterState } = useContext(FilterContext);
  const filteredArr = filteredArray(dataState, filterState);

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
          {filteredArr.length > 0 ? (
            <div className="productlist-products">
              {dataState?.products && <ProductCard data={filteredArr} />}
            </div>
          ) : (
            <div style={{ textAlign: "center" }}>
              <b>No Products Found</b>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
