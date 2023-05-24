import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "./OrderHistory.css";

export const OrderHistory = () => {
  const { dataState } = useContext(DataContext);
  console.log(dataState?.orderHistory);
  return (
    <div className="order-history-container">
      <ol>
        {dataState?.orderHistory &&
          dataState?.orderHistory?.map(
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
                <li className="order-history" key={id}>
                  <p>
                    <span>Order ID</span>
                    {id}
                  </p>
                  <p>
                    <span>Order Date</span>
                    {orderDate}
                  </p>
                  <p>
                    <span>Order Time</span>
                    {orderTime}
                  </p>
                  <h2>Ordered Items</h2>
                  <div className="order-history-order-layout">
                    {order &&
                      order?.map(({ id, title, qty, thumbnail }) => {
                        return (
                          <div className="orderhistory-order" key={id}>
                            <img src={thumbnail} width="130px" alt={title} />
                            <span className="product-order-content">
                              {title} X {qty}
                            </span>
                          </div>
                        );
                      })}
                  </div>

                  <h2>Delivered Address</h2>
                  <div>
                    <h2>{address.userName}</h2>
                    <p>
                      House Number: {address?.houseNumber} Area: {address.area}
                    </p>
                    <p>City: {address.city}</p>
                    <p>
                      Pincode: {address?.pincode} Ph No. {address.mobileNumber}
                    </p>
                  </div>
                </li>
              );
            }
          )}
      </ol>
    </div>
  );
};
