export const SingleProductImages = ({ data }) => {
  const imageContainer = {
    // border: "1px solid yellow",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  };
  const singleProductImage = {
    margin: "15px 0",
    // border: "1.59px solid black",
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  };
  return (
    <div style={imageContainer}>
      {data &&
        data.map((url) => (
          <img
            style={singleProductImage}
            key={url}
            src={url}
            alt="product image"
            width="350px"
            height="350px"
          />
        ))}
    </div>
  );
};
