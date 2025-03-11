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
      {/* Render either the login or register form based on state */}
      {isLogin ? <LoginPage /> : <Register />}

      {/* Option to toggle between login and register forms */}
      <div>
        <button onClick={toggleForm}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
