// src/components/Router.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Product from '../../Pages/Product/Product';
import Pay from '../../Pages/Pay/Pay';
import ProductDetails from '../../Pages/ProductDetails/ProductDetails';
import AuthPage from '../../Pages/AuthPage/AuthPage';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';  // Import ProtectedRoute

const Router = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/pay/:id" element={<Pay />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />

      {/* Protected Routes */}
      <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
    </Routes>
  );
};

export default Router;
