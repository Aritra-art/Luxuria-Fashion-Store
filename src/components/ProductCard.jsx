import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import "./ProductCard.css";
import { FilterContext } from "../context/FilterContext";
import { useContext } from "react";
import { AuthContext } from "../context/Auth/AuthContext";
import {
  addToCartHandler,
  isItemPresentInCart,
} from "../utils/addToCartHandler";
import { DataContext } from "../context/DataContext";
import {
  addToWishlistHandler,
  isItemPresentInWishlist,
} from "../utils/addToWishlistHandler";
import { removeFromWishlistHandler } from "../utils/removeFromWishlistHandler";

export const ProductCard = ({ data, fromHomePage, typeSelection }) => {
  const { dispatchFilter } = useContext(FilterContext);
  const { authState } = useContext(AuthContext);
  const { dataState, dispatchData } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <>
      {data.length > 0 &&
        data?.map((item) => {
          const {
            id,
            title,
            price,
            discountPercentage,
            rating,
            category,
            size,
            thumbnail,
            type,
          } = item;
          return (
            <div className="card-container" key={id}>
              <NavLink
                to={`/products`}
                onClick={() => {
                  if (fromHomePage) {
                    dispatchFilter({
                      type: "CLEAR_ALL_FILTERS",
                      payload: "",
                    });
                    dispatchFilter({
                      type: "SET_TYPE_FILTER",
                      payload: typeSelection,
                    });
                  }
                }}
              >
                <img src={thumbnail} alt={title} width="300px" height="280px" />
              </NavLink>
              <div className="card-content">
                {type.toLowerCase() === "best seller" && (
                  <div className="card-trending-tag">Trending</div>
                )}
                <div
                  className="heart-icon"
                  onClick={() => {
                    if (!authState?.isLoggedin) {
                      alert("please login ");
                    } else {
                      if (!isItemPresentInWishlist(dataState, id)) {
                        addToWishlistHandler(dispatchData, item);
                      } else {
                        removeFromWishlistHandler(dispatchData, id);
                      }
                    }
                  }}
                >
                  {isItemPresentInWishlist(dataState, id) ? (
                    <i class="fas fa-heart solid-heart"></i>
                  ) : (
                    <i className="fa-sharp fa-regular fa-heart"></i>
                  )}
                </div>
                <div className="card-size">{size}</div>
                <div className="card-title-div">
                  <NavLink to={`/products/${id}`} className="card-title">
                    {title}
                  </NavLink>
                </div>

                <div className="card-price">
                  <span className="new-price">
                    {price - Math.round((discountPercentage / 100) * price)}
                  </span>
                  <span className="discount-percentage">
                    {discountPercentage}
                  </span>
                  <span className="original-price">{price}</span>
                </div>
                <div className="card-category">{category}</div>
                <div className="card-rating">
                  {rating}
                  <i class="fas fa-star rating-star"></i>
                </div>
              </div>
              <div
                className="card-btn"
                onClick={() => {
                  if (!authState?.isLoggedin) {
                    alert("please login to continue");
                  } else {
                    if (!isItemPresentInCart(dataState, id)) {
                      addToCartHandler(item, dispatchData);
                    } else {
                      navigate("/cart");
                    }
                  }
                }}
              >
                <Button
                  title={
                    isItemPresentInCart(dataState, id)
                      ? "Go to Cart"
                      : "Add to Cart"
                  }
                />
              </div>
            </div>
          );
        })}
    </>
  );
};
