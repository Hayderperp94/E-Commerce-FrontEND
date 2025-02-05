// src/Pages/AuthPage/AuthPage.js
import React, { useState } from 'react';
import LoginPage from '../LoginPage/LoginPage';
import Register from '../../Components/Register and forgot password/Register';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Default to login

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      
      {/* Render either the login or register form based on state */}
      {isLogin ? <LoginPage /> : <Register />}

      {/* Toggle buttons to switch between Login and Register */}
      <button onClick={toggleForm}>
        {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
      </button>
    </div>
  );
};

export default AuthPage;
