import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate(); // Use navigate hook for redirection

  useEffect(() => {
    console.log("Fetching product...");
    fetch(`https://localhost:7124/api/Products/findbyid${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched product:", data); // Log the fetched product data
        setProduct(data);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  console.log("Product data:", product); // Check the product data

  if (!product) {
    return <p>Loading...</p>; // Show loading while fetching product details
  }

  return (
    <div className="product-description">
      <h1>{product.prodName}</h1>
      <p>{product.prodDescription}</p>

      <div className="product-images">
        {product.images && Array.isArray(product.images) && product.images.length > 0 ? (
          product.images.map((image, index) => (
            <img
              key={index}
              src={image.imageUrl || "https://via.placeholder.com/200"} // Use a placeholder if no URL is available
              alt={`${product.prodName} - ${index}`}
              style={{ width: "200px", height: "200px" }}
            />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>

      <div className="product-price">
        <h3>Price: ${product.unitPrice}</h3>
      </div>

      {/* Use product.id instead of el.id */}
      <button className="btn btn-success" onClick={() => navigate(`/pay/${product.id}`)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
