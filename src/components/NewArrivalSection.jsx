import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "./NewArrivalSection.css";
import { ProductCard } from "./ProductCard";

export const NewArrivalSection = () => {
  const { dataState } = useContext(DataContext);
  const newArrivalArr =
    dataState?.products &&
    dataState?.products
      ?.filter(({ type }) => type.toLowerCase() === "new arrival")
      ?.slice(0, 5);
  return (
    <>
      <h1 className="newarrival-header">
        {dataState?.types && dataState?.types[0]?.type}
      </h1>
      <div className="newarrival-container">
        {newArrivalArr && (
          <ProductCard
            data={newArrivalArr}
            fromHomePage
            typeSelection="New Arrival"
          />
        )}
      </div>
    </>
  );
};
