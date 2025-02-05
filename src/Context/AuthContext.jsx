import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() => localStorage.getItem("authToken"));

  useEffect(() => {
    if (authToken) {
      localStorage.setItem("authToken", authToken);  // Sync token with localStorage
    } else {
      localStorage.removeItem("authToken");  // Remove token when logged out
    }
  }, [authToken]);

  const login = (token) => {
    setAuthToken(token);  // Set token and save it to localStorage
  };

  const logout = () => {
    setAuthToken(null);  // Clear the token and remove from localStorage
  };

  // Check if the user is authenticated (i.e., if the token exists)
  const isAuthenticated = () => {
    return !!authToken;  // Returns true if authToken exists, false otherwise
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
