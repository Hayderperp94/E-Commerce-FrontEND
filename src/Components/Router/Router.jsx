import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Product from "../../Pages/Product/Product";
import Pay from "../../Pages/Pay/Pay";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import AuthPage from "../../Pages/AuthPage/AuthPage";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Register from "../Register and forgot password/Register";
import Cart from "../../Pages/Cart/Cart";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"; // Use the correct one
import UserProfile from "../UserProfile/UserProfile";

const Router = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/home" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/electronics/:id" element={<Product />} />
      <Route path="/games/:id" element={<Product />} />
      <Route path="/homeappliances/:id" element={<Product />} />
      <Route path="/accessories/:id" element={<Product />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/dashboard" element={<Dashboard />} />



      {/* Protected Routes */}
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/pay/:id"
        element={
          <ProtectedRoute>
            <Pay />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Default Redirect */}
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default Router;
