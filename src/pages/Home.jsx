import { useContext, useEffect } from "react";
import { BestSellerSection } from "../components/BestSellerSection";
import { GenderSection } from "../components/GenderSection";
import { ImageSlider } from "../components/ImageSlider";
import { NewArrivalSection } from "../components/NewArrivalSection";
import { DataContext } from "../context/DataContext";
import { FilterContext } from "../context/FilterContext";
import { TopBrands } from "../components/TopBrands";

export const Home = () => {
  const { dispatchData } = useContext(DataContext);
  const { dispatchFilter } = useContext(FilterContext);
  useEffect(() => {
    dispatchData({
      type: "SET_SHOWSEARCH_FALSE",
      payload: false,
    });
    dispatchFilter({
      type: "CLEAR_ALL_FILTERS",
      payload: "",
    });
  }, []);
  return (
    <>
      <ImageSlider />
      <GenderSection />
      <TopBrands />
      <NewArrivalSection />
      <BestSellerSection />
    </>
  );
};
