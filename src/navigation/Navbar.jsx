import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <NavLink to="/" className="logo-link">
          Luxuria
        </NavLink>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? "nav-link navlink-active" : "nav-link"
            }
          >
            <i className="fas fa-magnifying-glass"></i>
            <span className="link-text">Search</span>
          </NavLink>
        </li>
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
            <span className="wishlist-count">0</span>
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
            <span className="cart-count">0</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "nav-link navlink-active" : "nav-link"
            }
          >
            <i className="fas fa-user"></i>
            <span className="link-text">Account</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
