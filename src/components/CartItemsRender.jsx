import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import "./CartItemsRender.css";
import { Button } from "./Button";
import { removeFromCartHandler } from "../utils/removeFromCartHandler";
import { handleQuantityChangeCart } from "../utils/handleQuantityChangeCart";
import {
  addToWishlistHandler,
  isItemPresentInWishlist,
} from "../utils/addToWishlistHandler";
import { useNavigate } from "react-router";
import { successToastMsg } from "./ProductCard";
import { DelModal } from "./DelModal";
import { initialDelModal } from "../utils/initialDelModal";
import { clearCart } from "../utils/clearCart";

export const CartItemsRender = () => {
  const { dataState, dispatchData } = useContext(DataContext);

  const [delModal, setDelModal] = useState(initialDelModal(dataState));
  const navigate = useNavigate();

  return (
    <div className="cart-items">
      <div
        onClick={() => {
          clearCart(dispatchData, dataState);
          successToastMsg("Cart Cleared");
        }}
      >
        {dataState?.cart && dataState?.cart?.length > 0 && (
          <Button title="Clear Cart" />
        )}
      </div>
      {dataState?.cart &&
        dataState?.cart?.map((cartItem) => {
          const {
            id,
            title,
            thumbnail,
            size,
            rating,
            category,
            brand,
            price,
            discountPercentage,
            qty,
          } = cartItem;

          return (
            <div className="cart-item" key={id}>
              <div
                className={delModal[id] && "del-modal-layout-container-overlay"}
              ></div>
              {delModal[id] && (
                <DelModal
                  id={id}
                  title={title}
                  setDelModal={setDelModal}
                  dispatchData={dispatchData}
                  dataState={dataState}
                />
              )}

              <div
                className="cart-item-image"
                onClick={() => navigate(`/products/${id}`)}
              >
                <img src={thumbnail} alt={title} width="230px" height="270px" />
              </div>

              <div className="cart-item-content">
                <h3>{title}</h3>
                <div className="card-price">
                  <span className="new-price">
                    {price - Math.round((discountPercentage / 100) * price)}
                  </span>
                  <span className="discount-percentage">
                    {discountPercentage}
                  </span>
                  <span className="original-price">{price}</span>
                </div>
                <div className="cart-item-size">
                  Size: <b>{size}</b>
                </div>
                <div className="cart-item-size">
                  Brand: <b>{brand}</b>
                </div>
                <span
                  onClick={() =>
                    handleQuantityChangeCart(dispatchData, id, "increment")
                  }
                >
                  <i className="fas fa-plus quantity-btn"></i>
                </span>

                <span
                  style={{
                    margin: "3px 12px 0px 10px",
                    backgroundColor: "whitesmoke",
                    fontSize: "1.1rem",
                  }}
                >
                  {qty}
                </span>
                <span
                  onClick={() => {
                    if (qty === 1) {
                      setDelModal((delModal) => ({ ...delModal, [id]: true }));
                    } else {
                      handleQuantityChangeCart(dispatchData, id, "decrement");
                    }
                  }}
                >
                  <i className="fas fa-minus quantity-btn"></i>
                </span>

                <div className="cart-item-btns">
                  <div
                    onClick={() => {
                      successToastMsg("Product Removed from Cart ");
                      removeFromCartHandler(dispatchData, id);
                    }}
                    className="cart-item-remove-btn"
                  >
                    <Button title="Remove from Cart" />
                  </div>
                  <div
                    className="cart-item-remove-btn"
                    onClick={() => {
                      if (isItemPresentInWishlist(dataState, id)) {
                        navigate("/wishlist");
                      } else {
                        addToWishlistHandler(dispatchData, cartItem);
                        successToastMsg("Product Added to Wishlist ");
                      }
                    }}
                  >
                    <Button
                      title={
                        isItemPresentInWishlist(dataState, id)
                          ? "Go to Wishlist"
                          : "Add to Wishlist"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
