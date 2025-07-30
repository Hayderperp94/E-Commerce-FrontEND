import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../../Pages/Product/CartContext";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart, cart } = useCart();
  const [qty, setQty] = useState(1);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const apiUrl =
      process.env.NODE_ENV === "development"
        ? "https://localhost:7124/api/Products/findbyid"
        : "https://hayder1994-001.otempurl.com/api/Products/findbyid";

    fetch(`${apiUrl}${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const handleIncrease = () => setQty(qty + 1);
  const handleDecrease = () => setQty(qty > 1 ? qty - 1 : 1);

  const handleAddToCart = () => {
    console.log("Auth check → isAuthenticated:", isAuthenticated);
    if (!isAuthenticated) {
      console.log("Redirecting to /auth...");
      navigate("/auth", { state: { from: location.pathname } });
    } else {
      addToCart({ ...product, qty });
      navigate("/cart");
    }
  };
  

  return (
    <div className="product-description">
      <h1>{product.prodName}</h1>
      <p>{product.prodDescription}</p>

      <div className="product-images">
        {product.images?.length > 0 ? (
          product.images.map((image, index) => (
            <img
              key={index}
              src={image?.imageUrl || "https://via.placeholder.com/200"}
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

      <div className="quantity-selector">
        <button onClick={handleDecrease} className="btn btn-secondary">-</button>
        <span className="qty">{qty}</span>
        <button onClick={handleIncrease} className="btn btn-secondary">+</button>
      </div>

      <button className="btn btn-success" onClick={handleAddToCart}>
        🛒 Add to Cart {cart.length > 0 && `(${cart.length})`}
      </button>
    </div>
  );
};

export default ProductDetails;
