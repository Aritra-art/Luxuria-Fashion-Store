import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "./Wishlist.css";
import { ProductCard } from "../components/ProductCard";

export const Wishlist = () => {
  const { dataState } = useContext(DataContext);

  return (
    <div>
      <h2 className="wishlist-header">My Wishlist</h2>
      <div className="wishlist-container">
        {dataState?.wishlist && <ProductCard data={dataState?.wishlist} />}
      </div>
    </div>
  );
};
