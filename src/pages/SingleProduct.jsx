import { useParams } from "react-router";
import { getSingleProduct } from "../utils/getSingleProduct";
import { useContext, useEffect, useState } from "react";
import "./SingleProduct.css";
import { SingleProductImages } from "../components/SingleProductImages";
import { Button } from "../components/Button";
import { DataContext } from "../context/DataContext";
import { PropagateLoader } from "react-spinners";

export const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { productId } = useParams();
  const { dispatchData } = useContext(DataContext);

  const getAProduct = async () => {
    try {
      const product = await getSingleProduct(productId);
      setSingleProduct(product?.product);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(singleProduct);

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
            <div className="single-product-card-btn">
              {" "}
              <Button title="Add to Cart"></Button>
              <button className="single-product-card-wishlist-btn">
                <i class="fa-sharp fa-regular fa-heart single-product-heart-icon"></i>
                Wishlist
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
