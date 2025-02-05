import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../Components/Card/Card"; // Assuming Card component exists

const Pay = () => {
    const [products, setProducts] = useState([]);
    const [oneProduct, setOneProduct] = useState(null);
    const [userID, setUserID] = useState(null);
    const [qty, setQty] = useState(1); // Default quantity

    // Extract numeric ID from the URL
    const url = window.location.href;
    const match = url.match(/\/(\d+)$/);
    const IDpackage = match ? parseInt(match[1], 10) : null;

    console.log("🆔 Extracted IDpackage:", IDpackage, typeof IDpackage);

    // Fetch user ID from backend
    useEffect(() => {
        const getUserID = async () => {
            try {
                const token = localStorage.getItem("accessToken");

                if (!token) {
                    console.error("⚠️ No JWT Token found! User might not be logged in.");
                    return;
                }

                const res = await axios.get("https://localhost:7124/api/AppUser/userinfo", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (!res.data || !res.data.userID) {
                    console.error("⚠️ userID not found in API response!");
                    return;
                }

                setUserID(res.data.userID);
                console.log("✅ User ID fetched successfully:", res.data.userID);
            } catch (error) {
                console.error("❌ Error fetching user info:", error.response?.data || error);
            }
        };

        getUserID();
    }, []);

    // Fetch all products and select the required product
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("https://localhost:7124/api/Products/GetAllProd");

                if (!Array.isArray(res.data) || res.data.length === 0) {
                    console.error("⚠️ No products found in API response!");
                    return;
                }

                setProducts(res.data);

                if (!IDpackage) {
                    console.error("⚠️ IDpackage is undefined or null!");
                    return;
                }

                const filteredData = res.data.filter(el => el.id === IDpackage);

                if (filteredData.length === 0) {
                    console.error(`⚠️ No product found with id ${IDpackage}`);
                    setOneProduct(res.data[0]); // Fallback to first product
                } else {
                    setOneProduct(filteredData[0]);
                }
            } catch (error) {
                console.error("❌ Error fetching products:", error);
            }
        };

        getData();
    }, [IDpackage]);

    // Send selected product data to the backend
    const sendData = async () => {
        if (!oneProduct || !userID) {
            console.error("⚠️ No product selected or user is not authenticated!");
            alert("Please ensure that a product is selected and you're logged in.");
            return;
        }

        console.log("📤 Sending data:", { 
            productID: oneProduct.id, 
            userID: userID, 
            qty: qty 
        });

        try {
            const token = localStorage.getItem("accessToken");
            if (!token) {
                console.error("⚠️ No JWT Token found! Please log in.");
                return;
            }

            const res = await axios.post(
                "https://localhost:7124/api/Cart/CreateCart",
                {
                    productID: oneProduct.id,
                    userID: userID,
                    qty: qty
                },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );

            console.log("✅ Product added to cart successfully!", res);
        } catch (error) {
            console.error("❌ Error adding product to cart:", error.response?.data || error);
        }
    };

    return (
        <div>
            {/* Input for quantity */}
            <input
                placeholder="Enter quantity"
                type="number"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                min="1"
            />

            <button onClick={sendData} type="button" disabled={!oneProduct || !userID}>
                شراء المنتج
            </button>

            <div className="row justify-content-center">
                {oneProduct && (
                    <div key={oneProduct.id} className="col-md-3">
                        <Card
                            name={oneProduct.prodName}
                            desc={oneProduct.prodDescription}
                            img={oneProduct.images?.length > 0 ? oneProduct.images[0].imageUrl : "not found"}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Pay;
