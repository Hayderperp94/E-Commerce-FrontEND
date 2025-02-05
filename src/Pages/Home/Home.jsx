import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import Card from "../../Components/Card/Card";
import { useAuth } from "../../Context/AuthContext"; // Import authentication context
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const { logout } = useAuth(); // Get logout function from AuthContext
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    axios
      .get("https://localhost:7124/api/Categories/GetAllCat", {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in headers
        },
      })
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  const handleLogout = () => {
    logout(); // Perform logout
    navigate("/auth"); // Redirect to login page
  };

  return (
    <div className="bg-div">
      <button onClick={handleLogout} className="btn btn-danger" style={{ marginBottom: "20px" }}>
        Logout
      </button>

      <div className="row justify-content-center">
        {categories?.map((el, index) => (
          <div className="col-md-3 col-sm-6 col-lg-4 col-12 mb-4" key={index}>
            <Card
              name={el.categoryName}
              desc={el.categoryDescription}
              img={el.images.length > 0 ? el.images[0].imageUrl : "not found"}
              path={`/product/${el.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
