import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirecting
import { registerUser } from "../../api/auth"; // Import API function
import { Link } from "react-router-dom"; // Import Link for navigation

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null); // State to track success or error message
  const navigate = useNavigate(); // Initialize navigate for redirecting

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      setIsSuccess(false);
      return;
    }

    try {
      const { confirmPassword, ...submitData } = formData; // Exclude confirmPassword
      const response = await registerUser(submitData);
      if (response.success) {
        setMessage("Registration successful!");
        setIsSuccess(true);
      } else {
        setMessage(response.message || "Registration failed. Please try again.");
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage(error.message || "Registration failed. Please try again.");
      setIsSuccess(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
            {message && (
              <p className={`text-center mt-3 ${isSuccess ? "text-success" : "text-danger"}`}>
                {message}
              </p>
            )}
            {/* Link to login page */}
            <div className="mt-3 text-center">
              <p>
                Already have an account?{" "}
                <Link to="/auth" className="btn btn-link">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
