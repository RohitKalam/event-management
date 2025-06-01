import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Signin = () => {

  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // React Router navigation
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSignin = (e) => {
    e.preventDefault();
    alert(`${formData.email} logged in successfully!`);
    localStorage.setItem("isAuthenticated", "true"); // Set authentication flag
    navigate("/Dashboard"); // Redirect to Dashboard
    // Call API function here
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center mb-4">Organizer Sign In</h2>
      <form className="w-25 mx-auto" onSubmit={handleSignin}>
        
        <input type="email" className="form-control mb-3" placeholder="Email" name="email" onChange={handleChange} />
        <input type="password" className="form-control mb-3" placeholder="Password" name="password" onChange={handleChange} />
        <Link to="/forgot-password" className="">Forgot Password?</Link>
        <button className="btn btn-success mb-3  mt-3 w-100">Sign In</button>
        Don't have Account?<Link to="/register" > Create.</Link>

      </form>
    </div>
  );
};

export default Signin;
