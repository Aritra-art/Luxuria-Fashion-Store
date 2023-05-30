import "./SingleProductImages.css";

export const SingleProductImages = ({ data }) => {
  const imageContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  };
  return (
    <div style={imageContainer}>
      {data &&
        data.map((url) => {
          return (
            <>
              <img
                className="single-product-image"
                key={url}
                src={url}
                alt="product"
                width="400px"
                height="400px"
              />
            </>
          );
        })}
    </div>
  );
};
