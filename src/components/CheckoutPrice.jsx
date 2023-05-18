import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "./CheckoutPrice.css";
import { discountedAmount, totalCartPrice } from "../pages/Cart";
import { Button } from "./Button";

const totalPriceWithoutDiscount = (dataState) =>
  dataState?.cart?.reduce((acc, { price, qty }) => acc + price * qty, 0);

export const CheckoutPrice = () => {
  const { dataState } = useContext(DataContext);
  return (
    <>
      <div className="checkout-container">
        <div className="card ">
          <h3 className="checkout__heading ">Order Details</h3>
          <hr />
          <p className="checkout__item">
            Item <span className="checkout__qty">Qty</span>
          </p>
          {dataState?.cart &&
            dataState?.cart?.map((item) => {
              const { id, title, qty } = item;
              return (
                <div key={id}>
                  <p className="checkout__item">
                    <b>{title}</b>{" "}
                    <span className="checkout__qty">
                      <b>{qty}</b>
                    </span>
                  </p>
                </div>
              );
            })}
          <hr />
          <h3 className=" checkout__heading">Price Details</h3>
          <hr />
          <p className="checkout__item">
            Price{" "}
            <span className="checkout__price">
              ₹ {totalPriceWithoutDiscount(dataState)}
            </span>
          </p>
          <p className="checkout__item">
            Discount
            <span className="checkout__discount">
              -₹ {discountedAmount(dataState)}
            </span>
          </p>
          <p className="checkout__item">
            Delivery Charges <span className="checkout__discount">Free</span>
          </p>
          <p className="total__price">
            Total Amount{" "}
            <span className="checkout__price">
              ₹ {totalCartPrice(dataState)}
            </span>
          </p>
          <div className="place-order__btn">
            <Button title="Place Order" />
          </div>
        </div>
      </div>
    </>
  );
};
