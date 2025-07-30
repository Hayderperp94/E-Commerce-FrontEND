import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";
import Card from "../../Components/Card/Card";
import { useCart } from "../../Pages/Product/CartContext";

const Pay = () => {
    const [oneProduct, setOneProduct] = useState(null);
    const [userID, setUserID] = useState(null);
    const { addToCart } = useCart();
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const [qty, setQty] = useState(Number(searchParams.get("qty")) || 1);

    // Set API URL depending on environment
    const API_URL = process.env.NODE_ENV === "development" 
        ? "https://localhost:7124/api/" 
        : "https://hayder1994-001-site1.ltempurl.com/api/";

    useEffect(() => {
        const getUserID = async () => {
            try {
                const token = localStorage.getItem("accessToken");
                if (!token) return;

                const res = await axios.get(`${API_URL}AppUser/userinfo`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (res.data?.userID) {
                    setUserID(res.data.userID);
                }
            } catch (error) {
                console.error("❌ Error fetching user info:", error);
            }
        };

        getUserID();
    }, [API_URL]);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`${API_URL}Products/findbyid/${id}`);
                setOneProduct(res.data);
            } catch (error) {
                console.error("❌ Error fetching product:", error);
            }
        };

        getProduct();
    }, [id, API_URL]);

    const handleIncrease = () => setQty(qty + 1);
    const handleDecrease = () => setQty(qty > 1 ? qty - 1 : 1);

    const sendData = async () => {
        if (!oneProduct || !userID) {
            alert("Please ensure that a product is selected and you're logged in.");
            return;
        }

        try {
            const token = localStorage.getItem("accessToken");
            if (!token) return;

            const res = await axios.post(
                `${API_URL}Cart/CreateCart`,
                {
                    productID: oneProduct.id,
                    userID: userID,
                    qty: qty,
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            console.log("✅ Product added to cart successfully!", res);
            addToCart({ ...oneProduct, qty }); // Ensure it's added to context cart
        } catch (error) {
            console.error("❌ Error adding product to cart:", error);
        }
    };

    return (
        <div>
            <h2>Confirm Your Purchase</h2>
            
            <div className="quantity-selector">
                <button onClick={handleDecrease} className="btn btn-secondary">-</button>
                <span className="qty">{qty}</span>
                <button onClick={handleIncrease} className="btn btn-secondary">+</button>
            </div>

            <button onClick={sendData} type="button" disabled={!oneProduct || !userID}>
                🛒 Buy Now
            </button>

            {oneProduct && (
                <Card
                    name={oneProduct.prodName}
                    desc={oneProduct.prodDescription}
                    img={oneProduct.images?.[0]?.imageUrl || "not found"}
                />
            )}
        </div>
    );
};

export default Pay;
