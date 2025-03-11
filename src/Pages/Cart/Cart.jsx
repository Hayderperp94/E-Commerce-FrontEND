import React from "react";
import { useCart } from "../Product/CartContext";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h3>{item.prodName}</h3>
            <p>Price: ${item.unitPrice}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
