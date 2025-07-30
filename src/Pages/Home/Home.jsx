import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../Components/Card/Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    const baseURL =
  window.location.hostname === "localhost"
    ? "https://localhost:7124/api/"
    : "https://hayder1994-001-site1.otempurl.com/api/";

axios
  .get(`${baseURL}Categories/GetAllCat`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((res) => setCategories(res.data))
  .catch((err) => console.error("Error fetching categories:", err));

  }, []);

 

  return (
    <div className="bg-div py-5">
      

      <div className="row justify-content-center">
        {categories?.filter((el) => el.id !== 5)
        .map((el, index) => (
          <div className="col-md-4 col-sm-6 col-lg-3 col-12 mb-4" key={index}>
            <Card
              name={el.categoryName}
              desc={el.categoryDescription}
              img={el.imageUrl}
              path={`/product/${el.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
