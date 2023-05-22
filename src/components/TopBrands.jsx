import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { brandImgArr } from "../utils/brandImgArr";
import "./TopBrands.css";
import { useNavigate } from "react-router";

export const TopBrands = () => {
  const { dispatchFilter } = useContext(FilterContext);
  const navigate = useNavigate();
  return (
    <>
      <h1 className="newarrival-header">Top Brands</h1>
      <div className="top-brands-section">
        {brandImgArr.map(({ id, brand, url }) => {
          return (
            <img
              onClick={() => {
                dispatchFilter({ type: "SET_BRAND_FILTER", payload: brand });
                navigate("/products");
              }}
              src={url}
              key={id}
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
