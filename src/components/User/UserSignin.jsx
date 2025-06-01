import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
const UserSignin = () => {

  const [formData, setFormData] = useState({ email: "", password: "" });
const navigate = useNavigate(); // React Router navigation
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSignin = (e) => {
    e.preventDefault();
    localStorage.setItem("isAuthenticated", "true"); // Set authentication flag
    navigate("/index");
    
    // Call API function here
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Sign In</h2>
      <form className="w-25 mx-auto" onSubmit={handleSignin}>
        
        <input type="email" className="form-control mb-3" placeholder="Email" name="email" onChange={handleChange} />
        <input type="password" className="form-control mb-2" placeholder="Password" name="password" onChange={handleChange} />
        <Link to="/forgot-password" className="">Forgot Password?</Link>
        <button className="btn btn-primary w-100 mt-3 mb-4">Sign In</button>
        <Link to="/user-signup" className="d-flex justify-content-center">Sign Up</Link>

      </form>
    </div>
  );
};

export default UserSignin;
