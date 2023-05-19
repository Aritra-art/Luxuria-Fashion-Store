import { useParams } from "react-router";
import { getSingleProduct } from "../utils/getSingleProduct";
import { useContext, useEffect, useState } from "react";
import "./SingleProduct.css";
import { SingleProductImages } from "../components/SingleProductImages";
import { Button } from "../components/Button";
import { PropagateLoader } from "react-spinners";
import { AuthContext } from "../context/Auth/AuthContext";
import {
  addToCartHandler,
  isItemPresentInCart,
} from "../utils/addToCartHandler";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import {
  addToWishlistHandler,
  isItemPresentInWishlist,
} from "../utils/addToWishlistHandler";
import { removeFromWishlistHandler } from "../utils/removeFromWishlistHandler";
import { ToastContainer } from "react-toastify";
import { failToastMsg, successToastMsg } from "../components/ProductCard";

export const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { productId } = useParams();
  const { authState } = useContext(AuthContext);
  const { dataState, dispatchData } = useContext(DataContext);
  const navigate = useNavigate();

  const getAProduct = async () => {
    try {
      const product = await getSingleProduct(productId);
      setSingleProduct(product?.product);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAProduct();
  }, [productId]);

  return (
    <>
      {Object.keys(singleProduct).length === 0 && (
        <div style={{ padding: "100px 0px 100px 0px" }}>
          <PropagateLoader
            cssOverride={{
              position: "absolute",
              right: "50%",
            }}
          />
        </div>
      )}
      {Object.keys(singleProduct).length !== 0 && (
        <div className="single-product-container">
          <div className="single-product-images">
            {singleProduct?.images && (
              <SingleProductImages data={singleProduct?.images} />
            )}
          </div>
          <div className="single-product-content">
            <h3 className="single-product-title">{singleProduct?.title}</h3>
            <div className="single-product-description">
              {singleProduct?.description}
            </div>
            <div className="single-product-rating">
              {singleProduct?.rating}
              <i class="fas fa-star rating-star"></i>
            </div>
            <div className="card-price single-product-price">
              <span className="new-price">
                {singleProduct?.price -
                  Math.round(
                    (singleProduct?.discountPercentage / 100) *
                      singleProduct?.price
                  )}
              </span>
              <span className="discount-percentage">
                {singleProduct?.discountPercentage}
              </span>
              <span className="original-price">{singleProduct?.price}</span>
            </div>
            <div className="single-product-availability">
              <b>Availability</b> -{" "}
              {singleProduct?.stock ? "In Stock" : "out of Stock"}
            </div>
            <div className="single-product-availability">
              <b>Size</b> - {singleProduct?.size}
            </div>
            <div>
              <i class="fas fa-tag single-product-tag"></i>
              {singleProduct?.category}
            </div>
            <div>
              <i class="fas fa-tag single-product-tag"></i>
              {singleProduct?.brand}
            </div>
            <div>
              <i class="fas fa-tag single-product-tag"></i>
              {singleProduct?.type}
            </div>
            <div className="single-product-card-buttons">
              <div
                className="single-product-card-btn"
                onClick={() => {
                  if (!authState?.isLoggedin) {
                    failToastMsg("please login to continue");
                    setTimeout(() => {
                      navigate("/login");
                    }, 2500);
                  } else {
                    if (!isItemPresentInCart(dataState, singleProduct?.id)) {
                      addToCartHandler(singleProduct, dispatchData);
                      successToastMsg("Product Added to Cart");
                    } else {
                      navigate("/cart");
                    }
                  }
                }}
              >
                <Button
                  title={
                    isItemPresentInCart(dataState, singleProduct?.id)
                      ? "Go to Cart"
                      : "Add to Cart"
                  }
                  disabled={!singleProduct?.stock ? true : false}
                ></Button>
              </div>
              <button
                className="single-product-card-wishlist-btn"
                onClick={() => {
                  if (!authState?.isLoggedin) {
                    alert("please login to continue");
                  } else {
                    if (isItemPresentInWishlist(dataState, singleProduct?.id)) {
                      successToastMsg("Product Removed from Wishlist");
                      removeFromWishlistHandler(
                        dispatchData,
                        singleProduct?.id
                      );
                    } else {
                      successToastMsg("Product Added to Wishlist");
                      addToWishlistHandler(dispatchData, singleProduct);
                    }
                  }
                }}
              >
                {isItemPresentInWishlist(dataState, singleProduct?.id) ? (
                  <span>
                    <i class=" fas fa-heart single-product-heart-icon"></i>
                    Wishlisted
                  </span>
                ) : (
                  <span>
                    <i className="fa-sharp fa-regular fa-heart single-product-heart-icon"></i>
                    Wishlist
                  </span>
                )}
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
