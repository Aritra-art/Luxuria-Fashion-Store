import { brandImgArr } from "../utils/brandImgArr";
import "./TopBrands.css";

export const TopBrands = () => {
  return (
    <>
      <h1 className="newarrival-header">Top Brands</h1>
      <div className="top-brands-section">
        {brandImgArr.map((url) => {
          return (
            <img
              src={url}
              key={url}
              alt="url"
              width="200px"
              className="brand-image-tile"
            />
          );
        })}
      </div>
    </>
  );
};
