import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Pages/Product/CartContext"; // Import Cart Context
import { useDispatch, useSelector } from "react-redux"; // Import useSelector and useDispatch
import { logout } from "../../Redux/authSlice"; // Import logout action
import "./Navbar.css";
import img from "../../assets/logo.png";

const Navbar = () => {
  const { cart } = useCart(); // Get cart data
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Get the authentication state

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Left Side - Logo */}
        <div className="d-flex gap-4 align-items-center">
          <Link to="/">
            <img className="mx-3 logo" src={img} alt="Logo" width="100px" />
          </Link>
        </div>

        {/* Right Side - Cart and Language Button */}
        <div className="d-flex gap-4 align-items-center">
          <button className="nav-lang-button">EN</button>

          {/* Cart Icon with Count */}
          <Link to="/cart" className="cart-container">
            🛒 <span className="cart-count">{cart.length}</span>
          </Link>

          {/* Show Logout button if user is authenticated, otherwise show Login */}
          {isAuthenticated ? (
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/auth" className="btn btn-primary">Login</Link>
          )}
        </div>
      </div>

      {/* Mobile Menu - Toggler and Categories */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/electronics" className="nav-link">
              <h2 className="fs-5">الالكترونيات</h2>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/games" className="nav-link">
              <h2 className="fs-5">الالعاب</h2>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/accessories" className="nav-link">
              <h2 className="fs-5">الاكسسورات</h2>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/food" className="nav-link">
              <h2 className="fs-5">الطعام</h2>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
