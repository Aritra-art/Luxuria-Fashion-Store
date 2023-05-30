export const CartDetails = ({ data }) => {
  const orderListStyle = {
    listStyle: "none",
    margin: "0px 10px",
    borderRadius: "6px",
    padding: "0",
  };
  const listItemStyle = {
    border: "1px solid black",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    margin: "20px 0px",
    backgroundColor: "#f9fafb",
    borderRadius: "6px",
    padding: "10px 0px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };
  const titleStyle = {
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "1.1rem",
    marginLeft: "20px",
  };
  const priceStyle = {
    fontWeight: "bold",
    fontSize: "1.1rem",
    marginRight: "20px",
  };
  return (
    <ol style={orderListStyle}>
      {data &&
        data?.map(({ id, title, qty, price, discountPercentage }) => {
          return (
            <li key={id} style={listItemStyle}>
              <span style={titleStyle}>
                <b style={{ marginRight: "10px" }}>{title}</b>
                <span style={{ fontSize: "1.2rem" }}>X {qty}</span>{" "}
              </span>

              <span style={priceStyle}>
                ₹{price - Math.round((discountPercentage / 100) * price)}
              </span>
            </li>
          );
        })}
    </ol>
  );
};
