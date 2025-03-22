// src/components/Sidebar.jsx
import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Menu, X, Home, User, Settings } from 'lucide-react';
import { logout, setUserInfo } from '../../Redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function NavItem({ icon, label }) {
  return (
    <div className="sidebar__nav-item">
      {icon}
      <span>{label}</span>
    </div>
  );
}

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get token and user info from Redux
  const { token, userInfo, isAuthenticated } = useSelector((state) => state.auth);

  // Fetch user info if not available in Redux (only when user is authenticated)
  useEffect(() => {
    if (isAuthenticated && token && !userInfo.username) {
      const fetchUserInfo = async () => {
        try {
          console.log('Token:', token);
  
          const response = await fetch("https://localhost:7124/api/AppUser/userinfo", {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`, // Ensure token is valid and not empty
              "Content-Type": "application/json"
            }
          });
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          console.log("User info:", data);
          dispatch(setUserInfo(data)); // Save user info to Redux
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      };
  
      fetchUserInfo();
    }
  }, [dispatch, isAuthenticated, userInfo.username, token]);
  

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/auth');
  };

  return (
    <>
      {/* Fabars Button */}
      <button className="sidebar__toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        {/* User Profile */}
        <div className="sidebar__profile">
          <img
            src={`https://ui-avatars.com/api/?name=${userInfo.username}`}
            alt="User Avatar"
            className="sidebar__avatar"
          />
          <div>
            <h2 className="sidebar__name">{isAuthenticated ? userInfo.username : 'Guest'}</h2>
            <p className="sidebar__email">{isAuthenticated ? userInfo.email : 'Not logged in'}</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar__nav">
          <Link to="/dashboard"><NavItem icon={<Home size={20} />} label="Dashboard" /></Link>
          <Link to="/profile"><NavItem icon={<User size={20} />} label="Profile" /></Link>
          <Link to="#"><NavItem icon={<Settings size={20} />} label="Settings" /></Link>
        </nav>

        {/* Logout Button */}
          <button className="sidebar__logout" onClick={handleLogout}>Logout</button>
        
      </aside>
    </>
  );
}

export default Sidebar;
