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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successToastMsg = (msg) => {
  toast.success(msg, {
    className: "success-toast-message",
    theme: "dark",
    autoClose: 1500,
    closeOnClick: true,
  });
};

export const failToastMsg = (msg) => {
  toast.error(msg, {
    className: "success-toast-message",
    theme: "dark",
    autoClose: 1500,
    closeOnClick: true,
  });
};

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
            stock,
          } = item;
          return (
            <div className="card-container" key={id}>
              <NavLink
                to={fromHomePage ? `/products` : `/products/${id}`}
                onClick={() => {
                  if (fromHomePage) {
                    dispatchFilter({
                      type: "SET_TYPE_FILTER",
                      payload: typeSelection,
                    });
                  }
                }}
              >
                <img src={thumbnail} alt={title} width="220px" height="280px" />
              </NavLink>
              {!stock && (
                <div
                  className=""
                  onClick={() =>
                    navigate(fromHomePage ? "/products" : `/products/${id}`)
                  }
                >
                  <b className="out-of-stock">out of stock</b>
                </div>
              )}

              <div className="card-content">
                {type.toLowerCase() === "best seller" && (
                  <div className="card-trending-tag">Trending</div>
                )}
                <div
                  className="heart-icon"
                  onClick={() => {
                    if (!authState?.isLoggedin) {
                      navigate("/login");
                      failToastMsg("please login to continue");
                    } else {
                      if (!isItemPresentInWishlist(dataState, id)) {
                        successToastMsg("Product Added to Wishlist");
                        addToWishlistHandler(dispatchData, item);
                      } else {
                        successToastMsg("Product Removed from Wishlist");
                        removeFromWishlistHandler(dispatchData, id);
                      }
                    }
                  }}
                >
                  {isItemPresentInWishlist(dataState, id) ? (
                    <i className="fas fa-heart solid-heart"></i>
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
                  <span className="original-price">
                    <small>{price}</small>
                  </span>
                </div>
                <div className="card-category">{category}</div>
                <div className="card-rating">
                  {rating}
                  <i className="fas fa-star rating-star"></i>
                </div>
              </div>
              <div
                className="card-btn"
                onClick={() => {
                  if (!authState?.isLoggedin) {
                    failToastMsg("please login to continue");
                    navigate("/login");
                  } else {
                    if (!isItemPresentInCart(dataState, id)) {
                      successToastMsg("Product Added to Cart");
                      addToCartHandler(item, dispatchData);
                    } else {
                      navigate("/cart");
                    }
                  }
                }}
              >
                <Button
                  disabled={!stock ? true : false}
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
      {/* <ToastContainer /> */}
    </>
  );
};
