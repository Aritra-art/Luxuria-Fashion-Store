import { useContext } from "react";
import "./Success.css";
import { DataContext } from "../context/DataContext";
import { Button } from "../components/Button";
import { useNavigate } from "react-router";

export const Success = () => {
  const { dataState } = useContext(DataContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="success-container-layout">
        <div className="success-container-card">
          <h2>Congratulations ! Your Order has been placed Successfully</h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/2048px-Eo_circle_green_white_checkmark.svg.png"
            width="80px"
          />
          <h3>Thank You for your Purchase.</h3>
          <p>
            Your Order ID is:{" "}
            {dataState?.orderHistory[dataState?.orderHistory?.length - 1].id}
          </p>
          <p>
            You will receive confirmation message on your registered phone
            number.
          </p>

          <div className="order-history-content">
            {dataState?.orderHistory[
              dataState?.orderHistory?.length - 1
            ]?.order?.map(({ id, title, qty, thumbnail }) => {
              return (
                <div className="product-order" key={id}>
                  <img src={thumbnail} width="130px" alt={title} />
                  <span className="product-order-content">
                    {title} X {qty}
                  </span>
                </div>
              );
            })}
          </div>

          <p>
            <span className="product-card-placeholder">Order Amount: </span>
            <b className="product-card-placeholder-amount">
              ₹
              {
                dataState?.orderHistory[dataState?.orderHistory?.length - 1]
                  .amount
              }
            </b>
          </p>
          <div onClick={() => navigate("/products")}>
            <Button title="Continue Shopping" />
          </div>
        </div>
      </div>
    </>
  );
};
