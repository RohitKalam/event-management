import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ForgotPass = () => {
  const [mode, setMode] = useState("email"); // Toggles between email & mobile
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${mode}: ${inputValue}`);
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow p-4 w-50">
        <h4 className="text-center mb-3">Forgot Password</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">
              Enter your {mode === "email" ? "Email" : "Mobile Number"}
            </label>
            <input
              type={mode === "email" ? "email" : "tel"}
              className="form-control"
              placeholder={mode === "email" ? "Enter Email" : "Enter Mobile Number"}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn bg-c-green w-100">
            Submit
          </button>
        </form>

        {/* Toggle Link */}
        <div className="text-center mt-3">
          <button
            className="btn btn-link text-decoration-none"
            onClick={() => setMode(mode === "email" ? "mobile" : "email")}
          >
            {mode === "email" ? "Forgot using Mobile?" : "Forgot using Email?"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
