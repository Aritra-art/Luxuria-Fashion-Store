import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const PriceRange = () => {
  const { dataState } = useContext(DataContext);
  const priceArr =
    dataState?.products &&
    dataState?.products?.reduce((acc, { discountPercentage, price }) => {
      const actualPrice = Number(
        price - Math.round((discountPercentage / 100) * price)
      );
      return [...acc, Number(actualPrice)];
    }, []);
  return { maxPrice: Math.max(...priceArr), minPrice: Math.min(...priceArr) };
};
