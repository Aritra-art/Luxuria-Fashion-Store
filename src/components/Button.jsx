import "./Button.css";

export const Button = ({ title, disabled }) => {
  return (
    <button
      disabled={disabled}
      style={{
        cursor: disabled ? "not-allowed" : "pointer",
        background: disabled && "gray",
      }}
      className={
        title === "Go to Cart" ||
        title === "Remove from Cart" ||
        title === "Go to Wishlist" ||
        title === "Clear Cart"
          ? "btn-style-secondary"
          : "btn-style"
      }
    >
      {title}
    </button>
  );
};
