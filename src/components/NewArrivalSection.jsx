import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "./NewArrivalSection.css";
import { ProductCard } from "./ProductCard";
import { PropagateLoader } from "react-spinners";

export const NewArrivalSection = () => {
  const { dataState } = useContext(DataContext);
  const newArrivalArr =
    dataState?.products &&
    dataState?.products
      ?.filter(({ type }) => type.toLowerCase() === "new arrival")
      ?.slice(0, 4);
  return (
    <>
      <h1 className="newarrival-header margin-top">
        {dataState?.types && dataState?.types[0]?.type}
      </h1>
      {dataState?.isLoading && (
        <PropagateLoader cssOverride={{ position: "absolute", right: "50%" }} />
      )}
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
