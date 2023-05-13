import { NavLink } from "react-router-dom";
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
            size,
            thumbnail,
            type,
          }) => {
            return (
              <div className="card-container" key={id}>
                <NavLink to={`/products`}>
                  <img
                    src={thumbnail}
                    alt={title}
                    width="300px"
                    height="280px"
                  />
                </NavLink>
                <div className="card-content">
                  {type.toLowerCase() === "best seller" && (
                    <div className="card-trending-tag">Trending</div>
                  )}
                  <div className="heart-icon">
                    <i class="fa-sharp fa-regular fa-heart"></i>
                  </div>
                  <div className="card-size">{size}</div>
                  <div className="card-title-div">
                    <NavLink to={`/products/${id}`} className="card-title">
                      {title}
                    </NavLink>
                  </div>

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
