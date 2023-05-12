import { Button } from "./Button";
import "./ProductCard.css";

export const ProductCard = ({ data }) => {
  return (
    <>
      {data.length > 0 &&
        data?.map(
          ({
            id,
            title,
            price,
            discountPercentage,
            rating,
            category,
            thumbnail,
          }) => {
            return (
              <div className="card-container" key={id}>
                <img src={thumbnail} alt={title} width="330px" height="280px" />
                <div className="card-content">
                  <div className="heart-icon">
                    <i class="fa-sharp fa-regular fa-heart"></i>
                  </div>
                  <div className="card-title">{title}</div>
                  <div className="card-price">
                    <span className="new-price">
                      {price - Math.round((discountPercentage / 100) * price)}
                    </span>
                    <span className="discount-percentage">
                      {discountPercentage}
                    </span>
                    <span className="original-price">{price}</span>
                  </div>
                  <div className="card-category">{category}</div>
                  <div className="card-rating">
                    {rating}
                    <i class="fas fa-star rating-star"></i>
                  </div>
                </div>
                <div
                  className="card-btn"
                  onClick={() => console.log("clicked")}
                >
                  <Button title="Add To Cart" />
                </div>
              </div>
            );
          }
        )}
    </>
  );
};
