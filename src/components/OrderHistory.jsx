import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "./OrderHistory.css";
import { AuthContext } from "../context/Auth/AuthContext";

export const OrderHistory = () => {
  const { dataState } = useContext(DataContext);
  const { authState } = useContext(AuthContext);

  const orderHistoryArr =
    dataState?.orderHistory &&
    authState?.userDetails &&
    dataState?.orderHistory?.filter(
      ({ user }) => user === authState?.userDetails?.email
    );

  const addressPlaceholder = {
    letterSpacing: "2px",
    marginRight: "5px",
    fontSize: "1.1rem",
  };
  if (orderHistoryArr.length === 0) {
    return <h2>No orders to display</h2>;
  } else {
    return (
      <div className="order-history-container">
        <ol style={{ padding: "0" }}>
          {orderHistoryArr &&
            orderHistoryArr.map(
              ({
                address,
                amount,
                id,
                order,
                orderDate,
                orderTime,
                paymentId,
              }) => {
                return (
                  <div className="order-history" key={id}>
                    <div>
                      <p>
                        <span className="order-placeholder">Order ID</span>
                        {id}
                      </p>
                      <p>
                        <span className="order-placeholder">Payment ID</span>
                        {paymentId}
                      </p>
                      <p>
                        <span className="order-placeholder">Order Date</span>
                        {orderDate}
                      </p>
                      <p>
                        <span className="order-placeholder">Order Time</span>
                        {orderTime}
                      </p>
                      <p>
                        <span className="order-placeholder">Order Amount</span>₹
                        {amount}
                      </p>
                      <div>
                        <h2 style={{ fontSize: "1.3rem" }}>
                          {address.userName}
                        </h2>
                        <p>
                          {address?.houseNumber}, {address.city},{" "}
                          {address?.city}
                        </p>
                        <p>Pincode: {address?.pincode}</p>
                        <p>Ph No: {address?.mobileNumber}</p>
                      </div>
                    </div>
                    <div className="order-history-order-layout">
                      {order &&
                        order?.map(({ id, title, qty, thumbnail }) => {
                          return (
                            <div className="product-order-history" key={id}>
                              <img
                                src={thumbnail}
                                width="100px"
                                height="100px"
                                alt={title}
                              />
                              <span className="product-order-content-history">
                                {title} X {qty}
                              </span>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                );
              }
            )}
        </ol>
      </div>
    );
  }
};
