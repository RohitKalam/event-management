
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserNav from "./UserNav";

const UserSettings = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
      setMessage("All fields are required!");
      return;
    }
    if (formData.newPassword !== formData.confirmPassword) {
      setMessage("New password and confirm password do not match!");
      return;
    }
    if (formData.newPassword.length < 6) {
      setMessage("Password must be at least 6 characters long!");
      return;
    }

    // Process password change logic here (API call)
    console.log("Password updated successfully:", formData.newPassword);
    setMessage("Password updated successfully!");
  };

  return (
    <>
      <UserNav />
      <div className="container d-flex justify-content-center mt-4">
        <div className="card shadow-lg  p-4 w-50">
          <h3 className="text-center mb-3">Change Password</h3>

          {message && <p className={`text-center ${message.includes("successfully") ? "text-success" : "text-danger"}`}>{message}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Current Password</label>
              <input type="password" name="currentPassword" className="form-control" onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input type="password" name="newPassword" className="form-control" onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm New Password</label>
              <input type="password" name="confirmPassword" className="form-control" onChange={handleChange} required />
            </div>

            <button type="submit" className="btn btn-primary w-100">Update Password</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserSettings;
