import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Pages/Product/CartContext";


import "./Navbar.css";
import img from "../../assets/logo.png";
import Sidebar from "../Sidebar/Sidebar"; // Import Sidebar

const Navbar = () => {
  const { cart } = useCart();

  const [sidebarOpen, setSidebarOpen] = useState(false); // Toggle state

 

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">

        {/* Hamburger + Logo */}
        <div className="d-flex gap-4 align-items-center">
         
          <Link to="/">
            <img className="mx-3 logo" src={img} alt="Logo" width="100px" />
          </Link>
        </div>

        {/* Categories */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to={`beautyandcare/4`} className="nav-link"><h2 className="fs-5">العناية والجمال</h2></Link>
            </li>
            <li className="nav-item">
              <Link to={`/smartphones/1`} className="nav-link"><h2 className="fs-5">الاجهزةالمحمولة</h2></Link>
            </li>
            <li className="nav-item">
              <Link to={`/computersandlaptops/2`} className="nav-link"><h2 className="fs-5">اجهزة الحاسوب</h2></Link>
            </li>
            <li className="nav-item">
              <Link to={`accessories/3`} className="nav-link"><h2 className="fs-5"> الاكسسوارات</h2></Link>
            </li>
          </ul>
        </div>

        {/* Cart & Auth */}
        <div className="d-flex align-items-center">
          <button className="nav-lang-button">EN</button>
          <Link to="/cart" className="cart-container">🛒 <span className="cart-count">{cart.length}</span></Link>
         
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </nav>
  );
};

export default Navbar;
