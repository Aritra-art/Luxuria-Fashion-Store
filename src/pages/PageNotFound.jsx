import { useNavigate } from "react-router";
import { Button } from "../components/Button";

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <img
        src="https://static.vecteezy.com/system/resources/previews/005/883/254/original/page-not-found-404-error-concept-illustration-free-vector.jpg"
        alt="pagenotfound"
        height="550px"
        width="700px"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <h2 style={{ textAlign: "center" }}>
        Oops! The page you're trying to reach doesn't exist.
      </h2>
      <div style={{ margin: "auto" }} onClick={() => navigate("/products")}>
        <Button title="Shop Now" />
      </div>
    </>
  );
};
