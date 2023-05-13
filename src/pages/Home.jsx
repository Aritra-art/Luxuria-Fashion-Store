import { BestSellerSection } from "../components/BestSellerSection";
import { GenderSection } from "../components/GenderSection";
import { ImageSlider } from "../components/ImageSlider";
import { NewArrivalSection } from "../components/NewArrivalSection";

export const Home = () => {
  return (
    <>
      <ImageSlider />
      <GenderSection />
      <NewArrivalSection />
      <BestSellerSection />
    </>
  );
};
