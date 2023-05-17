import "./Button.css";

export const Button = ({ title }) => {
  return (
    <button
      className={
        title === "Go to Cart" || title === "Remove from Cart"
          ? "btn-style-secondary"
          : "btn-style"
      }
    >
      {title}
    </button>
  );
};
