import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate,Link } from "react-router-dom";

const UserSignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSignUp = (e) => {
    e.preventDefault();
    alert(`${formData.firstName} ${formData.lastName} registered successfully!`);
    // Call API function here
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Sign Up</h2>
      <form className="w-25 mx-auto" onSubmit={handleSignUp}>
        <input type="text" className="form-control mb-3" placeholder="First Name" name="firstName" onChange={handleChange} />
        <input type="text" className="form-control mb-3" placeholder="Last Name" name="lastName" onChange={handleChange} />
        <input type="email" className="form-control mb-3" placeholder="Email" name="email" onChange={handleChange} />
        <input type="tel" className="form-control mb-3" placeholder="Mobile" name="mobile" onChange={handleChange} />
        <input type="password" className="form-control mb-2" placeholder="Password" name="password" onChange={handleChange} />
        <button className="btn btn-primary w-100 mt-3 mb-4">Sign Up</button>
        <Link to="/user-signin" className="d-flex justify-content-center">Already have an account? Sign In</Link>
      </form>
    </div>
  );
};

export default UserSignUp;
