import axios from "axios";


const API_URL =
  window.location.hostname === "localhost"
    ? "https://localhost:7124/api/AppUser"
    : "https://hayder1994-001-site1.ltempurl.com/api/AppUser";

    
// Register User by sending the fetched data
export const registerUser = async (userData) => {
  try {
    console.log("Sending request:", userData); // Debug request payload
    const response = await axios.post(`${API_URL}/CreateUser`, userData);
    console.log("Response received:", response.data);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || "Registration failed. Please try again.");
  }
};



// // Forgot Password
// export const forgotPassword = async (email) => {
//   try {
//     const response = await axios.post(`${API_URL}/forgot-password`, { email });
//     return response.data;
//   } catch (error) {
//     throw error.response ? error.response.data : error.message;
//   }
// };
