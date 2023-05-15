import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "./BestSellerSection.css";
import { ProductCard } from "./ProductCard";

export const BestSellerSection = () => {
  const { dataState } = useContext(DataContext);
  const bestSellerArr =
    dataState?.products &&
    dataState?.products
      ?.filter(({ type }) => type.toLowerCase() === "best seller")
      ?.slice(0, 5);
  return (
    <>
      <h1 className="bestseller-header">
        {dataState?.types && dataState?.types[1]?.type}
      </h1>
      <div className="bestseller-container">
        {bestSellerArr && (
          <ProductCard
            data={bestSellerArr}
            fromHomePage
            typeSelection="Best Seller"
          />
        )}
      </div>
    </>
  );
};
