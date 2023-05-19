import "./GenderSection.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { FilterContext } from "../context/FilterContext";

export const GenderSection = () => {
  const { dataState } = useContext(DataContext);
  const { dispatchFilter } = useContext(FilterContext);
  return (
    <>
      <h1 className="gender-header">who are you shopping for ?</h1>
      <div className="gender-img-container">
        <div className="gender-img-container-inner">
          {dataState.categories &&
            dataState?.categories?.map(({ _id, categoryName, thumbnail }) => {
              return (
                <NavLink
                  className="gender-image-link"
                  to="/products"
                  key={_id}
                  onClick={() => {
                    dispatchFilter({
                      type: "SET_CATEGORY_FILTER",
                      payload: categoryName,
                    });
                  }}
                >
                  <img
                    alt={categoryName}
                    src={thumbnail}
                    className="gender-img"
                  />
                </NavLink>
              );
            })}
        </div>
        <div className="gender-tag-container">
          {dataState.categories &&
            dataState?.categories?.map(({ _id, categoryName }) => {
              return (
                <p key={_id} className="gender-tag-name">
                  {categoryName}
                </p>
              );
            })}
        </div>
      </div>
    </>
  );
};
