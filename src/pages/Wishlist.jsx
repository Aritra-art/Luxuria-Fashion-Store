import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "./Wishlist.css";
import { ProductCard } from "../components/ProductCard";

export const Wishlist = () => {
  const { dataState } = useContext(DataContext);

  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>
      {dataState?.wishlist && <ProductCard data={dataState?.wishlist} />}
    </div>
  );
};
