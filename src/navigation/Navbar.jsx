import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext, useState } from "react";
import { AuthContext } from "../context/Auth/AuthContext";
import { DataContext } from "../context/DataContext";
import { FilterContext } from "../context/FilterContext";

export const Navbar = () => {
  const { authState } = useContext(AuthContext);
  const { dataState, dispatchData } = useContext(DataContext);
  const { filterState, dispatchFilter } = useContext(FilterContext);
  const navigate = useNavigate();

  const inputStyle = {
    padding: "6px 12px",
    width: "90%",
    borderRadius: "5px",
    border: "2px solid black",
    outline: "none",
    letterSpacing: "2px",
    fontSize: "em",
  };
  return (
    <nav className="navbar">
      <div className="logo-container">
        <NavLink to="/" className="logo-link">
          Luxuria
        </NavLink>
      </div>
      <ul className="navbar-nav">
        {dataState?.showSearch && (
          <li className="nav-item-hoverles">
            {" "}
            <input
              type="text"
              placeholder="SEARCH"
              style={inputStyle}
              value={filterState?.searchFilter}
              onChange={(e) => {
                dispatchFilter({
                  type: "SET_SEARCH_FILTER",
                  payload: e.target.value,
                });
                navigate("/products");
              }}
            />
            <span></span>
          </li>
        )}

        {!dataState?.showSearch && (
          <li
            className="nav-item nav-item-pointer"
            onClick={() => {
              dispatchData({
                type: "SET_SHOWSEARCH_TRUE",
                payload: true,
              });
              navigate("/products");
            }}
          >
            <i className="fas fa-magnifying-glass"></i>
            <span className="link-text">Search</span>
          </li>
        )}

        <li className="nav-item">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "nav-link navlink-active" : "nav-link"
            }
          >
            <i className="fas fa-shopping-bag"></i>
            <span className="link-text">Products</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive ? "nav-link navlink-active" : "nav-link"
            }
          >
            <i className="fas fa-heart"></i>
            <span className="link-text">Wishlist</span>
            <span className="wishlist-count">
              {dataState?.wishlist?.length}
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "nav-link navlink-active" : "nav-link"
            }
          >
            <i className="fas fa-shopping-cart"></i>
            <span className="link-text">Cart</span>
            <span className="cart-count">{dataState?.cart?.length}</span>
          </NavLink>
        </li>
        <li
          className={authState?.isLoggedin ? "nav-item-hoverles" : "nav-item"}
        >
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "nav-link navlink-active" : "nav-link"
            }
          >
            {!authState?.isLoggedin && <i className="fas fa-user"></i>}
            <span className="link-text">
              {authState?.isLoggedin ? (
                <span
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "4px 6px",
                    borderRadius: "3px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                  }}
                >
                  {authState?.userDetails?.firstName}
                </span>
              ) : (
                "Account"
              )}
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
