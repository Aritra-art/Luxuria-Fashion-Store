import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "./CartItemsRender.css";
import { Button } from "./Button";
import { removeFromCartHandler } from "../utils/removeFromCartHandler";
import { handleQuantityChangeCart } from "../utils/handleQuantityChangeCart";

export const CartItemsRender = () => {
  const { dataState, dispatchData } = useContext(DataContext);
  return (
    <div className="cart-items">
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
              <div className="cart-item-image">
                <img src={thumbnail} alt={title} width="300px" height="280px" />
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
                  <i class="fas fa-plus quantity-btn"></i>
                </span>

                <span
                  style={{
                    margin: "3px 12px 0px 10px",
                    backgroundColor: "whitesmoke",
                    fontSize: "1.5rem",
                  }}
                >
                  {qty}
                </span>
                <span
                  onClick={() => {
                    if (qty === 1) {
                      removeFromCartHandler(dispatchData, id);
                    } else {
                      handleQuantityChangeCart(dispatchData, id, "decrement");
                    }
                  }}
                >
                  <i class="fas fa-minus quantity-btn"></i>
                </span>

                <div className="cart-item-btns">
                  <div
                    onClick={() => removeFromCartHandler(dispatchData, id)}
                    className="cart-item-remove-btn"
                  >
                    <Button title="Remove from Cart" />
                  </div>
                  <div className="cart-item-remove-btn">
                    <Button title="Add to Wishlist" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
