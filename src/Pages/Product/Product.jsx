import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../Components/Card/Card";
import { useParams } from "react-router-dom";  // Import useParams

const Product = () => {
  const { id } = useParams(); // Use useParams to get the dynamic 'id' from the URL
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  const baseURL =
    window.location.hostname === "localhost"
      ? "https://localhost:7124/api/"
      : "https://hayder1994-001-site1.ltempurl.com/api/";

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`${baseURL}Products/GetAllProd`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products. Please try again.");
      }
    };

    getProduct();
  }, []);

  const categoryNames = {
    "1": "الهواتف المحمولة ",
    "2": "اجهزة الحاسوب واللابتوب",
    "3": "الاكسسوارات",
    "4": "العناية والجمال",
  };

  return (
    <div className="bg-div py-5">
      <h1 className="fw-bold text-danger text-center mb-4">
        تعرف على المنتجات الكثيرة في قسم{" "}
        {categoryNames[id] || "منتجات متنوعة"}
      </h1>

      {error && <p className="text-danger text-center">{error}</p>}

      <div className="row justify-content-center">
        {product
          ?.filter((el) => el.categoryId == id)
          .map((el) => (
            <div className="col-md-4 col-sm-6 col-lg-3 col-12 mb-4" key={el.id}>
              <Card
                name={el.prodName}
                desc={el.prodDescription}
                img={el.images.length > 0 ? el.images[0].imageUrl : "/placeholder.jpg"}
                path={`/productdetails/${el.id}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
