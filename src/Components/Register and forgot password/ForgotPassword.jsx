// import { useState } from "react";
// import { forgotPassword } from "../../api/auth"; // Import API function

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await forgotPassword(email);
//       setMessage("A password reset link has been sent to your email.");
//     } catch (error) {
//       setMessage(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Forgot Password</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required />
//         <button type="submit">Send Reset Link</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default ForgotPassword;
